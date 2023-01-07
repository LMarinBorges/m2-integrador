import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return characters.length > 0 ? (
    <main className={styles.cardContainer}>
      {characters.map((character) => {
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
        Utiliza la barra de búsqueda para agregar un personaje específico, o
        utiliza el botón "Random" para agregar un personaje aleatorio.
      </p>
    </div>
  );
}
