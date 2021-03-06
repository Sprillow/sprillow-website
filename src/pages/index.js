import React, { useState } from "react"
import "./styles.scss"

import { useStaticQuery, graphql, Link } from "gatsby"
import scrollToSection from "../components/scroll-help"
import { CSSTransition } from "react-transition-group"

// import svg images here:

// SVGS as react components MUST
// have .inline.svg at the end of their
// file names or they will not work
import Contact from "../images/contact.inline.svg"
import WhatWeDoDiagram from "../components/whatwedo"
import { PegahProfile, ConnorProfile } from "../components/images"
import Projects from "../components/projects"

import Section from "../components/section"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Quadrants, { Quadrant } from "../components/quadrants/quadrants"
import Burger from "../components/burger/burger"
import ContactForm from "../components/contact-form/contact-form"

function ProjectPreview({ project, index }) {
  const main = (
    <>
      <h3 className="project-preview-name">{project.project}</h3>
      <p className="project-preview-objective">{project.objective}</p>
      <div className="project-preview-deliverable">{project.deliverable}</div>
      <div className="project-preview-image-wrapper">
        <div className="project-preview-image" />
      </div>
    </>
  )
  return (
    <a
      className="project-preview"
      href={project.link}
      target="_blank"
      rel="noreferrer"
    >
      {main}
    </a>
  )
}
function Focus({ focus }) {
  return (
    <div className="focus-quadrant">
      <h3>{focus.Title}</h3>
      <p className="focus-quadrant-description">{focus.Description}</p>
    </div>
  )
}

const IndexPage = () => {
  // /content/focus.csv
  // /content/portfolio.csv
  // source: https://docs.google.com/spreadsheets/d/1ZGSQMlkejbzv6D22im4BNN6oI5YuD-X4i6Br00dKqRU/edit
  const {
    allFocusCsv: { nodes: focuses },
    allPortfolioCsv: { nodes: portfolio },
  } = useStaticQuery(graphql`
    {
      allFocusCsv {
        nodes {
          id
          Title
          Description
        }
      }
      allPortfolioCsv {
        nodes {
          id
          project
          objective
          deliverable
          link
        }
      }
    }
  `)

  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

  return (
    <Layout>
      <SEO title="Home" />

      {/* burger menu (hidden on larger screens) */}
      <Burger
        isOpen={openBurgerMenu}
        closeMenu={() => setOpenBurgerMenu(false)}
      />
      <div className="burger-menu-button">
        <Button
          text="menu"
          className="menu"
          onClick={() => setOpenBurgerMenu(true)}
          menu
        ></Button>
      </div>
      {/* HERO */}
      {/* Desktop and Tablet Hero */}
      <Section
        id="hello"
        heading={
          <div className="left-adjust-heading">
            <span className="hero-heading-desktop">We are</span> Sprillow
            <span>.</span>
          </div>
        }
        h1heading
      >
        <div className="hello-willow" />
        <div className="hello-spruce" />
        <div className="hello-compass" />

        <p className="biz-intro">
          Sprillow is a design, development and consultation studio{" "}
          <a href="/#focus" onClick={scrollToSection}>
            focused
          </a>{" "}
          on co-creating systems change initiatives.{" "}
          <a href="/#about" onClick={scrollToSection}>
            We are
          </a>{" "}
          a small team lit up with a will to create, and bring impactful
          projects beautifully and functionally to life.
        </p>
        <Button
          text="Our Recent Work"
          className="recent-work-button"
          href="/#portfolio"
          onClickA={scrollToSection}
        ></Button>
      </Section>

      <Section id="portfolio" heading="Recent Work">
        <Quadrants>
          {/* there should only be 4 projects, since we use quadrants */}
          {portfolio.map((project, index) => (
            <Quadrant key={index}>
              <ProjectPreview project={project} index={index} />
            </Quadrant>
          ))}
        </Quadrants>
      </Section>

      <Section
        id="services"
        heading="Our Approach"
        bgColor="rgba(88, 7, 7, 0.1)"
      >
        <WhatWeDoDiagram />
      </Section>

      <Section id="focus" heading="Our Focus">
        <Quadrants>
          {/* there should only be 4 focus, since we use quadrants */}
          {focuses.map(focus => (
            <Quadrant key={focus.id}>
              <Focus focus={focus} />
            </Quadrant>
          ))}
        </Quadrants>
      </Section>

      <Section
        id="about"
        heading="Get To Know Us"
        bgColor="rgba(256, 256, 256, 0.05)"
      >
        <div className="about-content">
          <div className="bi-section about-person">
            <div className="about-person-image-name-role">
              <div className="about-profile-image-wrapper">
                <PegahProfile />
              </div>
              <div className="about-person-name-role">
                <h3 className="about-title">Pegah Vaezi</h3>
                <h5 className="about-subtitle">Designer</h5>
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
              the impacts we all have on each other, and the world. <br />
              <br />
              Pegah won't let go of the details. She pays meticulous attention
              to things that many people would overlook. Because of this Pegah
              feels a strong connection with the things she touches and sees,
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
          <div className="bi-section about-person">
            <div className="about-person-image-name-role">
              <div className="about-profile-image-wrapper">
                <ConnorProfile />
              </div>
              <div className="about-person-name-role">
                <h3 className="about-title">Connor Turland</h3>
                <h5 className="about-subtitle">Developer, facilitator</h5>
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
              systemic challenges head-on. <br />
              <br /> He has been devoted since a young age to the arts and
              crafts of digital technology, but is also aware that tech isn't a
              silver bullet. Connor has fun with everything from getting deep in
              the code, to working face-to-face facilitating at hackathons,
              workshops, classrooms, and client meetings.
            </p>
          </div>
        </div>
      </Section>

      <Section id="connect" heading="Let's Work Together">
        <div className="contact-content">
          <div className="contact-text bi-section">
            <p>
              Sounds like a good fit? We’re excited to collaborate with you.
              Tell us about your project using our contact form, plus any
              details to help us make your vision come true. If you’d rather
              email us directly, send us a message at{" "}
              <a href="mailto:connor@sprillow.com">connor@sprillow.com</a>.
            </p>
            <div className="company">Sprillow Limited - Ontario, Canada</div>
          </div>

          <div className="bi-section contact-form-bi-section">
            <ContactForm />
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage
