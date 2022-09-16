import Picture from "./Picture";
import AnswerList from "./AnswerList";
import { useEffect, useState } from "react";

function Game({ filmDB }) {
  const totalAnswers = filmDB.map((element) => element.title);
  const [currentFilm, setCurrentFilm] = useState([]);
  const [stackFilm, setFilmDB] = useState(filmDB);
  const [counterFilm, setCounterFilm] = useState(0);

  const [answers, setAnswers] = useState([]);

  useEffect(() => showNextFilm(), []);

  let counter;

  //createArrAnswers();
  // function createArrAnswers() {
  //   const arr = [];
  //   filmDB.forEach((element) => arr.push(element.title));
  //   setTotalAnswers(arr);
  // }

  //Random integer from min to max (not include max)
  function getRandomInt(min = 0, max = stackFilm.length) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function showNextFilm() {
    let ans = [];

    //const i = getRandomInt(0, 4);
    counter = getRandomInt();
    setCurrentFilm(stackFilm[counter]);
    setFilmDB(stackFilm.filter((film) => film !== stackFilm[counter]));
    ans.push(stackFilm[counter].title);
    for (let i = 0; i < 3; i++) {
      const randomFilm = totalAnswers[getRandomInt()];
      if (ans.includes(randomFilm)) {
        i--;
      } else {
        ans.push(randomFilm);
      }
    }
    setAnswers(ans);
    setCounterFilm(counterFilm + 1);
  }
  console.log(currentFilm);
  console.log(totalAnswers);

  return (
    <>
      <h1>{`Вопрос ${counterFilm}/${filmDB.length}`}</h1>
      <Picture currentFilm={currentFilm} />
      <AnswerList
        currentFilm={currentFilm}
        showNextFilm={showNextFilm}
        answers={answers}
      />
    </>
  );
}
export default Game;

//   const wrapper = document.querySelector('#wrapper');
//   const image = document.querySelector('.img');
//   const start = document.querySelector('#start');
//   const button = document.querySelectorAll('[data = "btn"]');
//   const card = document.querySelector('.card');
//   let filmDB;
//   let counter = 0;
//   const shownFilm = [];
//   const totalAnswers = [];
//   let correctAnswers = 0;

//
//       } catch (error) {
//           console.log(error);
//       }
//   }

//   // create array of totalAnswers;
//   function createArrAnswers () {
//       filmDB.forEach(element => {
//           totalAnswers.push(element.title);

//       });
//   }
// //let's go play
//   start.addEventListener('click', () => {
//       fetchHandler();
//       start.classList.add('hide');

//   }
// );

//   wrapper.addEventListener('click', (event) => {
//       if (event.target.classList.contains('correct')) {
//           choiceCorrectAnswers (showNextFilm) ;

//       }
//       if (event.target && event.target.tagName == 'BUTTON' ) {
//           showNextFilm ();
//       }
//   });

//   function choiceCorrectAnswers (callback) {
//       correctAnswers++;
//       console.log(correctAnswers);
//       callback();

//   }

//   //show next film
//   function showNextFilm () {
//       let ans = [];
//       const i = getRandomInt (0,4);
//       counter = getRandomInt ();
//       let currentFilm = filmDB[counter];

//       while (shownFilm.some(item=>item == counter)) {
//           counter = getRandomInt (0,filmDB.length);
//           currentFilm = filmDB[counter];
//       }
//       shownFilm.push(counter);
//       try {
//           image.src = filmDB[counter].img;
//           ans.push(currentFilm.title);
//           for (let j = 0; j < 3; j++) {
//               const randomFilm = totalAnswers[getRandomInt ()];

//               if (ans.includes(randomFilm) ) {
//                   j--;
//               } else {
//                   ans.push(randomFilm);
//               }

//           }

//           button.forEach(function(item) {
//               item.classList.remove('correct');
//               const i = getRandomInt (0,ans.length);
//               item.innerText = ans[i];
//               if (item.innerText === currentFilm.title) {
//                   item.classList.add('correct');
//               }
//               ans = ans.filter(value=>value !== ans[i]);

//           });
//       if (shownFilm.length == 5) {
//           console.log('You are awesome!');
//           console.log(shownFilm);
//       }

//       }catch (error) {
//           console.log(filmDB[counter], error);
//       }

//   }

//   //Random iteger from min to max (not include max)
//   function getRandomInt(min=0, max=filmDB.length) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min)) + min;
//
