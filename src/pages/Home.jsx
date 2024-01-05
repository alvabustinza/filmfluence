import React, { useEffect, useState } from "react";
import SelectedMovie from "../components/body/SelectedMovie";
import ListMovie from "../components/body/ListMovie";
import "./Home.css";
import { getMovie } from "../TmdbMovies";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState([]);

  useEffect(() => {
    getMovie()
      .then((results) => {
        setMovieList(results);
        setSelectedMovieId(results[0]);
      })
      .catch((error) => {
        console.error("Error obteniendo películas:", error);
      });
  }, []);

  const handleSelectMovie = (movie) => {
    setSelectedMovieId(movie);
  };

  return (
    <div className="home">
      <SelectedMovie 
        selectedMovieId={selectedMovieId} 
      />

      <ListMovie 
        movieList={movieList}
        onSelectMovie={handleSelectMovie}
      />
    </div>
  );
}
