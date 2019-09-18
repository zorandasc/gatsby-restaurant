/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import Navbar from "../components/Globals/Navbar/Navbar"
import Footer from "../components/Globals/Footer"

const Layout = ({ children }) => {
  useEffect(() => {
    const div1 = document.createElement("div")
    div1.id = "fb-root"
    document.body.appendChild(div1)

    const div2 = document.createElement("div")
    div2.className = "fb-customerchat"
    div2.page_id = "119106702808633"
    div2.setAttribute("page_id", "119106702808633")
    document.body.appendChild(div2)
  })

  return (
    <main id="main">
      <GlobalStyle />

      <Navbar />
      {children}

      <Footer></Footer>
    </main>
  )
}

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box
}

body{
  font-family:"Open Sans", sans-serif;
  color:#262626;
  background:#FFF;
}

`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
