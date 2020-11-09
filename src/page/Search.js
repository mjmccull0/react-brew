import { useEffect, useState } from "react";
import BeerList from "./BeerList";
import config from "../config.json";
import styles from "./Search.module.css";


const Search = () => {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    const options = { signal: abortController.signal };
    const queryString = new URLSearchParams(query).toString();

    fetch(`${config.API_URL}?${queryString}`, options)
      .then(response => response.json())
      .then(data => setBeers(data))
      .catch((error) => console.error(error));

    return () => abortController.abort();
  },[query]);


  const handleInputChange = (event) => {
    const change = {[event.currentTarget.name]: event.currentTarget.value};
    const prevQuery = query;
    if (event.currentTarget.value) {
      setQuery({...query, ...change});
    } else {
      delete prevQuery[event.currentTarget.name];
      setQuery({...prevQuery});
    }
  }
    
  return (
    <div>
      <form className={styles.searchForm} autoComplete="off">
        <input
          name="beer_name"
          type="search"
          className={styles.searchBox}
          placeholder="Search"
          onChange={handleInputChange}
        />
      </form>
      <BeerList beers={beers} path={config.BEER_PATH_URL} />
    </div>
  );
}

export default Search;
