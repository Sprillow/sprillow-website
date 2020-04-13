import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Logo } from "./images"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import "./header.css"

const Header = ({ siteTitle }) => {
  const [isOffTop, setIsOffTop] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.y, prevPos.y)
    const checkIsVisible = currPos.y > prevPos.y
    if (checkIsVisible !== isVisible) setIsVisible(checkIsVisible)
    const checkIsOffTop = currPos.y < -120
    if (checkIsOffTop !== isOffTop) setIsOffTop(checkIsOffTop)
  }, [isVisible, isOffTop])

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
              <Link className="header-link" to="/">
                <Logo />
                {/* <br />
          {siteTitle} */}
              </Link>
            </h1>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                listStyle: "none",
              }}
            >
              <li className="header-item">services</li>
              <li className="header-item">portfolio</li>
              <li className="header-item">about</li>
            </ul>
          </div>
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
