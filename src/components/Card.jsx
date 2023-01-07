import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ onClose, id, name, species, gender, image }) {
  return (
    <article className={styles.cardRoot}>
      <div className={styles.card}>
        <button className={styles.cardClose} onClick={onClose}>
          X
        </button>
        <img className={styles.cardPortrait} src={image} alt="" />
        <div className={styles.cardDetails}>
          <h2>
            <Link to={`/detail/${id}`}>{name}</Link>
          </h2>
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
    </article>
  );
}
