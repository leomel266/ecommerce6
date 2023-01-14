import React from "react";
import { Link } from "react-router-dom";
import "./styles/noUserCart.css";

const NoUserCart = () => {
  return (
    <footer className='footer__noUser'>
      <h3 className='noUser__title'>You Need To Login To Use This Function</h3>
      <p className='noUser__p'>
        Go To <Link to='/login'>Login</Link>!😀
      </p>
    </footer>
  );
};

export default NoUserCart;
