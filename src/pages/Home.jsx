import React from "react";
import SelectedMovie from "../components/body/SelectedMovie";
import ListMovie from "../components/body/ListMovie";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <SelectedMovie />

      <ListMovie />
    </div>
  );
}
