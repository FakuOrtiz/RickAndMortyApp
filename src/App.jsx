import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Personajes from "./components/Personajes";
import Paginacion from "./components/Paginacion";
import Footer from "./components/Footer"
import InfoPersonaje from "./components/InfoPersonaje";

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
        if (data.results) {
          setPersonajes(data.results);
          setInfo(data.info);
        } else {
          alert("Personaje no encontrado");
        }
      })
  }

  function onFilter(id) {
    return personajes.find(p => p.id === parseInt(id))
  }

  return (
      <div className="App">
        <NavBar onSearch={onSearch} />
        <Switch>
          <Route path="/personaje/:id">
            {({match}) => <InfoPersonaje personaje={onFilter(match.params.id)}  />}
          </Route>
          <Route path="/">
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
          </Route>
        </Switch>
        <Footer/>
      </div>
  );
}

export default App;
