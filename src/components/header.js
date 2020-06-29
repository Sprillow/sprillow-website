import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Logo } from "./images"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import "./header.scss"

// SVGS as react components MUST
// have .inline.svg at the end of their
// file names or they will not work
import ToggleNavButton from "../images/toggle-nav-button.inline.svg"

const Header = ({ siteTitle }) => {
  const [isOffTop, setIsOffTop] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const checkIsVisible = currPos.y > prevPos.y
      if (checkIsVisible !== isVisible) setIsVisible(checkIsVisible)
      const checkIsOffTop = currPos.y < -120
      if (checkIsOffTop !== isOffTop) setIsOffTop(checkIsOffTop)
    },
    [isVisible, isOffTop]
  )

  const scrollToHome = event => {
    event.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToSection = event => {
    event.preventDefault()
    const id = new URL(event.target.href).hash
    const element = document.querySelector(id)
    element.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <>
      {
        <header>
          {/* header wrapper */}
          <div
            className={`header-wrapper ${isOffTop ? "header-off-top" : ""} ${
              isVisible ? "" : "header-hidden"
            }`}
          >
            <h1 style={{ margin: 0 }}>
              <a className="header-link" href="/#hello" onClick={scrollToHome}>
                <Logo />
                {/* <br />
          {siteTitle} */}
              </a>
            </h1>
            <ul className="header-menu">
              <li className="header-item">
                <a href="/#services" onClick={scrollToSection}>
                  services
                </a>
              </li>
              <li className="header-item">
                <a href="/#portfolio" onClick={scrollToSection}>
                  portfolio
                </a>
              </li>
              <li className="header-item">
                <a href="/#about" onClick={scrollToSection}>
                  about
                </a>
              </li>
            </ul>
            <ToggleNavButton className="toggle-nav-button" />
          </div>

          <button className="toggle-nav-button"></button>
        </header>
      }
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
