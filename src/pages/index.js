import React from "react"
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
import useIntersect from "../hooks/useIntersect"

const IndexPage = () => {
  const [topOfScreenRef, topOfScreenIntersectEntry] = useIntersect({
    threshold: [0.5],
  })

  const scrollToServices = () => {
    const element = document.querySelector("#services")
    element.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="background-shape" />

      <a href="mailto:pegah@sprillow.com">
        <Contact className="contact-icon" />
      </a>

      {/* HERO */}
      <div className="top-of-site-pixel-anchor" ref={topOfScreenRef}></div>
      <div id="hello" className="hero section-wrapper section">
        <div className="hero-text">
          <h1 className="hero-heading">
            Hey, we are <span>Sprillow</span>
            <Seedling />
          </h1>{" "}
          <p className="hero-sub-heading">
            design, development and consultation studio focused on co-creating
            systems change initiatives
          </p>
        </div>
        <div
          className={`hero-scroll-section ${
            topOfScreenIntersectEntry &&
            topOfScreenIntersectEntry.boundingClientRect &&
            topOfScreenIntersectEntry.boundingClientRect.y < 0
              ? "hide-scroll"
              : ""
          }`}
        >
          <Scroll className="mouse-icon" onClick={scrollToServices} />
        </div>
      </div>
      {/* /HERO */}

      {/* WHAT WE DO */}
      <div id="services" className="what-we-do section-wrapper section">
        <h1 className="section-heading">What we do</h1>
        <WhatWeDoDiagram />
      </div>
      {/* /WHAT WE DO */}

      {/* RECENT WORK */}
      <div id="portfolio" className="our-recent-work">
        <LineCurlyDivider className="line-curly-divider-top" />
        <div className="section">
          <h1 className="section-heading">Our recent work</h1>
        </div>
        <Projects />
        <LineCurlyDivider className="line-curly-divider-bottom" />
      </div>
      {/* /RECENT WORK */}

      {/* GET TO KNOW US */}
      <div id="about" className="get-to-know-us">
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
                Pegah loves plants, both as metaphors, and as living things.
                When she's not designing, she's probably researching, watering
                plants, or enjoying some cuisine exploration. Pegah likes wood,
                plants, and anything inspired by nature. She is in her best when
                she listens to nature. The best moments are when her work brings
                thoughtfulness, joy, and inspiration to the people, and respect
                to the environment and humanity. Pegah loves unique things
                created with character and thoughtfulness. She also loves it
                when work of design actually has a positive impact in the world.
                In her design work she brings joy, thoughtfulness, and
                inpiration to its audience and users.
              </p>
            </div>
            <div className="about-person">
              <div className="about-profile-image-wrapper">
                <ConnorProfile />
              </div>
              <h2 className="about-title">Connor Turland</h2>
              <h4 className="about-subtitle">Developer, facilitator</h4>
              <p className="about-description">
                Connor is a minimalist. He likes keeping life simple so that he
                can focus on the big and hard puzzles. He is a contemplater,
                with a mind that works overtime on juicy challenges. Sometimes
                they keep him up at night, and then wake him up at 6 in the
                morning and he has to get out of bed and get back to it. With
                people, Connor has a strong diplomatic side, and is able to
                connect with many different people with diverse perspectives and
                make everyone feel heard. Connor adores learning. He is
                currently learning Farsi (Persian) and Spanish. Connor is a
                tinkerer and fixer. He grew up tearing about and putting
                together the raw parts of computers for fun, and was always
                entranced by technology. He is a self-taught developer and
                facilitator.
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
            know about your project plus any details to help us make your vision
            become reality
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
