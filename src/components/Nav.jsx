import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import { Link, Navigate, Outlet } from "react-router-dom";

export default function Nav({ access, onSearch, onRandom, onLogout }) {
  return access ? (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h1>Rick and Morty App</h1>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <button onClick={onLogout}>Cerrar Sesión</button>
        </nav>
        <SearchBar onSearch={onSearch} onRandom={onRandom} />
      </header>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
}
