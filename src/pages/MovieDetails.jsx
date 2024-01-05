import React from "react";
import "./MovieDetails.css";
import { useState, useEffect } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import { Image, FloatingLabel, Form, Button, Modal } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import { database } from "../firebase";
import { ref, set } from "firebase/database";

import { useStateValue } from "../StateProvider";

function MyVerticallyCenteredModal(props) {
  const [playing, setPlaying] = useState(false);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Visualizar trailer de pelicula
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <YouTube
          videoId={props.id}
          className="reproductor container"
          containerClassName={"youtube-container amru"}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 1,
              controls: 0,
              cc_load_policy: 0,
              fs: 0,
              iv_load_policy: 0,
              modestbranding: 0,
              rel: 0,
              showinfo: 0,
            },
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function MovieDetails() {
  let { state } = useLocation();
  const urlFirst = "https://image.tmdb.org/t/p/original";

  const [textareaValue, setTextareaValue] = useState("");
  const [rating, setRating] = useState(null);
  // const [ident, setIdent] = useState(null)
  // setIdent(state.movie.id);
  const ident = state.movie.id;
  const movie = state.movie;

  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false);

  if (state.movie.videos && state.movie.videos.results) {
    const trailer = state.movie.videos.results.find(
      (vid) => vid.name === "Official Trailer"
    );
    setTrailer(trailer ? trailer : state.movie.videos.results[0]);
  }
  //return data

  const [hover, setHover] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);

  const dateObject = new Date(state.movie.release_date);
  const day = dateObject.getDate();
  const month = dateObject.toLocaleString("default", { month: "long" }); // Obtiene el nombre del mes
  const year = dateObject.getFullYear();

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const [{ baket, user }, dispach] = useStateValue();

  const saveData = (data) => {
    set(ref(database, `usuarios/${user.uid}/misPeliculas`), data)
      .then(() => {
        console.log("Datos guardados exitosamente en Firebase RTDB");
      })
      .catch((error) => {
        console.error("Error al guardar datos:", error);
      });
  };
  const saveToDB = () => {
    const data = {
      comentarios: textareaValue,
      clasificacion: rating,
      identificador: ident,
    };

    const jsonData = JSON.stringify(data);
    saveData(jsonData);

    // Lógica adicional para guardar en la base de datos si es necesario
  };

  return (
    <>
      <main
        fluid
        className="d-flex justify-content-center align-items-center align-items-md-start m-5 gap-4 flex-column flex-md-row"
      >
        <Image
          src={urlFirst + state.movie.poster_path} //"https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
          className="ListImg p-2"
          thumbnail
        />
        <div className="d-flex flex-column confWidth">
          <h1 className="m-0">
            {state.movie.title}
            <span className="YearDetails">
              ( {day} de {month} de {year})
            </span>
          </h1>
          <div className="d-flex mt-1">
            <Link to="/" className="Genres">
              Adventure -
            </Link>
            <Link to="/" className="Genres">
              Action -
            </Link>
            <Link to="/" className="Genres">
              Science Fiction
            </Link>
          </div>
          {/* <Link 
                    to="/moviedetails"
                    className='moviedetails btnfos btnfos-5'
                >Detalles <KeyboardDoubleArrowRightIcon className='Next'/>
                </Link> */}
          <p className="m-0 ms-1 mt-3">{state.movie.overview}</p>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Comentarios"
            className="mt-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{
                height: "100px",
                maxWidth: "600px",
              }}
              value={textareaValue}
              onChange={handleTextareaChange}
              required
            />
          </FloatingLabel>
          <div className="d-flex align-items-start mt-3">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                    required
                  />
                  {/* <StarBorderIcon 
                                className='star' 
                                style={{ fontSize: '3rem'}}
                                onClick={() => setHover(currentRating)}
                                /> */}
                  {currentRating <= (hover || rating) ? (
                    <StarIcon
                      className="star"
                      style={{ fontSize: "3rem", color: "rgb(250 255 0)" }}
                      onClick={() => setHover(currentRating)}
                    />
                  ) : (
                    <StarBorderIcon
                      className="star"
                      style={{ fontSize: "3rem", color: "rgb(250 255 0)" }}
                      onClick={() => setHover(currentRating)}
                    />
                  )}
                </label>
              );
            })}
          </div>

          <div className="d-flex gap-3 mt-5">
            <Button
              className="confWidhtButton"
              variant="secondary"
              onClick={() => setModalShow(true)}
            >
              Ver Trailer <PlayCircleIcon />
            </Button>

            <Button
              className="confWidhtButton"
              variant="primary"
              onClick={saveToDB}
            >
              Guardar <VideoFileIcon />
            </Button>
          </div>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </main>
    </>
  );
}
