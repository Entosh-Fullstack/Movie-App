import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./search.svg";
import MovieCard from "./MovieCard";
const API_URL = "http://www.omdbapi.com?apikey=b2108a2e";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="App">
      <h1>Movie App</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
        src={Search} 
        alt="search" 
        onClick={() => searchMovies(searchTerm)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, i) => (
            <div key={i}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">no movies found</div>
      )}
    </div>
  );
};

export default App;
