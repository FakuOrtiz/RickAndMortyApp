import React from 'react'
import Personaje from './Personaje'
import "../styles/Personajes.css"

export default function Personajes({personajes}) {
  return (
    <div className='contenedorPrimario'>
        {
        personajes.map(pers => 
            <Personaje key={pers.id} name={pers.name} img={pers.image} id={pers.id} />
        )
        }
    </div>
  )
}