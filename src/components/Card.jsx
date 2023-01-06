import styles from "./Card.module.css";

export default function Card({ onClose, name, species, gender, image }) {
  return (
    <div className={styles.cardRoot}>
      <div className={styles.card}>
        <button className={styles.cardClose} onClick={onClose}>
          X
        </button>
        <img className={styles.cardPortrait} src={image} alt="" />
        <div className={styles.cardDetails}>
          <h2>{name}</h2>
          <p>
            <b>Species: </b>
            {species}
          </p>
          <p>
            <b>Gender: </b>
            {gender}
          </p>
        </div>
      </div>
    </div>
  );
}
