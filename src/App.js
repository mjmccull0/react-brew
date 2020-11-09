import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Beer from './page/Beer';
import Search from './page/Search';
import './App.css';

function App() {
  return (
    <Router>
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/beer/:id">
          <Beer />
        </Route>
    </Router>
  );

}

export default App;
