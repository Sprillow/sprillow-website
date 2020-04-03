import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Logo } from "./images"
import useWindowScroll from "@react-hook/window-scroll"
import usePrevious from "../hooks/useprevious"

import "./header.css"

const Header = ({ siteTitle }) => {
  const scrollY = useWindowScroll(120 /*fps*/)
  const previousScrollY = usePrevious(scrollY)
  const show = !scrollY || previousScrollY > scrollY
  const isOffTop = scrollY > 120
  return (
    <>
      {
        <header>
          {/* header wrapper */}
          <div
            className={`header-wrapper ${show ? "" : "header-hidden"} ${
              isOffTop ? "header-off-top" : ""
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
