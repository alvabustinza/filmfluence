import React from 'react'
import SelectedMovie from "./components/body/SelectedMovie";
import ListMovie from "./components/body/ListMovie";
import "./body.css";


export default function Home() {
    return(
        <>
        <div className="App">Home</div>
        
        <main className="selectMovie">
            <SelectedMovie />
        </main>
        <section className='listCard'>
            <ListMovie />
        </section>
        </>
    );
}
