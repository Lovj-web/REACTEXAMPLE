import React from 'react';
import NavItems from './NavItems';

const Navigation = () => {
  return (
    <div className="nav">
      <ul>
        <li>Home</li>
      </ul>
      <ul>
        <NavItems />
      </ul>
    </div>
  );
};

export default Navigation;
