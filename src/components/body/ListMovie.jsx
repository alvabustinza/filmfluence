import React, { useState } from "react";
import "./ListMovie.css";
import { Container } from "react-bootstrap";
import Movie from "./Movie";


function ListMovie( { movieList, onSelectMovie } ) {
  const movies = movieList.map((movie) => (
    <Movie
      movie={movie}
      key={movie.id}
      onSelectMovie={onSelectMovie}
      // img={movie.poster_path}
      // title={movie.title}
      // year={movie.release_date}
      // id={movie.id}
      // key={movie.id}
      // onSelectMovie={onSelectMovie}
    />
  ));

  return (
    <Container className="listMovie mb-5">
      <div className="flex-container">{movies}</div>
    </Container>
  );
}

export default ListMovie;
