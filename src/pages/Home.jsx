import React from 'react'
import SelectedMovie from "./components/body/SelectedMovie";
import ListMovie from "./components/body/ListMovie";

export default function Home() {
    return(
        <>
        <div className="App">FilFluence</div>
        
        <main className="container m-auto flex gap-12 py-5">
            <SelectedMovie />
        </main>
        <section>
            <ListMovie />
        </section>
        </>
    );
}
