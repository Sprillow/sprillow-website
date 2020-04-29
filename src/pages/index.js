import React, { useEffect } from "react"
import useWindowScroll from "@react-hook/window-scroll"
import { Link } from "gatsby"
import "./styles.scss"

// import svg images here:

// SVGS as react components MUST
// have .inline.svg at the end of their
// file names or they will not work
import Scroll from "../images/scroll.inline.svg"
import Contact from "../images/contact.inline.svg"
import LineCurlyDivider from "../images/line-curly-divider.inline.svg"
import GithubIcon from "../images/github-icon.inline.svg"
import WhatWeDoDiagram from "../components/whatwedo"
import {
  Seedling,
  PegahProfile,
  ConnorProfile,
  ConnorWorking,
  ConnorFacilitating,
} from "../components/images"
import Projects from "../components/projects"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const scrollY = useWindowScroll(120 /*fps*/)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="background-shape" />

      <a href="mailto:pegah@sprillow.com">
        <Contact className="contact-icon" />
      </a>

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
        <WhatWeDoDiagram />
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
              <div className="about-profile-image-wrapper">
                <PegahProfile />
              </div>
              <h2 className="about-title">Pegah Vaezi</h2>
              <h4 className="about-subtitle">Designer</h4>
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
              <div className="about-profile-image-wrapper">
                <ConnorProfile />
              </div>
              <h2 className="about-title">Connor Turland</h2>
              <h4 className="about-subtitle">Developer, facilitator</h4>
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
          <div className="about-images">
            <div className="about-image-wrapper right">
              <ConnorWorking />
            </div>
            <div className="about-image-wrapper left">
              <ConnorFacilitating />
            </div>
          </div>
        </div>
      </div>
      {/* /GET TO KNOW US */}

      {/* LETS WORK TOGETHER */}
      <div className="lets-work-together section-wrapper">
        <div className="section">
          <h1 className="section-heading">Let's work together</h1>
          <h3 className="contact-text">
            We’re excited to collaborate with you! Send us a message and let us
            know about your project plus any details to help us make your dream
            come through
          </h3>
          <div className="contact-button">
            <a href="mailto:pegah@sprillow.com">Send us a message</a>
          </div>

          <a className="contact-button"></a>
        </div>
      </div>
      {/* /LETS WORK TOGETHER */}

      {/* Footer */}
      <div className="footer section">
        <div className="see-our-work-wrapper">
          <div className="footer-title">See our work</div>{" "}
          <GithubIcon className="github-icon" />
        </div>
        <div className="say-hi-wrapper">
          <div className="footer-title">Say hi</div>
          <div className="contact-emails-wrapper">
            <a href="mailto:connor@sprillow.com" className="contact-email">
              pegah@sprillow.com
            </a>
            <a href="mailto:connor@sprillow.com" className="contact-email">
              connor@sprillow.com
            </a>
          </div>
        </div>
      </div>
      {/* Footer */}
    </Layout>
  )
}

export default IndexPage
