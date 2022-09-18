import "./index.scss";
import Game from "./components/Game";
//import Start from "./components/Start";
import { useState } from "react";
import { useEffect } from "react";
import Result from "./components/Result";

function App() {
  const API_URL = "/db.json";
  const [filmDB, setFilmDb] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  //const [loadedDB, setLoadedDB] = useState(false);
  const [correct, setCorrect] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);

        const filmDB = await res.json();
        setFilmDb(filmDB.films);
      } catch (error) {
        setError(error);
      } finally {
        //setLoadedDB(true);
        setIsLoading(false);
      }
    };

    // if (error) {
    //   return <h1>Ошибка: {error.message}</h1>;
    // }
    fetchData();
  }, []);

  console.log("rendered");
  const [step, setStep] = useState(0);
  const currentFilm = filmDB[step];

  console.log(correct);

  const showNextFilm = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if (index === currentFilm.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="App">
          {step !== filmDB.length ? (
            <Game
              currentFilm={currentFilm}
              showNextFilm={showNextFilm}
              step={step}
              length={filmDB.length}
            />
          ) : (
            <Result correct={correct} length={filmDB.length} />
          )}
        </div>
      )}
    </>
  );
}

export default App;
