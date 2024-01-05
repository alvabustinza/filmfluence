import React from "react";
import "./Movie.css";

import MissedVideoCallSharpIcon from "@mui/icons-material/MissedVideoCallSharp";

function Movie({ img, title, year }) {
  return (
    <div className="movie">
      <img
        className="movie__posterPath"
        src={"https://image.tmdb.org/t/p/w500" + img}
        alt="img de referencia de la pelicula"
        thumbnail
      />
      <div className="movie__selector">
        <MissedVideoCallSharpIcon className="movie__selectorIcon" />
      </div>

      <h3>{title} </h3>
      <p>{year.substring(0, 4)}</p>
    </div>
  );
}

export default Movie;
