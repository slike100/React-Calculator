import React from 'react';
import { NavLink } from "react-router-dom";
var navStyle = {
  position: 'fixed',
  top: '0',
  width: '100%',
  display: 'CanvasGradient',
  gridRowStart: '1',
  textAlign: 'center'
}


var navStylingButton = {
  color: 'black',
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'none',
}

var navStylingButtonActive = {
  color: 'red',
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'underline',
  backgroundColor: 'orange',
}

class Header extends React.PureComponent{
  render(){
    return(
      <nav style={navStyle}>
        <NavLink style={navStylingButton} activeStyle={navStylingButtonActive} exact to='/'>
          Home
        </NavLink>
        <NavLink style={navStylingButton} activeStyle={navStylingButtonActive} to='/calc'>
          Calculator
        </NavLink>
        <NavLink style={navStylingButton} activeStyle={navStylingButtonActive} to='/about'>
          About my Calculator
        </NavLink>
      </nav>
    )
  }
}

export default Header;
