import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"
import QuickInfo from "../components/HomePageComponent/QuickInfo"

import Gallery from "../components/HomePageComponent/Gallery"
import Menu from "../components/HomePageComponent/Menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="fb-root"></div>
    <div className="fb-customerchat" page_id="119106702808633"></div>
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="55 main street - Sant Monica, CA">
        <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
      </Banner>
    </HomeHeader>

    <QuickInfo></QuickInfo>
    <Gallery></Gallery>
    <Menu></Menu>
  </Layout>
)

export default IndexPage
