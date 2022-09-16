import { useEffect } from "react";
import styles from "./button.module.css";

function Button({ showNextFilm, currentFilm, answer }) {
  let right = false;

  if (answer == currentFilm.title) {
    right = true;
  }
  return right ? (
    <button className={styles.button} onClick={() => showNextFilm()}>
      {answer}
    </button>
  ) : (
    <button
      className={styles.button}
      onClick={() => {
        alert(currentFilm.descr);
        showNextFilm();
      }}
    >
      {answer}
    </button>
  );
}

export default Button;
