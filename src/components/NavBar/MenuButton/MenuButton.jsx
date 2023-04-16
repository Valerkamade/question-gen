import React from 'react';
import './MenuButton.css';

const MenuButton = ({url, text}) => {
  return (
    <li className='nav__button' >
      <button className='item__button button'>{text}</button>
    </li>
  );
};

export default MenuButton;
