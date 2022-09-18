import image from "./result.jpg";
function Result({ correct, length }) {
  return (
    <div className="result">
      <img src={image} />
      <h2>{`Вы отгадали ${correct} фильмов из ${length}`}</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

export default Result;
