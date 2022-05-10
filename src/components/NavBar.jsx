import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/NavBar.css";

export default function NavBar({onSearch}) {
  let [nombre, setNombre] = useState("");

  return (
    <div className="contenedor">
        <h3 className='titulo'><NavLink className="tituloNavLink" to="/">RICK AND MORTY APP</NavLink></h3>
        <form onSubmit={e => {
          e.preventDefault()
          onSearch(nombre)
          }}>
          <input placeholder="Buscar personaje..." type="text" className="input" onChange={e => setNombre(e.target.value)} />
        </form>
    </div>
  )
}