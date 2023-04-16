import React from 'react';
import './NavBar.css';
import Navigation from '../Navigation/Navigation.jsx';
import ButtonMenu from '../ButtonMenu/ButtonMenu';
import { appMenuList, loginMenuList } from '../../data/navItems';

function NavBar() {
  return (
    <>
      <h1 className='main__title'>Quiz Time</h1>
      <div className='nav'>
        <Navigation type='app'>
          {appMenuList.map((item, i) => (
            <ButtonMenu
              key={i}
              text={item.text}
              style={{ backgroundImage: `url(${item.url})` }}
            />
          ))}
        </Navigation>
        <Navigation type='login'>
          {loginMenuList.map((item, i) => (
            
            <ButtonMenu
              key={i}
              text={item.text}
              style={{ backgroundImage: `url(${item.url})` }}
            />
          ))}
        </Navigation>
      </div>
    </>
  );
}

export default NavBar;
