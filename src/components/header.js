import PropTypes from "prop-types"
import _ from "underscore"
import React, { useEffect, useState } from "react"
import scrollToSection from "./scroll-help"

import { Logo } from "./images"
// SVGS as react components MUST
// have .inline.svg at the end of their
// file names or they will not work
import GithubIcon from "../images/github.inline.svg"
import TwitterIcon from "../images/twitter.inline.svg"
import ToggleNavButton from "../images/toggle-nav-button.inline.svg"

import "./header.scss"

const NavLinks = () => {
  const items = [
    ["/#portfolio", "work"],
    ["/#services", "approach"],
    ["/#focus", "focus"],
//     ["/#about", "about"],
    ["/#connect", "connect"],
  ]

  return (
    <>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item[0]} onClick={scrollToSection}>
            {item[1]}
          </a>
        </li>
      ))}
    </>
  )
}

const Header = () => {
  // const [menuIsOpen, setMenuIsOpen] = useState(false)

  // useEffect(() => {
  //   const body = document.body
  //   const triggerMenu = document.querySelector(".page-header .trigger-menu")
  //   const nav = document.querySelector(".page-header nav")
  //   const menu = document.querySelector(".page-header .menu")
  //   const scrollUp = "scroll-up"
  //   const scrollDown = "scroll-down"
  //   let lastScroll = 0

  //   const toggleMenu = () => {
  //     body.classList.toggle("menu-open")
  //   }
  //   triggerMenu.addEventListener("click", toggleMenu)

  //   const checkScroll = () => {
  //     const currentScroll = window.pageYOffset
  //     if (currentScroll < 90) {
  //       body.classList.remove(scrollUp)
  //       return
  //     }

  //     if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
  //       // down
  //       body.classList.remove(scrollUp)
  //       body.classList.add(scrollDown)
  //     } else if (
  //       currentScroll < lastScroll &&
  //       body.classList.contains(scrollDown)
  //     ) {
  //       // up
  //       body.classList.remove(scrollDown)
  //       body.classList.add(scrollUp)
  //     }
  //     lastScroll = currentScroll
  //   }
  //   const checkScrollThrottled = _.throttle(checkScroll, 50)
  //   window.addEventListener("scroll", checkScrollThrottled)

  //   // unmount/cleanup
  //   return () => {
  //     triggerMenu.removeEventListener("click", toggleMenu)
  //     window.removeEventListener("scroll", checkScrollThrottled)
  //   }
  // }, [])

  const scrollToHome = event => {
    if (window.location.pathname === '/') {
      event.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav>
      <a className="logo-image-link" href="/#hello" onClick={scrollToHome}>
        <Logo />
      </a>
      <ul>
        <NavLinks />
      </ul>
      {/* Social Links */}
      <a href="https://github.com/Sprillow" target="_blank">
        <GithubIcon className="social-icon github" />
      </a>

      <a href="https://twitter.com/sprillow" target="_blank">
        <TwitterIcon className="social-icon twitter" />
      </a>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
