import React, { useState } from "react";
import "../styles/SearchBar.css";

export default function SearchBar({ onSearch }) {
  let [nombre, setNombre] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(nombre);
      }}
    >
      <input
        placeholder="Buscar personaje..."
        type="text"
        className="input"
        onChange={(e) => setNombre(e.target.value)}
      />
    </form>
  );
}
