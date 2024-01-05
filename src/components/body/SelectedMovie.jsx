import React from "react";
import "./SelectedMovie.css";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function SelectedMovie({ selectedMovieId }) {
  const urlFirst = "https://image.tmdb.org/t/p/original"
  return (
    <div className="selectedMovie">
      <div
        className="selectedMovie__details"
        style={{
          // backgroundImage: `url('https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg')`,
          backgroundImage: `url(${urlFirst + selectedMovieId.backdrop_path})`,
        }}
      >
        <Link to="/moviedetails" className="moviedetails" state={{ movie: selectedMovieId }} >
          <h2>Detalles</h2>
          <KeyboardDoubleArrowRightIcon className="Next" />
        </Link>

        <div className="contenido">
          <h1>{selectedMovieId.title} </h1>
        </div>
      </div>
    </div>
  );
}