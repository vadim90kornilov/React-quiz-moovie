import { useEffect, useState } from "react";

function Game({ currentFilm, showNextFilm, step, length }) {
  //const [stackFilm, setFilmDB] = useState(filmDB);
  const [counterFilm, setCounterFilm] = useState(0);

  const [answers, setAnswers] = useState([]);
  const progress = Math.round((step / length) * 100);

  console.log(progress);

  // useEffect(() => showNextFilm(), []);

  // let counter;

  //Random integer from min to max (not include max)
  // function getRandomInt(min = 0, max = stackFilm.length) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }

  // function showNextFilm() {
  //   let ans = [];

  //   //const i = getRandomInt(0, 4);
  //   counter = getRandomInt();
  //   setCurrentFilm(stackFilm[counter]);
  //   setFilmDB(stackFilm.filter((film) => film !== stackFilm[counter]));
  //   ans.push(stackFilm[counter].title);
  //   // for (let i = 0; i < 3; i++) {
  //   //   const randomFilm = totalAnswers[getRandomInt()];
  //   //   if (ans.includes(randomFilm)) {
  //   //     i--;
  //   //   } else {
  //   //     ans.push(randomFilm);
  //   //   }
  //   // }
  //   setAnswers(ans);
  //   setCounterFilm(counterFilm + 1);
  // }
  // console.log(currentFilm);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${progress}%` }}
          className="progress__inner"
        ></div>
      </div>
      <img src={currentFilm.img} />
      <ul>
        {currentFilm.variants.map((text, index) => (
          <li onClick={() => showNextFilm(index)} key={index}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
