import React from "react"
import { Link } from "gatsby"

import curvedShadow from "../images/curved-shadow.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MAX_WIDTH = 960

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        zIndex: -1,
        position: "absolute",
        top: "0",
        width: "100vw",
        height: "360vh",
        maxWidth: "none",
        backgroundImage: `url(${curvedShadow})`,
        backgroundSize: "auto 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "30% -300px",
      }}
    />

    {/* HERO */}
    <div
      style={{
        height: "100vh",
        margin: `0 auto`,
        maxWidth: MAX_WIDTH,
      }}
    >
      <h1>Hey, we are Sprillow</h1>
      <p
        style={{
          color: "hsla(0, 0%, 100%, 0.69)",
        }}
      >
        design, development and consultation studio focused on co-creating
        systems change initiatives
      </p>
    </div>
    {/* /HERO */}

    {/* WHAT WE DO */}
    <div
      style={{
        height: "100vh",
        // backgroundColor: "pink",
        margin: `0 auto`,
        maxWidth: MAX_WIDTH,
      }}
    >
      <h2>What we do</h2>
    </div>
    {/* /WHAT WE DO */}

    {/* RECENT WORK */}
    <div
      style={{
        height: "100vh",
        backgroundColor: "rgba(54, 45, 147, 0.32)",
      }}
    >
      <div
        style={{
          height: "100vh",
          margin: `0 auto`,
          maxWidth: MAX_WIDTH,
        }}
      >
        <h2>Our recent work</h2>
      </div>
    </div>
    {/* /RECENT WORK */}

    {/* GET TO KNOW US */}
    <div
      style={{
        height: "100vh",
        backgroundColor: "rgba(54, 45, 147, 0.00)",
      }}
    >
      <div
        style={{
          height: "100vh",
          margin: `0 auto`,
          maxWidth: MAX_WIDTH,
        }}
      >
        <h2>Get to know us</h2>
      </div>
    </div>
    {/* /GET TO KNOW US */}

    {/* LETS WORK TOGETHER */}
    <div
      style={{
        height: "100vh",
        backgroundColor: "rgba(54, 45, 147, 0.00)",
      }}
    >
      <div
        style={{
          height: "100vh",
          margin: `0 auto`,
          maxWidth: MAX_WIDTH,
        }}
      >
        <h2>Let's work together</h2>
      </div>
    </div>
    {/* /LETS WORK TOGETHER */}

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
    {/* <Image /> */}
    {/* </div> */}
  </Layout>
)

export default IndexPage
