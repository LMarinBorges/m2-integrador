import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <h1>404</h1>
      <p>El sitio que está buscando no existe.</p>
    </main>
  );
}
