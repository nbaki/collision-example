import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,  NavLink } from 'reactstrap';
import FtLauderdaleLogo from '../../images/assets/LuaderdaleLogo.svg';
import '../../stylesheets/navigation.css';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="nav-wrap">
        <Navbar id="nav" light expand="md">
          <NavbarBrand href="/"><img className="logo" id="logo" src={FtLauderdaleLogo} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/pages/certifications">OUR CERTIFICATIONS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/pages/">SCHEDULE APPOINTMENT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/pages">LOCATION</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/pages/">CONTACT US</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
