import Answer from "./Answer";

function AnswerList({ showNextFilm, currentFilm, answers }) {
  return (
    <>
      {answers.map((answer, index) => {
        return (
          <Answer
            key={index}
            showNextFilm={showNextFilm}
            currentFilm={currentFilm}
            answer={answer}
          />
        );
      })}
    </>
  );
}

export default AnswerList;
