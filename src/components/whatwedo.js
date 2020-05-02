import React, { useEffect, useState } from "react"
import "./whatwedo.scss"
import WhatWeDoCircle from "../images/what-we-do-circle.inline.svg"

const DISCOVERY = "discovery"
const DESIGN = "design"
const DELIVERY = "delivery"
const FEEDBACK = "feedback"

const DESCRIPTIONS = {
  [DISCOVERY]: <>A bunch of text explaining discovery</>,
  [DESIGN]: <>A bunch of text explaining design</>,
  [DELIVERY]: <>A bunch of text explaining delivery</>,
  [FEEDBACK]: <>A bunch of text explaining feedback</>,
}

const EARTH = "earth"

const ELLIPSE_SEEDLING = "ellipse-seedling"
const IMAGE_SEEDLING = "seedling"

const ELLIPSE_EAR_OF_RICE = "ellipse-ear-of-rice"
const IMAGE_EAR_OF_RICE = "ear-of-rice"

const ELLIPSE_HONEYBEE = "ellipse-honeybee"
const IMAGE_HONEYBEE = "honeybee"

export default function WhatWeDoDiagram() {
  // set this to DISCOVERY, DESIGN, DELIVERY, or FEEDBACK
  // to develop the layout quickly and easily for the
  // expanded subcategories
  const [activeItem, setActiveItem] = useState(DISCOVERY)
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

  // click and activate
  useEffect(() => {
    const earth = document.getElementById(EARTH)
    const seedling = document.getElementById(ELLIPSE_SEEDLING)
    const earOfRice = document.getElementById(ELLIPSE_EAR_OF_RICE)
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
    const earth = document.getElementById(EARTH)
    const seedling = document.getElementById(ELLIPSE_SEEDLING)
    const earOfRice = document.getElementById(ELLIPSE_EAR_OF_RICE)
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

    setupForSection(EARTH, EARTH, activateDiscovery, hoverDiscovery)
    setupForSection(
      IMAGE_SEEDLING,
      ELLIPSE_SEEDLING,
      activateDesign,
      hoverDesign
    )
    setupForSection(
      IMAGE_EAR_OF_RICE,
      ELLIPSE_EAR_OF_RICE,
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
      teardownForSection(EARTH, EARTH, activateDiscovery, hoverDiscovery)
      teardownForSection(
        IMAGE_SEEDLING,
        ELLIPSE_SEEDLING,
        activateDesign,
        hoverDesign
      )
      teardownForSection(
        IMAGE_EAR_OF_RICE,
        ELLIPSE_EAR_OF_RICE,
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
    <div className="what-we-do-diagram">
      <h2
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
      </h2>
      <div
        className={`subcategories discovery-subcategories top-left ${
          activeItem === DISCOVERY ? "active" : ""
        } ${hoveringItem === DISCOVERY ? "hovering" : ""}`}
      >
        <h3 className="subcategory discovery-subcategory first">Strategy</h3>
        <h3 className="subcategory discovery-subcategory second">
          Consultation
        </h3>
        <h3 className="subcategory discovery-subcategory third">UX Research</h3>
        <h3 className="subcategory discovery-subcategory fourth">
          Facilitation
        </h3>
      </div>
      <h2
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
      </h2>
      <div
        className={`subcategories design-subcategories top-right ${
          activeItem === DESIGN ? "active" : ""
        } ${hoveringItem === DESIGN ? "hovering" : ""}`}
      >
        <h3 className="subcategory design-subcategory first">UX Design</h3>
        <h3 className="subcategory design-subcategory second">UI Design</h3>
        <h3 className="subcategory design-subcategory third">
          Visual Identity
        </h3>
      </div>
      <h2
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
      </h2>
      <div
        className={`subcategories delivery-subcategories bottom-right ${
          activeItem === DELIVERY ? "active" : ""
        } ${hoveringItem === DELIVERY ? "hovering" : ""}`}
      >
        <h3 className="subcategory delivery-subcategory first">
          E-commerce solutions
        </h3>
        <h3 className="subcategory delivery-subcategory second">Mobile Apps</h3>
        <h3 className="subcategory delivery-subcategory third">Native Apps</h3>
        <h3 className="subcategory delivery-subcategory fourth">
          Peer-to-peer solutions
        </h3>
      </div>
      <h2
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
      </h2>
      <div
        className={`subcategories feedback-subcategories bottom-left ${
          activeItem === FEEDBACK ? "active" : ""
        } ${hoveringItem === FEEDBACK ? "hovering" : ""}`}
      >
        <h3 className="subcategory feedback-subcategory first">Optimization</h3>
        <h3 className="subcategory feedback-subcategory second">Analytics</h3>
        <h3 className="subcategory feedback-subcategory third">
          Retrospectives
        </h3>
      </div>
      {activeItem && (
        <p className="what-we-do-step-description">
          {DESCRIPTIONS[activeItem]}
        </p>
      )}
      <WhatWeDoCircle className="what-we-do-circle" />
      <div className="what-we-do-step"></div>
    </div>
  )
}
