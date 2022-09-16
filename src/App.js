import "./App.css";
import Game from "./components/Game";
import Picture from "./components/Picture";
import Start from "./components/Start";
import AnswerList from "./components/AnswerList";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const API_URL = "/db.json";
  const [filmDB, setFilmDb] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [loadedDB, setLoadedDB] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch(API_URL);

      const filmDB = await res.json();
      setFilmDb(filmDB.films);
    } catch (error) {
      setError(error);
    } finally {
      setLoadedDB(true);
      setIsLoading(false);
    }
  };

  if (error) {
    return <h1>Ошибка: {error.message}</h1>;
  }

  return (
    <div className="App">
      {!!loadedDB || <Start onClick={() => fetchData()} />}
      {!!loadedDB && <Game filmDB={filmDB} />}
    </div>
  );
}

export default App;
