import React, { useState } from "react";
import "./Login.css";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault(); //no refresshing in react

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
    //some  fancy firebase login
  };

  const register = (e) => {
    e.preventDefault(); //no refresshing in react

    //do some  fancy firebase register

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="trapecio-login"></div>
      <div className="main-div-login">
        <Link to="/">
          <div className="login__logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/filmfluence-60906.appspot.com/o/Header%2Flogo_filmfluence_3-removebg-preview.png?alt=media&token=a569065d-6167-4659-b8f8-0fb73d1e537e"
              alt="Logo Filmfluence"
            />
          </div>
        </Link>

        <div className="login__container">
          <h1 className="subtitle__login">Bienvenido </h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Contraseña</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="login__signInButton"
              type="submit"
              onClick={signIn}
            >
              Ingrese
            </button>
          </form>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button className="login__registerButton " onClick={register}>
            Registrese
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
