import React from "react";
import "./ListMovie.css";
import { Container, Image } from "react-bootstrap";
import Movie from "./Movie";

export default function ListMovie() {
  const movies = Array.from({ length: 20 }, (_, index) => (
    <Movie key={index} />
  ));

  return (
    <Container className="listMovie">
      <div className="flex-container">{movies}</div>
    </Container>
  );
}
