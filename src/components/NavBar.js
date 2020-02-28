import React from 'react';
import { NavLink} from 'react-router-dom';
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';

const NavBar = () => {
  return (
   
    <div className="navbar">
      <div id="navvy">
         <Navbar bg="light" variant="light">
    <Navbar.Brand id="nav-bar-title">SkyBuy☁️</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink className="nav-link" to="/home">Home</NavLink>
      <NavLink className="nav-link" to="/itemslist">Items List</NavLink>
      <NavLink className="nav-link" to="/profile">Profile </NavLink>
      <NavLink className="nav-link" to="/shoppingcart">Shopping Cart</NavLink>
      <NavLink className="nav-link" to="/welcome">Logout </NavLink>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
  </div>
    </div>
  );
};

export default NavBar;


 {/* <NavLink to="/home">Home</NavLink>
      <NavLink to="/itemslist">Items List</NavLink>
      <NavLink to="/profile">Profile </NavLink>
      <NavLink to="/shoppingcart">Shopping Cart</NavLink> */}