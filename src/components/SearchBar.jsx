import { useState } from "react";

import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch, onRandom }) {
  const [value, setValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={onSubmit}>
        <input
          className={styles.searchBox}
          type="search"
          placeholder="Su búsqueda..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          Agregar
        </button>
      </form>
      <button className={styles.searchButton} onClick={onRandom}>
        Random
      </button>
    </div>
  );
}
