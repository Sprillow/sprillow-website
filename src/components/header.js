import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Logo } from "./images"

import "./header.scss"

// SVGS as react components MUST
// have .inline.svg at the end of their
// file names or they will not work
import ToggleNavButton from "../images/toggle-nav-button.inline.svg"

const NavLinks = () => {
  const scrollToSection = event => {
    event.preventDefault()
    const body = document.body
    body.classList.remove("menu-open")
    const id = new URL(event.target.href).hash
    const element = document.querySelector(id)
    element.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <>
      <li>
        <a href="/#services" onClick={scrollToSection}>
          services
        </a>
        {/* <ul className="sub-menu"> */}
        {/* </ul> */}
      </li>
      <li>
        <a href="/#portfolio" onClick={scrollToSection}>
          portfolio
        </a>
      </li>
      <li>
        <a href="/#about" onClick={scrollToSection}>
          about
        </a>
      </li>
    </>
  )
}

const Header = () => {
  // const [menuIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    const body = document.body
    const triggerMenu = document.querySelector(".page-header .trigger-menu")
    const nav = document.querySelector(".page-header nav")
    const menu = document.querySelector(".page-header .menu")
    const scrollUp = "scroll-up"
    const scrollDown = "scroll-down"
    let lastScroll = 0

    const toggleMenu = () => {
      body.classList.toggle("menu-open")
    }
    triggerMenu.addEventListener("click", toggleMenu)

    const checkScroll = () => {
      const currentScroll = window.pageYOffset
      if (currentScroll == 0) {
        body.classList.remove(scrollUp)
        return
      }

      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp)
        body.classList.add(scrollDown)
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
      ) {
        // up
        body.classList.remove(scrollDown)
        body.classList.add(scrollUp)
      }
      lastScroll = currentScroll
    }
    window.addEventListener("scroll", checkScroll)

    // unmount/cleanup
    return () => {
      triggerMenu.removeEventListener("click", toggleMenu)
      window.removeEventListener("scroll", checkScroll)
    }
  }, [])

  const scrollToHome = event => {
    event.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <header className="page-header">
      <nav>
        <div className="trigger-menu-wrapper">
          <div className="trigger-menu-wrapper-center">
            <a className="header-link" href="/#hello" onClick={scrollToHome}>
              <Logo />
            </a>
            <button className="trigger-menu mobile-only">
              <svg width="12" height="12" viewBox="0 0 24 24">
                <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
              </svg>
              <span>MENU</span>
            </button>
            <ul className="desktop-menu desktop-only">
              <NavLinks />
            </ul>
          </div>
        </div>
        <ul className="menu mobile-only">
          <NavLinks />
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
