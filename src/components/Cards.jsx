import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.cardContainer}>
      {characters.map((character) => {
        const props = (({ name, species, gender, image }) => ({
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
    </div>
  );
}
