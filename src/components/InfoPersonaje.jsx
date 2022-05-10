import React from "react";
import "../styles/InfoPersonajes.css";

export default function InfoPersonaje({ personaje }) {
  function handleStatus(status) {
    switch (status) {
      case "Alive":
        return "Vivo";
      case "unknown":
        return "Desconocido";
      case "Dead":
        return "Muerto";
      default:
        return status;
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
        return "Hombre";
      case "Female":
        return "Mujer";
      case "Genderless":
        return "Sin género";
      case "unknown":
        return "Desconocido";
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
    <div className="contenedorInfo">
      <img className="imagenInfo" src={personaje.image}></img>
      <h3>{personaje.name}</h3>
      <div>
        <span>Estado:</span> {handleStatus(personaje.status)}
      </div>
      <div>
        <span>Especie:</span> {handleEspecie(personaje.species)}
      </div>
      {personaje.type && <p><span>Tipo:</span> {personaje.type}</p>}
      <div>
        <span>Género:</span> {handleGenero(personaje.gender)}
      </div>
      <div>
        <span>Origen:</span> {handleOrigenAndLocation(personaje.origin.name)}
      </div>
      <div>
        <span>Última localización conocida:</span>{" "}
        {handleOrigenAndLocation(personaje.location.name)}
      </div>
    </div>
  );
}
