import React, { useState } from "react"
import "../../pages/styles.scss"
import "./work.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
import scrollToSection from "../scroll-help"
import { CSSTransition } from "react-transition-group"

// import svg images here:

// SVGS as react components MUST
// have .inline.svg at the end of their
// file names or they will not work

import Section from "../section"

import Layout from "../layout"
import SEO from "../seo"
import Button from "../button"
import Quadrants, { Quadrant } from "../quadrants/quadrants"
import Burger from "../burger/burger"

function WorkPage({
  seoTitle,
  headingTitle,
  shortDescription,
  deliverable,
  services,
  selectedImage,
  buttonText,
  buttonLink,
  longDescriptionPart1,
  longDescriptionPart2,
}) {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

  return (
    <Layout>
      <SEO title={seoTitle} />

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
        heading={<div className="work-page-heading">{headingTitle}</div>}
        h1heading
      >
        <div className="work-intro-section">
          <div className="bi-section">
            <div className="work-deliverable">{deliverable}</div>
            <div className="work-description-services-wrapper">
              <p>{shortDescription}</p>
              <div>{services}</div>
            </div>
          </div>
          <div className="bi-section">
            <div src={selectedImage}></div>
            <Button
              text={buttonText}
              className="work-page-button"
              href={buttonLink}
              // onClickA={scrollToSection}
            ></Button>
          </div>
        </div>
      </Section>

      <Section>
        <div>{longDescriptionPart1}</div>

        <div>{longDescriptionPart2}</div>
      </Section>

      <div className="footer">Sprillow Limited - Ontario, Canada</div>
    </Layout>
  )
}

export default WorkPage
