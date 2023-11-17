import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MainMenu = () => {
  return (
    <div>
      <NavDropdown
        id='nav-dropdown-dark-example'
        title="Protology"
      >
        <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
        <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
        <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default MainMenu;
