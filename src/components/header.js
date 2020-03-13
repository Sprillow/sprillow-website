import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    {/* header wrapper */}
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1280,
        display: "flex",
        justifyContent: "space-between",
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: "36px",
            color: "#A4CE9D",
          }}
        >
          <Logo />
          <br />
          {siteTitle}
        </Link>
      </h1>
      <ul style={{ display: "flex", flexDirection: "row", listStyle: "none" }}>
        <li style={{}}>services</li>
        <li style={{ marginLeft: "100px" }}>portfolio</li>
        <li style={{ marginLeft: "100px", marginRight: "70px" }}>about</li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
