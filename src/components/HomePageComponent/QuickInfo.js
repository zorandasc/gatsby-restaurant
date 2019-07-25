import React, { Component } from "react"
import { Section, Title, SectionButton, styles } from "../../utils"
import { Link } from "gatsby"
import styled from "styled-components"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission"></Title>
        <QuickInfoWrapper>
          <p className="text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>{" "}
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    word-spacing: 0.2rem;
    color: ${styles.colors.mainGrey};
  }

  @media (min-width: 768px) {
    width: 70%;
  }
`
