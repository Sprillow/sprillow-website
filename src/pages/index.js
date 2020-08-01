import React from "react"
import "./styles.scss"

// import svg images here:

// SVGS as react components MUST
// have .inline.svg at the end of their
// file names or they will not work
import Contact from "../images/contact.inline.svg"
import GithubIcon from "../images/github-icon.inline.svg"
import WhatWeDoDiagram from "../components/whatwedo"
import { PegahProfile, ConnorProfile } from "../components/images"
import Projects from "../components/projects"

import Section from "../components/section"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

const projects = [
  ["Acorn"],
  ["Online Writing Workshop"],
  ["Fouladi Projects"],
  ["Red Cat Bakery"],
]
function ProjectPreview({ project }) {
  return <div className="project-preview">
    <div className="project-preview-name">{project}</div>
  </div>
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      {/* <a href="mailto:pegah@sprillow.com">
        <Contact className="contact-icon" />
      </a> */}

      {/* HERO */}
      <Section
        id="hello"
        heading={
          <>
            <span>We are</span> Sprillow<span>.</span>
          </>
        }
      >
        <p className="biz-intro">
          design, development and consultation studio <br />
          <a href="/#focus">focused</a> on co-creating initiatives
          <br />
          that affect systems change
        </p>
        <a href="/#portfolio">
          <Button
            text="Our Recent Work"
            className="recent-work-button"
          ></Button>
        </a>
      </Section>
      <Section id="portfolio" heading="Recent Work">
        <div className="project-preview-wrapper">
          {projects.map((project, index) => (
            <ProjectPreview key={index} project={project} />
          ))}
        </div>
      </Section>

      <Section id="services" heading="Our Approach">
        <WhatWeDoDiagram />
      </Section>

      <Section id="focus" heading="Our Focus"></Section>

      <Section id="about" heading="Get To Know Us.">
        <div className="about-content">
          <div className="about-person">
            <div className="about-person-image-name-role">
              <div className="about-profile-image-wrapper">
                <PegahProfile />
              </div>
              <div className="about-person-name-role">
                <h2 className="about-title">Pegah Vaezi</h2>
                <h4 className="about-subtitle">Designer</h4>
              </div>
            </div>
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
              saying that we have to "think globally, and act locally", because
              we have to understand the interconnections, and then make changes
              to ourselves and in our communities and workplaces that reflect
              the impacts we all have on each other, and the world. Pegah won't
              let go of the details. She pays meticulous attention to things
              that many people would overlook. Because of this Pegah feels a
              strong connection with the things she touches and sees, whether
              it's her latest design, the clothing she wears, or the food she
              loves to cook. She loves to feel the joy of her designs invoking
              joy, thoughtfulness and inspiration for other people.
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
            <div className="about-person-image-name-role">
              <div className="about-profile-image-wrapper">
                <ConnorProfile />
              </div>
              <div className="about-person-name-role">
                <h2 className="about-title">Connor Turland</h2>
                <h4 className="about-subtitle">Developer, facilitator</h4>
              </div>
            </div>
            <p className="about-description">
              {/* Connor is a minimalist, and obsesses about learning. He likes
                keeping life simple so that he can focus on the macro picture. Connor has a bad habit of over-thinking. He is
                currently learning Farsi (Persian) and Spanish. Connor is a
                tinkerer and fixer. He grew up tearing about and putting
                together the raw parts of computers for fun, and was always
                entranced by technology. He is a self-taught developer and
                facilitator. */}
              Connor is obsessed with seeing the systems that our lives are
              woven into. Economic, environmental, political, and everything in
              between that connects them, are all fields of fascination. He will
              want to talk with you about them longer than you will want to
              talk. As much as that sounds abstract, Connor has the urge to get
              hands-on and apply the precious time of his life to confront
              systemic challenges head-on. He has been devoted since a young age
              to the arts and crafts of digital technology, but is also aware
              that tech isn't a silver bullet. Connor has fun with everything
              from getting deep in the code, to working face-to-face
              facilitating at hackathons, workshops, classrooms, and client
              meetings.
            </p>
          </div>
        </div>
      </Section>

      <Section id="connect" heading="Let's Work Together">
        <h3 className="contact-text">
          We’re excited to collaborate with you! Send us a message and let us
          know about your project plus any details to help us make your vision
          become reality.
        </h3>
        <div className="contact-button">
          <a href="mailto:pegah@sprillow.com">Send us a message</a>
        </div>

        <a className="contact-button"></a>
      </Section>

      <div className="footer">
        <div className="see-our-work-wrapper">
          <div className="footer-title">See our work</div>{" "}
          <a href="https://github.com/Sprillow" target="_blank">
            <GithubIcon className="github-icon" />
          </a>
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
    </Layout>
  )
}

export default IndexPage
