import React, { useEffect } from "react";

import "./App.css";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Ranking from "./components/Ranking";

import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              {" "}
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/moviedetails"
          element={
            <>
              {" "}
              <Header />
              <MovieDetails />
            </>
          }
        />
        <Route
          path="/mymovies"
          element={
            <>
              {" "}
              <Header />
              <Ranking />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
