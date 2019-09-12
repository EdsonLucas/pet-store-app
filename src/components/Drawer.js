import React from 'react';

import { BackDrop, Nav } from '../styles/drawer';

const SideDrawer = props => {
  const { DrawerOpen, backdropClickHandler } = props;

  return (
    <>
      <Nav className={DrawerOpen && 'open'}>
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </Nav>
      {DrawerOpen && <BackDrop onClick={backdropClickHandler} />}
    </>
  );
};

export default SideDrawer;
