import { useState } from "react";

import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";

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
    (async () => {
      while (true) {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${Math.floor(
            Math.random() * 826
          )}`
        );
        const data = await response.json();
        if (characters.some((character) => character.id === data.id)) {
          continue;
        } else {
          return data;
          break;
        }
      }
    })().then((data) => setCharacters((oldChars) => [...oldChars, data]));
  };

  return (
    <>
      <Nav onSearch={onSearch} onRandom={onRandom} />
      <Cards characters={characters} onClose={onClose} />
    </>
  );
}

export default App;
