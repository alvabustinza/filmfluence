import React from "react";
import "./Movie.css";
import MissedVideoCallSharpIcon from "@mui/icons-material/MissedVideoCallSharp";
import Card from 'react-bootstrap/Card';

function Movie({ movie, onSelectMovie }) {

  const handleSelectMovie = () => {
    onSelectMovie(movie);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <Card style={{ width: '15rem' }} className="movie__Card " onClick={handleSelectMovie}>
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        {movie.release_date.substring(0, 4)}
        </Card.Text>
      </Card.Body>
      <div className="Tapar">
        <MissedVideoCallSharpIcon className="movie__selectorIcon" />
      </div>
    </Card>
  );
}

export default Movie;
