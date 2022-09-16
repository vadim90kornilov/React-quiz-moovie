import Button from "../UI/Button";

function Answer({ showNextFilm, currentFilm, answer }) {
  return (
    <Button
      showNextFilm={showNextFilm}
      currentFilm={currentFilm}
      answer={answer}
    />
  );
}
export default Answer;
