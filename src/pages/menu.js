import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import menuimg from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <PageHeader img={menuimg}>
      <Banner title="menu" subtitle={`let's dig in`}></Banner>
    </PageHeader>
  </Layout>
)

export default MenuPage
