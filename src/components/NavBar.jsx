import React from "react";
import{
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBCollapse,
}from  'mdbreact';

function NavBar() {
    return (
        <MDBNavbar color="black" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Shipping Box</strong>
        </MDBNavbarBrand>
        <MDBCollapse id="navbarCollapse3" navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
            <MDBNavLink
                className="waves-effect waves-light"
                to="/view-orders"
              >
                View orders
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
}

export default NavBar
