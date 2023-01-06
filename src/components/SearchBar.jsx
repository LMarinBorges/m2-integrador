import { createRef } from "react";

import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch, onRandom }) {
  const ref = createRef();
  return (
    <div className={styles.searchContainer}>
      <input
        ref={ref}
        className={styles.searchBox}
        type="search"
        placeholder="Su búsqueda..."
      />
      <button
        className={styles.searchButton}
        onClick={() => onSearch(ref.current.value)}
      >
        Agregar
      </button>
      <button className={styles.searchButton} onClick={onRandom}>
        Random
      </button>
    </div>
  );
}
