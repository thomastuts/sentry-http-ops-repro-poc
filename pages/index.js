import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    (async () => {
      console.log(
        await Promise.all([
          axios.get("https://swapi.dev/api/people/1"),
          axios.get("/api/long-hello"),
          axios.get("/api/hello"),
        ])
      );
    })();
  }, []);

  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={() => {
          throw new Error("Sentry Frontend Error");
        }}
      >
        Throw frontend error
      </button>
    </div>
  );
}
