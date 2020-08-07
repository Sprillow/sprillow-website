import React, { useEffect, useState } from "react"
import "./whatwedo.scss"
import WhatWeDoCircle from "../images/our-approach-circle.inline.svg"
import useIntersect from "../hooks/useIntersect"

import Discovery from "../images/discovery.inline.svg"
import Design from "../images/design.inline.svg"
import Delivery from "../images/delivery.inline.svg"
import Feedback from "../images/feedback.inline.svg"

import Quadrants, { Quadrant } from "../components/quadrants/quadrants"

const DISCOVERY = "discovery"
const DESIGN = "design"
const DELIVERY = "delivery"
const FEEDBACK = "feedback"

// TODO

/*



*/
const DESCRIPTIONS = {
  [DISCOVERY]: (
    <>
      Getting to shared understanding is a process of discovery. We all share
      ideas to get on the same page, and clarify assumptions, intentions, and
      requirements. We are well trained in methods of research and facilitation
      to help establish project clarity early on.
    </>
  ),
  [DESIGN]: (
    <>
      Design doesn't happen in a vacuum. We develop a picture of your users or
      audience so we know who we're creating for. We follow a think-make-check
      iterative process to design a well-tested experience that's going to feel
      seamless to your users.
    </>
  ),
  [DELIVERY]: (
    <>
      Time to build. We craft the code of your project with utmost attention to
      quality, user-friendliness, reliability, and maintainability. We can
      deliver on technical solutions from low-level systems to web services;
      data visualizations; and fast, friendly web or native interfaces.
    </>
  ),
  [FEEDBACK]: (
    <>
      Never stop learning. It is integral to the process to pause, reflect, and
      be informed. We establish the tools and techniques for gathering and
      interpreting the data points you need to make data-driven decisions in
      areas with room for improvement.
    </>
  ),
}

const ELLIPSE_COMPASS = "masking-green-circle-3"
const IMAGE_COMPASS = "compass"

const ELLIPSE_WILLOW = "masking-green-circle-2"
const IMAGE_WILLOW = "willow-leaf"

const ELLIPSE_SPRUCE_CONE = "masking-green-circle-4"
const IMAGE_SPRUCE_CONE = "spruce-cone"

const ELLIPSE_HONEYBEE = "masking-green-circle"
const IMAGE_HONEYBEE = "bee"

export default function WhatWeDoDiagram() {
  // set this to DISCOVERY, DESIGN, DELIVERY, or FEEDBACK
  // to develop the layout quickly and easily for the
  // expanded subcategories
  const [whatWeDoRef, whatWeDoIntersectEntry] = useIntersect({
    threshold: [0.4],
  })
  const [activeItem, setActiveItem] = useState()
  const [hoveringItem, setHoveringItem] = useState()

  const activateDiscovery = () => setActiveItem(DISCOVERY)
  const activateDesign = () => setActiveItem(DESIGN)
  const activateDelivery = () => setActiveItem(DELIVERY)
  const activateFeedback = () => setActiveItem(FEEDBACK)

  const hoverDiscovery = () => setHoveringItem(DISCOVERY)
  const hoverDesign = () => setHoveringItem(DESIGN)
  const hoverDelivery = () => setHoveringItem(DELIVERY)
  const hoverFeedback = () => setHoveringItem(FEEDBACK)
  const clearHover = () => setHoveringItem(null)

  // on scroll into view, activate discovery
  useEffect(() => {
    if (!activeItem && whatWeDoIntersectEntry.isIntersecting) {
      activateDiscovery()
    }
  }, [whatWeDoIntersectEntry.isIntersecting])

  // click and activate
  useEffect(() => {
    const earth = document.getElementById(ELLIPSE_COMPASS)
    const seedling = document.getElementById(ELLIPSE_WILLOW)
    const earOfRice = document.getElementById(ELLIPSE_SPRUCE_CONE)
    const honeybee = document.getElementById(ELLIPSE_HONEYBEE)

    const all = [earth, seedling, earOfRice, honeybee]
    all.forEach(element => {
      if (element) element.classList.remove("active")
    })
    switch (activeItem) {
      case DISCOVERY:
        earth.classList.add("active")
        break
      case DESIGN:
        seedling.classList.add("active")
        break
      case DELIVERY:
        earOfRice.classList.add("active")
        break
      case FEEDBACK:
        honeybee.classList.add("active")
        break
    }
  }, [activeItem])

  // hover
  useEffect(() => {
    const earth = document.getElementById(ELLIPSE_COMPASS)
    const seedling = document.getElementById(ELLIPSE_WILLOW)
    const earOfRice = document.getElementById(ELLIPSE_SPRUCE_CONE)
    const honeybee = document.getElementById(ELLIPSE_HONEYBEE)

    const all = [earth, seedling, earOfRice, honeybee]
    all.forEach(element => {
      if (element) element.classList.remove("hovering")
    })
    switch (hoveringItem) {
      case DISCOVERY:
        earth.classList.add("hovering")
        break
      case DESIGN:
        seedling.classList.add("hovering")
        break
      case DELIVERY:
        earOfRice.classList.add("hovering")
        break
      case FEEDBACK:
        honeybee.classList.add("hovering")
        break
    }
  }, [hoveringItem])

  useEffect(() => {
    const setupForSection = (iconId, ellipseId, activateFunc, hoverFunc) => {
      const icon = document.getElementById(iconId)
      const ellipse = document.getElementById(ellipseId)
      icon.addEventListener("click", activateFunc)
      icon.addEventListener("mouseenter", hoverFunc)
      icon.addEventListener("mouseleave", clearHover)
      ellipse.addEventListener("click", activateFunc)
      ellipse.addEventListener("mouseenter", hoverFunc)
      ellipse.addEventListener("mouseleave", clearHover)
    }
    const teardownForSection = (iconId, ellipseId, activateFunc, hoverFunc) => {
      const icon = document.getElementById(iconId)
      const ellipse = document.getElementById(ellipseId)
      icon.removeEventListener("click", activateFunc)
      icon.removeEventListener("mouseenter", hoverFunc)
      icon.removeEventListener("mouseleave", clearHover)
      ellipse.removeEventListener("click", activateFunc)
      ellipse.removeEventListener("mouseenter", hoverFunc)
      ellipse.removeEventListener("mouseleave", clearHover)
    }

    setupForSection(
      IMAGE_COMPASS,
      ELLIPSE_COMPASS,
      activateDiscovery,
      hoverDiscovery
    )
    setupForSection(IMAGE_WILLOW, ELLIPSE_WILLOW, activateDesign, hoverDesign)
    setupForSection(
      IMAGE_SPRUCE_CONE,
      ELLIPSE_SPRUCE_CONE,
      activateDelivery,
      hoverDelivery
    )
    setupForSection(
      IMAGE_HONEYBEE,
      ELLIPSE_HONEYBEE,
      activateFeedback,
      hoverFeedback
    )

    // cleanup
    return () => {
      teardownForSection(
        IMAGE_COMPASS,
        ELLIPSE_COMPASS,
        activateDiscovery,
        hoverDiscovery
      )
      teardownForSection(
        IMAGE_WILLOW,
        ELLIPSE_WILLOW,
        activateDesign,
        hoverDesign
      )
      teardownForSection(
        IMAGE_SPRUCE_CONE,
        ELLIPSE_SPRUCE_CONE,
        activateDelivery,
        hoverDelivery
      )
      teardownForSection(
        IMAGE_HONEYBEE,
        ELLIPSE_HONEYBEE,
        activateFeedback,
        hoverFeedback
      )
    }
  })

  return (
    <>
      {/* NOT MOBILE */}
      <div className="what-we-do-diagram" ref={whatWeDoRef}>
        <h4
          className={`what-we-do-step-title top-left ${
            activeItem === DISCOVERY ? "active" : ""
          } ${hoveringItem === DISCOVERY ? "hovering" : ""}`}
          onClick={activateDiscovery}
          onMouseOver={hoverDiscovery}
          onMouseOut={clearHover}
          onFocus={hoverDiscovery}
          onBlur={clearHover}
        >
          Discovery
        </h4>
        <div
          className={`subcategories discovery-subcategories top-left ${
            activeItem === DISCOVERY ? "active" : ""
          } ${hoveringItem === DISCOVERY ? "hovering" : ""}`}
        >
          <div className="subcategory discovery-subcategory first">
            Strategy
          </div>
          <div className="subcategory discovery-subcategory second">
            Consultation
          </div>
          <div className="subcategory discovery-subcategory third">
            UX Research
          </div>
          <div className="subcategory discovery-subcategory fourth">
            Facilitation
          </div>
        </div>
        <h4
          className={`what-we-do-step-title top-right ${
            activeItem === DESIGN ? "active" : ""
          } ${hoveringItem === DESIGN ? "hovering" : ""}`}
          onClick={activateDesign}
          onMouseOver={hoverDesign}
          onMouseOut={clearHover}
          onFocus={hoverDesign}
          onBlur={clearHover}
        >
          Design
        </h4>
        <div
          className={`subcategories design-subcategories top-right ${
            activeItem === DESIGN ? "active" : ""
          } ${hoveringItem === DESIGN ? "hovering" : ""}`}
        >
          <div className="subcategory design-subcategory first">UX Design</div>
          <div className="subcategory design-subcategory second">UI Design</div>
          <div className="subcategory design-subcategory third">
            Visual Identity
          </div>
        </div>
        <h4
          className={`what-we-do-step-title bottom-right ${
            activeItem === DELIVERY ? "active" : ""
          } ${hoveringItem === DELIVERY ? "hovering" : ""}`}
          onClick={activateDelivery}
          onMouseOver={hoverDelivery}
          onMouseOut={clearHover}
          onFocus={hoverDelivery}
          onBlur={clearHover}
        >
          Delivery
        </h4>
        <div
          className={`subcategories delivery-subcategories bottom-right ${
            activeItem === DELIVERY ? "active" : ""
          } ${hoveringItem === DELIVERY ? "hovering" : ""}`}
        >
          <div className="subcategory delivery-subcategory first">
            E-commerce <br /> Solutions
          </div>
          <div className="subcategory delivery-subcategory second">
            Native Apps
          </div>
          <div className="subcategory delivery-subcategory third">
            Mobile Apps
          </div>
          <div className="subcategory delivery-subcategory fourth">
            Peer-to-peer <br /> Solutions
          </div>
        </div>
        <h4
          className={`what-we-do-step-title bottom-left ${
            activeItem === FEEDBACK ? "active" : ""
          } ${hoveringItem === FEEDBACK ? "hovering" : ""}`}
          onClick={activateFeedback}
          onMouseOver={hoverFeedback}
          onMouseOut={clearHover}
          onFocus={hoverFeedback}
          onBlur={clearHover}
        >
          Feedback
        </h4>
        <div
          className={`subcategories feedback-subcategories bottom-left ${
            activeItem === FEEDBACK ? "active" : ""
          } ${hoveringItem === FEEDBACK ? "hovering" : ""}`}
        >
          <div className="subcategory feedback-subcategory first">
            Optimization
          </div>
          <div className="subcategory feedback-subcategory second">
            Analytics
          </div>
          <div className="subcategory feedback-subcategory third">
            Retrospectives
          </div>
        </div>
        {Object.keys(DESCRIPTIONS).map((descriptionKey, index) => {
          const description = DESCRIPTIONS[descriptionKey]
          return (
            <p
              key={index}
              className={`what-we-do-step-description ${
                activeItem === descriptionKey ? "active" : ""
              }`}
            >
              {description}
            </p>
          )
        })}
        <WhatWeDoCircle className="what-we-do-circle" />
        <div className="what-we-do-step"></div>
        <Quadrants>
          <Quadrant
            onMouseOver={hoverDiscovery}
            onMouseOut={clearHover}
            onClick={activateDiscovery}
          />
          <Quadrant
            onMouseOver={hoverDesign}
            onMouseOut={clearHover}
            onClick={activateDesign}
          />
          <Quadrant
            onMouseOver={hoverFeedback}
            onMouseOut={clearHover}
            onClick={activateFeedback}
          />
          <Quadrant
            onMouseOver={hoverDelivery}
            onMouseOut={clearHover}
            onClick={activateDelivery}
          />
        </Quadrants>
      </div>
      {/* MOBILE */}
      <div className="what-we-do-mobile">
        <div className="what-we-do-section-mobile">
          <div className="what-we-do-section-heading-mobile">
            <Discovery />
            <h4>Discovery</h4>
          </div>
          <p>{DESCRIPTIONS[DISCOVERY]}</p>
        </div>

        <div className="what-we-do-section-mobile">
          <div className="what-we-do-section-heading-mobile">
            <Design />
            <h4>Design</h4>
          </div>
          <p>{DESCRIPTIONS[DESIGN]}</p>
        </div>

        <div className="what-we-do-section-mobile">
          <div className="what-we-do-section-heading-mobile">
            <Delivery />
            <h4>Delivery</h4>
          </div>
          <p>{DESCRIPTIONS[DELIVERY]}</p>
        </div>

        <div className="what-we-do-section-mobile">
          <div className="what-we-do-section-heading-mobile">
            <Feedback />
            <h4>Feedback</h4>
          </div>
          <p>{DESCRIPTIONS[FEEDBACK]}</p>
        </div>
      </div>
    </>
  )
}
