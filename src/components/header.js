import PropTypes from "prop-types"
import React from "react"
import { Logo } from "./images"
import useIntersect from "../hooks/useIntersect"

import "./header.scss"

// SVGS as react components MUST
// have .inline.svg at the end of their
// file names or they will not work
import ToggleNavButton from "../images/toggle-nav-button.inline.svg"

const Header = () => {
  // const [isOffTop, setIsOffTop] = useState(false)
  // const [isVisible, setIsVisible] = useState(true)

  const [topOfScreenRef, topOfScreenIntersectEntry] = useIntersect({
    threshold: [0.5],
  })

  const isOffTop =
    topOfScreenIntersectEntry &&
    topOfScreenIntersectEntry.boundingClientRect &&
    topOfScreenIntersectEntry.boundingClientRect.y < 0
  const isVisible = true

  console.log(topOfScreenIntersectEntry)

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
      <div className="top-of-site-pixel-anchor" ref={topOfScreenRef}></div>
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
