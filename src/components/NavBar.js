import React from 'react';
import { NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
   
    <div className="navbar">
      <NavLink to="/home">.     Home          . </NavLink>
      <NavLink to="/itemslist">.     Items List       . </NavLink>
      <NavLink to="/profile">.     Profile    . </NavLink>
      <NavLink to="/shoppingcart">.     Shopping Cart    . </NavLink>
      
    </div>
  );
};

export default NavBar;