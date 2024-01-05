import React from 'react'
import SelectedMovie from "../components/body/SelectedMovie";
import ListMovie from "../components/body/ListMovie";
import "./Home.css";


export default function Home() {
    return(
        <>
        <main className="selectMovie">
            <SelectedMovie />
        </main>
        <section className='listCard'>
            <ListMovie />
        </section>
        </>
    );
}
