import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import store from "../redux/store";
import styles from "./Card.module.css";

function Card({
  onClose,
  id,
  name,
  species,
  gender,
  image,
  isFavorite,
  addFavorite,
  removeFavorite,
}) {
  const onFavorite = () => (isFavorite ? removeFavorite(id) : addFavorite(id));
  return (
    <article className={styles.cardRoot}>
      <div className={styles.card}>
        <div className={styles.cardActions}>
          <button
            className={`${styles.cardFavorite}${
              isFavorite ? ` ${styles.isFavorite}` : ""
            }`}
            onClick={onFavorite}
          >
            ♥
          </button>
          <button className={styles.cardClose} onClick={onClose}>
            X
          </button>
        </div>
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

const mapStateToProps = (state, ownProps) => ({
  isFavorite:
    typeof state.myFavorites.find((value) => value === ownProps.id) !==
    "undefined",
});

const mapDispatchToProps = bindActionCreators(actions, store.dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Card);
