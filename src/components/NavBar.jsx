import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../styles/NavBar.css";
import App from "../App";

export default function NavBar({ onSearch, fecthCharacters}) {

  let urlPage1 = "https://rickandmortyapi.com/api/character?page=1";

  return (
    <div className="contenedor">
      <h3 className="titulo">
        <NavLink className="tituloNavLink" to="/" onClick={() => fecthCharacters(urlPage1)}>
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
