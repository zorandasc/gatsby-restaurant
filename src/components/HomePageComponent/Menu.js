import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Section, styles } from "../../utils"
import styled from "styled-components"
import Img from "gatsby-image"

export default function Menu() {
  const { menu } = useStaticQuery(graphql`
    {
      menu: allContentfulMenu {
        edges {
          node {
            id
            name
            price
            ingredients
            img {
              fixed(width: 150, height: 150) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Section>
      <MenuWrapper>
        {menu.edges.map(({ node }, index) => {
          return (
            <div key={index}>
              <p>{node.name}</p>
              <Img fixed={node.img.fixed}></Img>
              <p>{node.ingredients}</p>
              <p>{node.price}</p>
            </div>
          )
        })}
      </MenuWrapper>
    </Section>
  )
}

const MenuWrapper = styled.div``
