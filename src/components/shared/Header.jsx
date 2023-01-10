import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      {/* Header on medium/big devices */}
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
      {/* Header on small devices */}
      <div className='respmenu'>
        <input type='checkbox' />
        <i className='fas fa-bars'></i>
        <i className='fas fa-times'></i>
        <nav className='raspmenu__nav'>
          <ul className='raspmenu__list'>
            <li className='rasp__menu-item'>
              <Link style={{ color: "#f85555" }} to='/'>
                e-commerce
              </Link>
            </li>
            <li className='rasp__menu-item'>
              <Link to='/login'>Login</Link>
            </li>
            <li className='rasp__menu-item'>
              <Link to='/cart'>Cart</Link>
            </li>
            <li className='rasp__menu-item'>
              <Link to='/purchases'>Purchases</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
