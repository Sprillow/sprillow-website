import React, { useState } from "react"
import "./styles.scss"

import { useStaticQuery, graphql, Link } from "gatsby"
import scrollToSection from "../components/scroll-help"

// import svg images here:

// SVGS as react components MUST
// have .inline.svg at the end of their
// file names or they will not work
import WhatWeDoDiagram from "../components/whatwedo"

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
      <SEO title="Custom software studio" />

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
          Sprillow is a custom software studio. We bring projects
          to life without compromising on form or function.
        </p>
        <Button
          text="Our Recent Work"
          className="recent-work-button"
          href="/#portfolio"
          onClickA={scrollToSection}
        ></Button>
      </Section>

      <Section id="portfolio" heading="Recent Work">
        {/* there should only be 4 projects, since we use quadrants */}
        <Quadrants>
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
        // bgColor="rgba(88, 7, 7, 0.1)"
      >
        <WhatWeDoDiagram />
      </Section>

      <Section id="focus" heading="Our Focus">
        {/* there should only be 4 focus, since we use quadrants */}
        <Quadrants>
          {focuses.map((focus) => (
            <Quadrant key={focus.id}>
              <Focus focus={focus} />
            </Quadrant>
          ))}
        </Quadrants>
      </Section>

      {/*<Section
        id="about"
        heading="Get To Know Us"
        // bgColor="rgba(256, 256, 256, 0.05)"
      >
        <div className="about-content">
          <div className="bi-section">
            <p>
            From day 1 Sprillow has existed because of a conviction to be in service to hope and beauty at a time of looming darkness, and to take pressing matters into our own capable hands. Sprillow is an experiment to apply specialized knowledge of emerging technologies to grassroots problems. It is a home to artisans, combining creativity, craft and technology to unglue sticky problems. Sprillow periodically takes on external projects, while generating and testing business solutions and offerings internally, and is a revolving door for innovative and breakthrough thinking.
            </p>
          </div>
          {/* <div className="bi-section">
            <p>Sounds like a good fit? We’re excited to collaborate with you.
              Tell us about your project using our contact form, plus any
              details to help us make your vision come true. If you’d rather
              email us directly, send us a message at</p>
          </div> */}


          {/* <div className="bi-section about-person">
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
            
            </p>
          </div> */}
        </div>
      </Section>
      */}

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
            <div className="company">Sprillow Limited - Canada, Earth</div>
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
