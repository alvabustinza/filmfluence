import React from "react";
import "./MovieDetails.css";
import { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { Image, FloatingLabel, Form, Button, Modal } from "react-bootstrap";
import YouTube from "react-youtube";

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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <YouTube
          videoId={22}
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
        <button onClick={() => setPlaying(false)} className="boton">
          Close
        </button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function MovieDetails() {
  const [textareaValue, setTextareaValue] = useState("");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <>
      <main
        fluid
        className="d-flex justify-content-center align-items-start m-5 gap-4"
      >
        <Image
          src="https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
          className="ListImg p-2"
          thumbnail
        />
        <div className="d-flex flex-column w-50">
          <h1 className="m-0">
            Titulo Pelicula <span className="YearDetails">(Año)</span>
          </h1>
          <p className="m-0 ms-1 mt-3">
            Descripcion de la peliculaDescripcion de la peliculaDescripcion de
            la peliculaDescripcion de la peliculaDescripcion de la
            peliculaDescripcion de la peliculaDescripcion de la pelicula
          </p>
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
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch vertically centered modal
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </main>
    </>
  );
}
