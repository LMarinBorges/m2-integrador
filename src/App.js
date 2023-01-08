import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import About from "./components/About";
import Cards from "./components/Cards.jsx";
import Detail from "./components/Detail";
import Favorites from "./components/Favorites";
import Form from "./components/Form";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import * as actions from "./redux/actions";

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
  const dispatch = useDispatch();
  const onClose = (id) => {
    setCharacters((oldChars) =>
      oldChars.filter((character) => character.id !== id)
    );
    dispatch(actions.removeFavorite(id));
  };
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

  const user = {
    username: "liam.marin03926@protonmail.com",
    password: "MessiD1os",
  };
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const login = ({ username, password }) => {
    if (username === user.username && password === user.password) {
      setAccess(true);
      navigate("/home");
    }
  };
  const logout = () => setAccess(false);

  return (
    <Routes>
      <Route index element={<Form access={access} onLogin={login} />} />
      <Route
        element={
          <Nav
            access={access}
            onSearch={onSearch}
            onRandom={onRandom}
            onLogout={logout}
          />
        }
      >
        <Route
          path="home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route
          path="favorites"
          element={<Favorites characters={characters} onClose={onClose} />}
        />
        <Route path="about" element={<About />} />
        <Route path="detail/:detailId" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
