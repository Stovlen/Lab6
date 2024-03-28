import React from "react";
import "./App.css";
import Menu from "./pages/components/menu/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutComponent from "./pages/components/about-component/about-component";
import ListComponent from "./pages/components/list-component/list-component";
import FavouritesComponent from "./pages/components/favourites-component/FavouritesComponent";

function App() {
  //localStorage.removeItem('favourites');
  return (
    <section className="app">
      <header className="app-header">
        <Menu />
      </header>
      <Router>
        <Switch>
          <Route path="/about" component={AboutComponent} />
          <Route path="/favourites" component={FavouritesComponent} />
          <Route path="/" component={ListComponent} />
        </Switch>
      </Router>
    </section>
  );
}

export default App;
