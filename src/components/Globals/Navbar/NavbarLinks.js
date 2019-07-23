import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"

export default class NavbarLinks extends Component {
  state = {
    links: [
      { id: 0, path: "/", name: "home" },
      { id: 1, path: "/about/", name: "about" },
      { id: 2, path: "/menu/", name: "menu" },
      { id: 3, path: "/contact/", name: "contact" },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style: none;
  }
  .nav-link {
    text-decoration: none;
    display: block;
    padding: 0.5rem 1rem;
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    color: ${styles.colors.mainGrey};
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "152px" : "0px")};
  overflow: hidden;
  ${styles.transObject({ time: "0.5s" })};
  @media (min-width: 768px) {
    height: auto; /*VRATI NA STARO */
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem; /*VRATI NA STARO */
    }
  }
`
