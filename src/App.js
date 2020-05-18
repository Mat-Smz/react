import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Counter from "./containers/Counter";
import Mapjson from "./containers/Mapjson";
import Country from "./containers/Country";
import Search from "./containers/Search";

// 1. Lister toutes les pages de l'application Web
// 2. Créer un composant par page
// 3. Créer des liens entre les pages

function App() {
  return (
    <div>
      <div>
        <h1>beta-react</h1>
      </div>
      <Router>
        <Switch>
          <Route path="/country/:id">
            <Country />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/json">
            <Mapjson />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
