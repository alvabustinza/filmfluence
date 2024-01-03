import React from 'react'

export default function SelectedMovie() {
  return (
    // <div>SelectedMovie</div>
    // <img className='imgMovieSelected' src='https://m.media-amazon.com/images/S/pv-target-images/2d0c9e38968936e6711c7fb2bc7895b82d8bb9178b5a854e14dffa4b17b88487.jpg' />
    <div
        className='viewDetail'
        style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg')`,
        }}
    >
        
        <button
            className="boton"
            // onClick={() => setPlaying(true)}
            type="button"
        >
            Ver Trailer
        </button>

        <div className="contenido">
            <h1>Titulo</h1>
            <p>Descripción</p>
        </div>
    </div>
    
  )
}
