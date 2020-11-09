import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import config from "../config.json";
import styles from "./Beer.module.css";

const Beer = (props) => {
  const { id } = useParams();
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const options = { signal: abortController.signal };
    fetch(`${config.API_URL}/${id}`, options)
      .then(response => response.json())
      .then(data => setBeer(data))
      .catch((error) => console.error(error));

    return () => abortController.abort();
  }, [id]);

  return (
    <div className={styles.container}>
     <div className={styles.beer}>
       <div className={styles.primaryText}>
         <h1>{beer.name}</h1>
         <p>{beer.tagline}</p>
       </div>
       <div className={styles.media}>
         <img className={styles.image} src={beer.image_url} alt="" />
       </div>
       <div className={styles.description}>
         <p>{beer.description}</p>
       </div>
     </div>
    </div>
  );
}

export default Beer;
