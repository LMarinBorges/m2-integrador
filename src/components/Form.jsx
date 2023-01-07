import { useState } from "react";
import { validate } from "./validate";
import styles from "./Form.module.css";
import { Navigate } from "react-router-dom";

export default function Form({ access, onLogin }) {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({
    username: undefined,
    password: undefined,
  });
  const onChange = (event) => {
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    /* setErrors((prev) => ({
      ...prev,
      [event.target.name]:
        typeof validators[event.target.name] === "function"
          ? validators[event.target.name](event.target.value)
          : undefined,
    })); */
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const result = validate(userData);
    if (
      Object.values(result).filter((value) => typeof value !== "undefined")
        .length > 0
    ) {
      setErrors(result);
    } else {
      typeof onLogin === "function"
        ? onLogin(userData)
        : window.alert(JSON.stringify(userData));
    }
  };

  return access ? (
    <Navigate to="/home" />
  ) : (
    <main className={styles.container}>
      <details className={styles.machete}>
        <summary>Datos Login</summary>
        <p>
          <b>Username: </b>liam.marin03926@protonmail.com
        </p>
        <p>
          <b>Password: </b>MessiD1os
        </p>
      </details>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            value={userData.username}
            onChange={onChange}
            id="username"
            type="text"
            name="username"
          />
          <p className={styles.error}>{errors.username}</p>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            value={userData.password}
            onChange={onChange}
            id="password"
            type="password"
            name="password"
          />
          <p className={styles.error}>{errors.password}</p>
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </main>
  );
}
