import React from "react";
import "./Ranking.css";
import RatedMovies from "./RatedMovies";
import TotalMovies from "./TotalMovies";

function Ranking() {
  return (
    <div className="ranking">
      <div className="ranking__left">
        <div>
          <h2 className="ranking__title">
            {" "}
            Hello Guest/User, tus películas calificadas
          </h2>
          <RatedMovies
            id="0123456789"
            title="MovbieTest"
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
            description="description description description description description description description description description description"
            comments="comments comments comments comments comments comments comments comments comments comments comments"
          />
          <RatedMovies
            id="0123456789"
            title="MovbieTest"
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
            description="description description description description description description description description description description"
            comments="comments comments comments comments comments comments comments comments comments comments comments"
          />
          <RatedMovies
            id="0123456789"
            title="MovbieTest"
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
            description="description description description description description description description description description description"
            comments="comments comments comments comments comments comments comments comments comments comments comments"
          />
        </div>
      </div>

      <div className="ranking__right">
        <TotalMovies />
      </div>
    </div>
  );
}

export default Ranking;
