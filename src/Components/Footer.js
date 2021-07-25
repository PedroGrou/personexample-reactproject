import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { FaCoffee } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <p className="footer-text">
        @2021 Made With <BsFillHeartFill className="icon-he" /> and <FaCoffee className="icon-cf" /> by Pedro Gonçalves
      </p>
    </footer>
  );
}

export default Footer;
