import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Personajes from "./components/Personajes";
import Paginacion from "./components/Paginacion";
import Footer from "./components/Footer"

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  function fecthCharacters(url) {
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setPersonajes(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fecthCharacters(url);
  }, []);

  let onPrev = () => {
    fecthCharacters(info.prev);
  };

  let onNext = () => {
    fecthCharacters(info.next);
  };

  function onSearch(nombre) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
      .then((r) => r.json())
      .then((data) => {
        setPersonajes(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  }

  return (
      <div className="App">
        <NavBar onSearch={onSearch} />
        <Paginacion
          prev={info.prev}
          next={info.next}
          onPrev={onPrev}
          onNext={onNext}
        />
        <Personajes personajes={personajes} />
        <Paginacion
          prev={info.prev}
          next={info.next}
          onPrev={onPrev}
          onNext={onNext}
        />
        <Footer/>
      </div>
  );
}

export default App;
