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
      {/* <div className="background-shape" /> */}

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
            a design, development and consultation studio focused on co-creating
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
          <Projects />
        </div>
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
                {/* Pegah loves plants, the metaphors they bring, and their tangible
                beauty. When she's not designing, she's probably researching,
                watering plants, or enjoying some culinary exploration. Pegah
                loves unique things created with character and thoughtfulness.
                She is at her best when she is inspired by and listens to
                nature. The best moments are when her work brings
                thoughtfulness, joy, and inspiration to people, and is in
                respect of the environment and humanity. */}
                Pegah loves to be in the garden with the plants. She marvels at
                nature, and finds her inspiration there. She believes in the
                saying that we have to "think globally, and act locally",
                because we have to understand the interconnections, and then
                make changes to ourselves and in our communities and workplaces
                that reflect the impacts we all have on each other, and the
                world. Pegah won't let go of the details. She pays meticulous
                attention to things that many people would overlook. Because
                of this Pegah feels a strong connection with the things she touches and sees,
                whether it's her latest design, the clothing she wears, or the
                food she loves to cook. She loves to feel the joy of her designs
                invoking joy, thoughtfulness and inspiration for other people.
                {/* attention to detail */}
                {/* aligned with her spirit */}
                {/*  */}
                {/* connecting the disciplines is good because it gives more insight */}
                {/* finding inspiration in nature */}
                {/* in nature, everything is connected */}
                {/* life is harmonious, there is less hate */}
                {/* eliminate short-sightedness */}
                {/* think global, act local */}
                {/* critical reflexivity, critical thinking from art background, into the world of work and design */}
              </p>
            </div>
            <div className="about-person">
              <div className="about-profile-image-wrapper">
                <ConnorProfile />
              </div>
              <h2 className="about-title">Connor Turland</h2>
              <h4 className="about-subtitle">Developer, facilitator</h4>
              <p className="about-description">
                {/* Connor is a minimalist, and obsesses about learning. He likes
                keeping life simple so that he can focus on the macro picture. Connor has a bad habit of over-thinking. He is
                currently learning Farsi (Persian) and Spanish. Connor is a
                tinkerer and fixer. He grew up tearing about and putting
                together the raw parts of computers for fun, and was always
                entranced by technology. He is a self-taught developer and
                facilitator. */}
                Connor is obsessed with seeing the systems that our lives are
                woven into. Economic, environmental, political, and everything
                in between that connects them, are all fields of fascination. He
                will want to talk with you about them longer than you will want
                to talk. As much as that sounds abstract, Connor has the urge to
                get hands-on and apply the precious time of his life to confront
                systemic challenges head-on. He has been devoted since a young
                age to the arts and crafts of digital technology, but is also
                aware that tech isn't a silver bullet. Connor has fun with
                everything from getting deep in the code, to working
                face-to-face facilitating at hackathons, workshops, classrooms,
                and client meetings.
              </p>
            </div>
          </div>
          {/* <div className="about-images">
            <div className="about-image-wrapper right">
              <ConnorWorking />
            </div>
            <div className="about-image-wrapper left">
              <ConnorFacilitating />
            </div>
          </div> */}
        </div>
      </div>
      {/* /GET TO KNOW US */}

      {/* LETS WORK TOGETHER */}
      <div className="lets-work-together section-wrapper" id="connect">
        <div className="section">
          <h1 className="section-heading">Let's work together</h1>
          <h3 className="contact-text">
            We’re excited to collaborate with you! Send us a message and let us
            know about your project plus any details to help us make your vision
            become reality.
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
          <a href="https://github.com/Sprillow" target="_blank"><GithubIcon className="github-icon" /></a>
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
