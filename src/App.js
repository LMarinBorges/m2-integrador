import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Cards from "./components/Cards.jsx";
import Detail from "./components/Detail";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";

function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.name) {
          window.alert("No hay personajes con ese ID.");
        } else if (characters.some((character) => character.id === data.id)) {
          window.alert("El personaje ya está en la lista.");
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      });
  };
  const onClose = (id) =>
    setCharacters((oldChars) =>
      oldChars.filter((character) => character.id !== id)
    );
  const onRandom = () => {
    let id;
    while (true) {
      id = Math.floor(Math.random() * 826);
      if (!characters.some((character) => character.id === id)) {
        break;
      }
    }
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters((oldChars) => [...oldChars, data]);
      });
  };

  return (
    <Routes>
      <Route element={<Nav onSearch={onSearch} onRandom={onRandom} />}>
        <Route index element={<Navigate to="/home" />} />
        <Route
          path="home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="about" element={<About />} />
        <Route path="detail/:detailId" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
