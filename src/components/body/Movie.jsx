import React from "react";
import "./Movie.css";

import MissedVideoCallSharpIcon from "@mui/icons-material/MissedVideoCallSharp";

function Movie() {
  return (
    <div className="movie">
      <img
        className="movie__posterPath"
        src="https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
        thumbnail
      />
      <div className="movie__selector">
        <MissedVideoCallSharpIcon className="movie__selectorIcon" />
      </div>

      <h3>Titulo </h3>
      <p>year</p>
    </div>
  );
}

export default Movie;
