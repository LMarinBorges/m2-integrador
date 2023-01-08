import { connect } from "react-redux";
import styles from "./Favorites.module.css";
import Card from "./Card";

function Favorites({ characters, favorites, onClose }) {
  const filteredCharacters = characters.filter((character) =>
    favorites.includes(character.id)
  );
  return filteredCharacters.length > 0 ? (
    <main className={styles.cardContainer}>
      {filteredCharacters.map((character) => {
        const props = (({ id, name, species, gender, image }) => ({
          id,
          name,
          species,
          gender,
          image,
        }))(character);
        return (
          <Card
            key={character.id}
            onClose={() => onClose(character.id)}
            {...props}
          />
        );
      })}
    </main>
  ) : (
    <div className={styles.emptyText}>
      <h1>No hay nada aquí...</h1>
      <p>
        Presiona el botón <u>♥</u> sobre un personaje para agregarlo a tus
        favoritos.
      </p>
    </div>
  );
}

const mapStateToProps = (state) => ({ favorites: state.myFavorites });
export default connect(mapStateToProps)(Favorites);
