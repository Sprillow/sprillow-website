import React from "react"
import useWindowScroll from "@react-hook/window-scroll"
import { Link } from "gatsby"
import "./styles.scss"

// import svg images here:

// SVGS as react components MUST
// have .inline.svg at the end of their
// file names or they will not work
import Scroll from "../images/scroll.inline.svg"
import Contact from "../images/contact.inline.svg"
import WhatWeDoCircle from "../images/what-we-do-circle.inline.svg"
import LineCurlyDivider from "../images/line-curly-divider.inline.svg"

import { Seedling } from "../components/images"
import Projects from "../components/projects"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const scrollY = useWindowScroll(120 /*fps*/)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="background-shape" />

      <Contact className="contact-icon" />

      {/* HERO */}
      <div className="hero section-wrapper section">
        <div className="hero-text">
          <h1 className="hero-heading">
            Hey, we are <span>Sprillow</span>
          </h1>{" "}
          <Seedling />
          <p className="hero-sub-heading">
            design, development and consultation studio focused on co-creating
            systems change initiatives
          </p>
        </div>
        <div
          className={`hero-scroll-section ${scrollY > 5 ? "hide-scroll" : ""}`}
        >
          <Scroll className="mouse-icon" />
        </div>
      </div>
      {/* /HERO */}

      {/* WHAT WE DO */}
      <div className="what-we-do section-wrapper section">
        <h1 className="section-heading">What we do</h1>

        <div className="what-we-do-diagram">
          <h2 className="what-we-do-step-title top-left">Discovery</h2>
          <div className="discovery-subcategories">
            <h3 className="discovery-subcategory first">Strategy</h3>
            <h3 className="discovery-subcategory second">Consultation</h3>
            <h3 className="discovery-subcategory third">UX Reseach</h3>
            <h3 className="discovery-subcategory fourth">Facilitation</h3>
          </div>
          <h2 className="what-we-do-step-title top-right">Design</h2>
          <div className="design-subcategories">
            <h3 className="design-subcategory first">UX Design</h3>
            <h3 className="design-subcategory second">UI Design</h3>
            <h3 className="design-subcategory third">Visual Identity</h3>
          </div>
          <h2 className="what-we-do-step-title bottom-right">Delivery</h2>
          <div className="delivery-subcategories">
            <h3 className="delivery-subcategory first">
              Custom App development
            </h3>
            <h3 className="delivery-subcategory second">Technology Stack</h3>
            <h3 className="delivery-subcategory third">E-commerce solutions</h3>
          </div>
          <h2 className="what-we-do-step-title bottom-left">Feedback</h2>
          <div className="feedback-subcategories">
            <h3 className="feedback-subcategory first">Optimization</h3>
            <h3 className="feedback-subcategory second">Analytics</h3>
            <h3 className="feedback-subcategory third">Retrospectives</h3>
          </div>
          <p className="what-we-do-step-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit id in libero,
            purus nullam conubia torquent volutpat sollicitudin himenaeos et
            aenean nulla facilisis, cras netus rutrum vel taciti lacus curabitur
            eget laoreet.
          </p>
          <WhatWeDoCircle className="what-we-do-diagram" />
          <div className="what-we-do-step"></div>
        </div>
      </div>
      {/* /WHAT WE DO */}

      {/* RECENT WORK */}
      <div className="our-recent-work">
        <LineCurlyDivider className="line-curly-divider-top" />
        <div className="section">
          <h1 className="section-heading">Our recent work</h1>
        </div>
        <Projects />
        <LineCurlyDivider className="line-curly-divider-bottom" />
      </div>
      {/* /RECENT WORK */}

      {/* GET TO KNOW US */}
      <div className="get-to-know-us">
        <div className="section">
          <h1 className="section-heading">Get to know us</h1>
          <div className="about-content">
            <div className="about-person">
              <div className="about-profile-image"></div>
              <h2 className="about-title">Pegah Vaezi</h2>
              <h3 className="about-subtitle">Designer</h3>
              <p className="about-description">
                Lorem ipsum dolor sit amet consectetur adipiscing elit id in
                libero, purus nullam conubia torquent volutpat sollicitudin
                himenaeos et aenean nulla facilisis, cras netus rutrum vel
                taciti lacus curabitur eget laoreet. Id neque primis elementum
                orci a feugiat turpis commodo, blandit fusce imperdiet justo
                vehicula netus nulla penatibus, platea aptent massa tellus sed
                ligula aenean. Integer orci posuere augue dictumst nullam
                pulvinar netus lectus cubilia, pellentesque vitae tempor
                vehicula maecenas porttitor bibendum nisl fringilla turpis, dis
                molestie fames commodo urna aliquet aenean varius.
              </p>
            </div>
            <div className="about-person">
              <div className="about-profile-image"></div>
              <h2 className="about-title">Connor Turland</h2>
              <h3 className="about-subtitle">Developer, facilitator</h3>
              <p className="about-description">
                Lorem ipsum dolor sit amet consectetur adipiscing elit id in
                libero, purus nullam conubia torquent volutpat sollicitudin
                himenaeos et aenean nulla facilisis, cras netus rutrum vel
                taciti lacus curabitur eget laoreet. Id neque primis elementum
                orci a feugiat turpis commodo, blandit fusce imperdiet justo
                vehicula netus nulla penatibus, platea aptent massa tellus sed
                ligula aenean. Integer orci posuere augue dictumst nullam
                pulvinar netus lectus cubilia, pellentesque vitae tempor
                vehicula maecenas porttitor bibendum nisl fringilla turpis, dis
                molestie fames commodo urna aliquet aenean varius.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /GET TO KNOW US */}

      {/* LETS WORK TOGETHER */}
      <div className="lets-work-together section-wrapper">
        <div className="section">
          <h1 className="section-heading">Let's work together</h1>
          <h2 className="contact-text">
            We’re excited to collaborate with you! Send us a message and let us
            know about your project plus any details to help us make your dream
            come through
          </h2>
          <a className="contact-button"></a>
        </div>
      </div>
      {/* /LETS WORK TOGETHER */}
    </Layout>
  )
}

export default IndexPage
