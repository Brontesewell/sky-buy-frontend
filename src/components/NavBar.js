import React from 'react';
import { NavLink, withRouter} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';



  
const NavBar = (props) => {
  console.log("navbar props", props )
  console.log(props.handleInputChange)

  const {first_name} = props.profile

  return (
   
    <div className="navbar">
      <div id="navvy">
         <Navbar id="background-nav" variant="light">
    <Navbar.Brand id="nav-bar-title">SkyBuy☁️</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink className="nav-link" to="/home">Home</NavLink>
      <NavLink className="nav-link" to="/itemslist">Find Items Now!</NavLink>
      <NavLink className="nav-link" to="/profile">Profile </NavLink>
      <NavLink className="nav-link" to="/shoppingcart">Shopping Cart</NavLink>
      <NavLink className="nav-link" to="/" onClick={() => {
           
        // logout
        props.handleLogOut()
        // redirect 
        
      }}> Logout </NavLink>
    </Nav>
 
    <h1 id="name-nabar">Hello {first_name}</h1>
  </Navbar>
  </div>
    </div>
  );
};

export default withRouter(NavBar);


 {/* <NavLink to="/home">Home</NavLink>
      <NavLink to="/itemslist">Items List</NavLink>
      <NavLink to="/profile">Profile </NavLink>
      <NavLink to="/shoppingcart">Shopping Cart</NavLink> */}