import React, { useEffect, useState } from "react";
import "./ListMovie.css";
import { Container } from "react-bootstrap";
import Movie from "./Movie";

import { getMovie } from "../../TmdbMovies";

function ListMovie() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovie()
      .then((results) => {
        setMovieList(results);
      })
      .catch((error) => {
        console.error("Error obteniendo películas:", error);
      });
  }, []);

  const movies = movieList.map((movie, index) => (
    <Movie
      img={movie.poster_path}
      title={movie.title}
      year={movie.release_date}
      key={index}
    />
  ));

  return (
    <Container className="listMovie">
      <div className="flex-container">{movies}</div>
    </Container>
  );
}

export default ListMovie;
