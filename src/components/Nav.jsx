import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";

export default function Nav({ onSearch, onRandom }) {
  return (
    <nav className={styles.navbar}>
      <h1>Rick and Morty App</h1>
      <SearchBar onSearch={onSearch} onRandom={onRandom} />
    </nav>
  );
}
