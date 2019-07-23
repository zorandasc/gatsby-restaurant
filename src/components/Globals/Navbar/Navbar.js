import React, { Component } from "react"
import NavberHeader from "./NavbarHeader"
import NavberLinks from "./NavbarLinks"
import NavberIcons from "./NavbarIcons"
import styled from "styled-components"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render() {
    return (
      <NavWrapper>
        <NavberHeader handleNavbar={this.handleNavbar}></NavberHeader>
        <NavberLinks navbarOpen={this.state.navbarOpen}></NavberLinks>
        <NavberIcons></NavberIcons>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
