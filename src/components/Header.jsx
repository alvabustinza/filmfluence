import React from "react";
import "./Header.css";

// ICONS
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MovieIcon from '@mui/icons-material/Movie';

import { Link } from "react-router-dom";



function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://firebasestorage.googleapis.com/v0/b/filmfluence-60906.appspot.com/o/Header%2Flogo_filmfluence_3-removebg-preview.png?alt=media&token=a569065d-6167-4659-b8f8-0fb73d1e537e"
          alt="logo filmfluence"
        />
      </Link>


      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/mymovies">
          <div className="header__optionMovies">
            <MovieIcon/>
            <span className="header__optionLineTwo">Mis Peliculas</span>
          </div>
        </Link>

        <Link to="/login">
          <div className="header__optionGuest">
            <AccountCircleIcon className="header__accountCircleIcon"/>
            <span className="header__optionLineTwo">Hola Guest</span>
          </div>
        </Link>


      </div>
    </div>
  );
}

export default Header;