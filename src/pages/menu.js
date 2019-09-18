import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import menuimg from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <div id="fb-root"></div>
    <div class="fb-customerchat" page_id="119106702808633"></div>
    <PageHeader img={menuimg}>
      <Banner title="menu" subtitle={`let's dig in`}></Banner>
    </PageHeader>
  </Layout>
)

export default MenuPage
