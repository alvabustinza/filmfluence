import React from "react";
import "./RatedMovies.css";

function RatedMovies({ id, image, title, rating, description, comments }) {
  return (
    <div className="ratedMovies">
      <img className="ratedMovies__image" src={image} />

      <div className="ratedMovies__info">
        <p className="ratedMovies__title">{title}</p>
        <p className="ratedMovies__description">{description}</p>
        <p className="ratedMovies__comments">{comments}</p>

        <div className="ratedMovies__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RatedMovies;
