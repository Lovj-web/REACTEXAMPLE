import React from 'react';

const NavItems = () => {
  const items = ['About', 'Students', 'Events', 'Contact'];
  return (
    <>
      {items.map((item) => {
        return (
          <a href="#" key={item}>
            <li>{item}</li>
          </a>
        );
      })}
    </>
  );
};

export default NavItems;
