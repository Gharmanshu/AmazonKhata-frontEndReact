import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class AppNav extends Component {
  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">KHATA - Redrive Tool</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/addEvent">Add Event</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default AppNav;
