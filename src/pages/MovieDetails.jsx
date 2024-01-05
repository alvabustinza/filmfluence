import React from 'react'
import "./MovieDetails.css";
import { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import { Image, FloatingLabel, Form, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube';

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
    const [textareaValue, setTextareaValue] = useState('');
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [modalShow, setModalShow] = React.useState(false);

  const dateObject  = new Date('1977-05-25');
  const day = dateObject.getDate();
  const month = dateObject.toLocaleString('default', { month: 'long' }); // Obtiene el nombre del mes
  const year = dateObject.getFullYear();

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <>
        <main fluid className="d-flex justify-content-center align-items-center align-items-md-start m-5 gap-4 flex-column flex-md-row">
            <Image 
                src="https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" 
                className='ListImg p-2'
                thumbnail 
            />
            <div className='d-flex flex-column confWidth'>
                <h1 className='m-0'>Star Wars Collection <span className='YearDetails'>({day} de {month} de {year})</span></h1> 
                <div className='d-flex mt-1'>
                    <Link to="/" className='Genres'>Adventure </Link>
                    <Link to="/" className='Genres'>Action </Link>
                    <Link to="/" className='Genres'>Science Fiction </Link>
                </div>
                {/* <Link 
                    to="/moviedetails"
                    className='moviedetails btnfos btnfos-5'
                >Detalles <KeyboardDoubleArrowRightIcon className='Next'/>
                </Link> */}
                <p className='m-0 ms-1 mt-3'>Descripcion de la peliculaDescripcion de la peliculaDescripcion de la peliculaDescripcion de la peliculaDescripcion de la peliculaDescripcion de la peliculaDescripcion de la pelicula</p>
                <FloatingLabel controlId="floatingTextarea2" label="Comentarios" className='mt-3'>
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{
                        height: '100px',
                        maxWidth: '600px'
                    }}
                    value={textareaValue}
                    onChange={handleTextareaChange}
                />
                </FloatingLabel>
                <div className='d-flex align-items-start mt-3'>
                    {[...Array(5)].map((star, index) =>{
                        const currentRating = index + 1;
                        return(
                        <label key={index}>
                            <input
                                type='radio'
                                name='rating'
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
                                    className='star'
                                    style={{ fontSize: '3rem', color: 'rgb(250 255 0)' }}
                                    onClick={() => setHover(currentRating)}
                                />
                                ) : (
                                <StarBorderIcon
                                    className='star'
                                    style={{ fontSize: '3rem', color: 'rgb(250 255 0)' }}
                                    onClick={() => setHover(currentRating)}
                                />
                            )}
                        </label>
                        );
                    })}
                </div>

                <div className='d-flex gap-3 mt-5'>
                    <Button className='confWidhtButton' variant="secondary" onClick={() => setModalShow(true)}>
                        Ver Trailer <PlayCircleIcon/>
                    </Button>

                    <Button className='confWidhtButton' variant="primary" onClick={() => setModalShow(true)}>
                        Guardar <VideoFileIcon/>
                    </Button>

                </div>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            
        </main>
    </>
  )
}
