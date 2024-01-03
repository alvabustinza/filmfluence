import React from "react";

import "./App.css";
import Header from "./components/Header";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home  from "./pages/Home";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path="/" element={
              <>
                {" "}
                <Header />
                <Home />
              </>
            }/>
            <Route path="/moviedetails" element={
              <>
                {" "}
                <Header />
                moviedetails
              </> 
            }/>
            <Route path="/mymovies" element={
              <>
                {" "}
                <Header />
                mymovies
              </>
            }/>
        </Routes>
      </BrowserRouter>
  )
  
}

export default App;
