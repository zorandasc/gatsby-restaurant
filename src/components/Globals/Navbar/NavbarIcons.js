import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon"></FaFacebook>,
        path: "https://www.facebook.com",
      },
      {
        id: 2,
        icon: <FaInstagram className="icon instagram-icon"></FaInstagram>,
        path: "https://www.instagram.com",
      },
      {
        id: 3,
        icon: <FaTwitter className="icon twitter-icon"></FaTwitter>,
        path: "https://www.twitter.com",
      },
    ],
  }

  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              key={item.id}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()}
  }

  .facebook-icon {
    color: #3b579d;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  .instagram-icon {
    color: #da5f53;
  }

  .icon:hover {
    color: ${styles.colors.mainYellow};
  }

  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 10rem;
  }
`
