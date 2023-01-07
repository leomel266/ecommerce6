import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <header className='header-container'>
      <nav className='navbar'>
        <div className='navbar__title' onClick={handleClick}>
          e-commerce
        </div>
        <ul className='navbar__list'>
          <li className='navbar__list-item fa-solid fa-user'>
            <Link to='/login'>Login</Link>
          </li>
          <li className='navbar__list-item fa-solid fa-box-archive'>
            <Link to='/cart'>Cart</Link>
          </li>
          <li className='navbar__list-item fa-solid fa-cart-shopping'>
            <Link to='/purchases'>Purchases</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
