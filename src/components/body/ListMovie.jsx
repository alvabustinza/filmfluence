import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


export default function ListMovie() {
  return (
    <>
    {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
    <div className='d-flex flex-column gap-1'>
        <Image 
            src="https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" 
            className='ListImg'
            thumbnail />
        <h3>Titulo</h3>
        <p >year</p>
    </div>



    
    </>  
  )
}
