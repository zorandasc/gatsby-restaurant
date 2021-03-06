import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Section, Title } from "../../utils"
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

const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
