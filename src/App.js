import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Counter from "./containers/Counter";
import Mapjson from "./containers/Mapjson";
import Country from "./containers/Country";
import Search from "./containers/Search";
import Test from "./containers/Test";
import Footer from "./containers/Footer";

// 1. Lister toutes les pages de l'application Web
// 2. Créer un composant par page
// 3. Créer des liens entre les pages

function App() {
  return (
    <span>
      <div className="header">
        <h1>beta-react</h1>
      </div>
      <div className="page">
        <Router>
          <Switch>
            <Route path="/country/:id">
              s
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
            <Route path="/modal">
              <Test />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <br />
      </div>
      <Footer></Footer>
    </span>
  );
}

export default App;
