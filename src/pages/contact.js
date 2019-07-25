import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import contactimg from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader img={contactimg}>
      <Banner title="contact us" subtitle="let get in touch"></Banner>
    </PageHeader>
  </Layout>
)

export default ContactPage
