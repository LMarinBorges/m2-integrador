import styles from "./About.module.css";
import Card from "./Card";

export default function About() {
  return (
    <main className={styles.mainContent}>
      <div>
        <h1>Sitio por...</h1>
        <Card
          name="Liam Marin"
          species="Human (?)"
          gender="Male"
          image="https://s.gravatar.com/avatar/a7226fc6c6e8b243ce80c2f738672240"
        />
      </div>
    </main>
  );
}
