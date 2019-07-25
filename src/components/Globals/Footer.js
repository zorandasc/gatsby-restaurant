import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

export default class Footer extends Component {
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
      <FooterWrapper>
        <div className="title">eatery</div>
        <div className="icons">
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
        </div>
        <p className="copyright">copyright &copy; 2018 eatery</p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    margin: 1rem 0;
    text-align: center; /*SAM ZA TEXT */
    text-transform: capitalize;
  }
  .title {
    text-align: center;
    color: ${styles.colors.mainWhite};
    width: 10rem;
    text-align: center; /*ZA CENTRIRANJE TEXTA */
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto; /*ZA CENTRIRANJE DIVA */
    ${styles.border({ color: `${styles.colors.mainYellow}` })};
  }
`
