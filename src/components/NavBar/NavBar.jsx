import React from 'react';
import './NavBar.css';
import Navigation from './Navigation/Navigation';
import MenuButton from './MenuButton/MenuButton';
import Logo from './Logo/Logo';
import { appMenuList, loginMenuList, logoData } from '../../data/navItems';

function NavBar() {
  return (
    <>
      <Logo url={logoData.url} text={logoData.text} />
      <div className='nav'>
        <Navigation type='app'>
          {appMenuList.map((item, i) => (
            <MenuButton
              key={i}
              text={item.text}
              url={item.url}
            />
          ))}
        </Navigation>
        <Navigation type='login'>
          {loginMenuList.map((item, i) => (
            
            <MenuButton
              key={i}
              text={item.text}
              url={item.url}
            />
          ))}
        </Navigation>
      </div>
    </>
  );
}

export default NavBar;
