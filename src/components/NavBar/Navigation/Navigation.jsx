import React from 'react';
import './Navigation.css';

const Navigation = ({ children, type }) => {
  return (
    <nav className={`navigation navigation_type_${type}`}>
      <ul
        className='main__navigation-list'
        // style={{ listStyleImage: `url('./images/dashboard.svg')` }}
      >
        {children}
      </ul>
    </nav>
  );
};

export default Navigation;
