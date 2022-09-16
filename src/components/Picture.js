import styles from "./picture.module.css";
function Picture({ currentFilm }) {
  return <img className={styles.image} src={currentFilm.img} alt="img" />;
}
export default Picture;
