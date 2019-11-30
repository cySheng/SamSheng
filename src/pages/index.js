import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ShengAvatar from "../components/ShengAvatar"
import SEO from "../components/seo"
import Contact from "../components/contact"
import indexStyles from "./index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className={indexStyles.intro}>
      <div>
        <h1>Hi, I'm Sammie</h1>
        <p>A front-end developer.</p>
      </div>
      <div>
        <h1>Hi, I'm Sheng</h1>
        <p>A back-end developer.</p>
        {/* <div
          style={{
            maxWidth: `300px`,
            marginBottom: `1.45rem`,
          }}
        >
          <ShengAvatar />
        </div> */}
      </div>
    </section>
    <Contact />
  </Layout>
)

export default IndexPage
