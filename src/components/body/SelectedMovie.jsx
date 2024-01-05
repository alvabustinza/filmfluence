import React from "react";
import "./SelectedMovie.css";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function SelectedMovie() {
  return (
    <div className="selectedMovie">
      <div
        className="selectedMovie__details"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg')`,
        }}
      >
        <Link to="/moviedetails" className="moviedetails btnfos btnfos-5">
          <h2>Detalles</h2>
          <KeyboardDoubleArrowRightIcon className="Next" />
        </Link>

        <div className="contenido">
          <h1>Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo </h1>
        </div>
      </div>
    </div>
  );
}
