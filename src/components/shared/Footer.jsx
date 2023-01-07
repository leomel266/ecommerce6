import React from "react";
import "./styles/footer.css";

const Footer = () => {
  return (
    <div className='footer-container'>
      <h3 className='footer__title'>Copyright © Academlo 2022 </h3>
      <p className='footer__p'>Leonardo Melchiori</p>
      <ul className='footer__socials'>
        <li className='footer__item'>
          <a
            className='footer__a'
            target='_blank'
            rel='noopener noreferer'
            href='https://github.com/leomel266'>
            <i className='fa-brands fa-github'></i>
          </a>
        </li>
        <li className='footer__item'>
          <a
            className='footer__a'
            target='_blank'
            rel='noopener noreferer'
            href='https://www.linkedin.com/in/leonardo-melchiori-013678225/'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
