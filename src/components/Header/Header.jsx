import React from 'react';
import './Header.css';
import userAvatar from './images/avatar.png';

const Header = () => {
  return (
    <header className='header'>
      <label className='header__label'>
        <input placeholder='Поиск...' className='header__input'></input>
      </label>
      <button className='header__button'>Start</button>
      <div className='header__profile-info-wrapper'>
        <img className='header__profile-avatar' src={userAvatar} alt='' />
        <p className='header__profile-name'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
          culpa!
        </p>
      </div>
    </header>
  );
};

export default Header;
