import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../styles/NavBar.css";

export default function NavBar({ onSearch }) {
  return (
    <div className="contenedor">
      <h3 className="titulo">
        <NavLink className="tituloNavLink" to="/">
          RICK AND MORTY APP
        </NavLink>
      </h3>
      <Switch>
        <Route exact path="/">
          <SearchBar onSearch={onSearch} />
        </Route>
      </Switch>
    </div>
  );
}
