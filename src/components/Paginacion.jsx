import React from "react";
import "../styles/Paginacion.css";

export default function Paginacion({ prev, next, onPrev, onNext }) {
  let handlePrev = () => {
    onPrev();
  };

  let handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul>
        {
        prev ?
          <li className="prev">
            <button onClick={handlePrev}>Prev</button>
          </li>
        : <div className="prev"></div>
        }
        {
        next ?
          <li className="next">
            <button onClick={handleNext}>Next</button>
          </li>
        : <div className="next"></div>
        }
      </ul>
    </nav>
  );
}
