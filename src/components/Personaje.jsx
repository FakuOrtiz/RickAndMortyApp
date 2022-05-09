import React from 'react'
import "../styles/Personaje.css"

export default function Personaje({name, img}) {
  console.log(name)
  console.log(img);
  return (
      <div className="contenedorPersonaje">
        {console.log("hola")}
          <img src={img} />
          <h5 className='nombre'>{name}</h5>
      </div>
  )
}