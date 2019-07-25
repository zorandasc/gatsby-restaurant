import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import aboutimg from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader img={aboutimg}>
      <Banner title="about us" subtitle="a little about us"></Banner>
    </PageHeader>
  </Layout>
)

export default AboutPage
