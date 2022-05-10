import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Personaje.css"

export default function Personaje({name, img, id}) {
  return (
    <Link to={`/personaje/${id}`} className="linkTarjeta">
      <div className="contenedorPersonaje">
          <img className='imagenTarjeta' src={img} />
          <h5 className='nombre'>{name}</h5>
      </div>
    </Link>
  )
}