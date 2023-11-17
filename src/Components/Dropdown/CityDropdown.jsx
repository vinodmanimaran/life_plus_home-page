import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { TfiLocationPin } from 'react-icons/tfi';

const CityDropdown = () => {
  return (
    <div>
      <NavDropdown
        id='nav-dropdown-dark-example'
        title={<TfiLocationPin fontSize={22} />}
      >
        <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
        <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
        <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default CityDropdown;
