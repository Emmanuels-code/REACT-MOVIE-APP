import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
// --------->

function App() {
  // const [apiKey, setApiKey] = useState(" f2f9c56a");
  const [apiKey, setApiKey] = useState("f2f9c56a");
  const [movie, setMovie] = useState(null);
  //  > Keep Track of searched Movie

  // const apiKey = "f2f9c56a";
  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // 1. Fetch the Data
    const data = await response.json();
    // 2. Convert the data to json
    console.log(data);
    // 3. Save the retrieved data to state
    setMovie(data);
  };
  //  > Function to request movies and save them to state

  useEffect(()=>{
    getMovie("ARMAGEDDON")
  },[])

  // getMovie("Superbad")

  return (
    <>
      <Form  MovieSearch={getMovie}/>

      <MovieDisplay  movie={movie}/>
    </>
  );
}

export default App;