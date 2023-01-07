import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import styles from "./Detail.module.css";

const statusText = {
  Alive: "😀 Alive",
  Dead: "💀 Dead",
  unknown: "❓ Unknown",
};

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personaje con ese ID.");
        }
      })
      .catch(() => window.alert("No hay personaje con ese ID."));
  }, [detailId]);

  return (
    <main className={styles.detailContent}>
      {character === null ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Link className={styles.detailReturn} to="/home">
            &lt; Go Back
          </Link>
          <img
            className={styles.detailPortrait}
            src={character.image}
            alt={character.name}
          />
          <div className={styles.detailText}>
            <h2>{character.name}</h2>
            <p>
              <b>Status: </b>
              {statusText[character.status]}
            </p>
            <p>
              <b>Species: </b>
              {character.species}
            </p>
            <p>
              <b>Gender: </b>
              {character.gender}
            </p>
            <p>
              <b>Origin: </b>
              {character.origin.name}
            </p>
          </div>
        </>
      )}
    </main>
  );
}
