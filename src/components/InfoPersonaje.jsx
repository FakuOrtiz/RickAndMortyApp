import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/InfoPersonajes.css";

export default function InfoPersonaje({ personaje }) {
  const history = useHistory();

  function handleStatus(estado) {
    switch (estado) {
      case "Alive":
        return <p className="vivo">Vivo</p>;
      case "Dead":
        return <p className="muerto">Muerto</p>;
      default:
        return <p className="desconocido">Desconocido</p>;
    }
  }

  function handleEspecie(especie) {
    switch (especie) {
      case "Human":
        return "Humano";
      case "Humanoid":
        return "Humanoide";
      case "Mythological Creature":
        return "Criatura Mitológica";
      case "Disease":
        return "Enfermedad";
      case "unknown":
        return "Desconocido";
      default:
        return especie;
    }
  }

  function handleGenero(genero) {
    switch (genero) {
      case "Male":
        return <p className="masculino">♂️</p>;
      case "Female":
        return <p className="femenino">♀️</p>;
      case "Genderless":
        return <p className="sinGenero">⚧︎</p>;
      case "unknown":
        return <p className="genDesconocido">Desconocido</p>;
      default:
        return genero;
    }
  }

  function handleOrigenAndLocation(dato) {
    switch (dato) {
      case "unknown":
        return "Desconocido";
      default:
        return dato;
    }
  }

  return (
    <div>
      <button onClick={() => history.goBack()}>Atrás</button>
      <div className="contenedorInfo">
        <img className="imagenInfo" src={personaje.image}></img>
        <h3>{personaje.name}</h3>
        <div>
          {handleStatus(personaje.status)}
          {handleGenero(personaje.gender)}
        </div>
        <div className="contenedorEspecieOrigen">
          <div className="especie">
            <b>Especie</b><br/> {handleEspecie(personaje.species)}
          </div>
          <div className="origen">
            <b>Origen</b><br/> {handleOrigenAndLocation(personaje.origin.name)}
          </div>
        </div>
        <div>
          <b>Última localización conocida</b><br/>
          {handleOrigenAndLocation(personaje.location.name)}
        </div>
      </div>
    </div>
  );
}
