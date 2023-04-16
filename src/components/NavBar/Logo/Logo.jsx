import React from 'react';
import './Logo.css';
// import logo from './images/logo.svg'

const Logo = ({ url, text }) => {
  return (
    <button className='button'>
      <img className='' src={url} alt={text} />
    </button>
  );
};

export default Logo;
