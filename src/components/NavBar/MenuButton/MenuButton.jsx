import React from 'react';
import './MenuButton.css';

const MenuButton = ({ url, text }) => {
  return (
    <li
      className='nav__button'
     
      style={{ listStyleImage: `url('../Navigation/images/dashboard.svg')` }}
    >
      <button className='item__button button'>{text}</button>
    </li>
  );
};

export default MenuButton;

// list-style-image: url('../Navigation/images/dashboard.svg');