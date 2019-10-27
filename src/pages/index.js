import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Post from '../components/Post/Post';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3><Link to="/style-guide/">StyleGuide</Link></h3>
    <h3><Link to="/article/">Article Demo</Link></h3>
    <Post/>
  </Layout>
)

export default IndexPage
