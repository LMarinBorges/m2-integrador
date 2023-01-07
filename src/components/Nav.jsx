import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import { Link, Outlet } from "react-router-dom";

export default function Nav({ onSearch, onRandom }) {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h1>Rick and Morty App</h1>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <SearchBar onSearch={onSearch} onRandom={onRandom} />
      </header>
      <Outlet />
    </>
  );
}
