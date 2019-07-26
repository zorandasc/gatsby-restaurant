import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Section, styles, Title } from "../../utils"
import styled from "styled-components"
import Product from "./Product"

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
      <Title title="featured items" message="little taste"></Title>
      <ProductList>
        {menu.edges.map(({ node }, index) => {
          return <Product key={index} product={node}></Product>
        })}
      </ProductList>
    </Section>
  )
}

const ProductList = styled.div``
