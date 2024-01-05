import React from "react";
import "./TotalMovies.css";

//import { useStateValue } from "./StateProvider";

function TotalMovies() {
  return (
    <div className="totalMovies">
      <p>
        Total de peliculas rankeadas: <strong>{0}</strong>
      </p>
      <p>
        Eres el usuario #: <strong>{0}</strong>
      </p>
    </div>
  );
}

export default TotalMovies;
