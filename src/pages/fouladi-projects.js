import React, { useState } from "react"
import "./styles.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
import scrollToSection from "../components/scroll-help"
import { CSSTransition } from "react-transition-group"

import { PegahProfile, ConnorProfile } from "../components/images"

import WorkPage from "../components/work/work"

function Acorn() {
  return (
    <WorkPage
      seoTitle="Acorn"
      headingTitle="Acorn"
      deliverable="MacOS and Linux App"
      shortDescription="Modelled playfully after the energetic nature of squirrels, Acorn is a collaborative desktop application for teams and individuals to map their aspirational goals and efforts. We used cutting edge peer-to-peer software Holochain for this project."
      services="UX Design     UI Design      App Development "
      selectedImage="../work-proudly-kincardine-2022.png"
      buttonText="See Wesbite"
      buttonLink=""
    />
  )
}

export default Acorn
