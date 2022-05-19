import React from 'react'
import { CSSTransition } from 'react-transition-group'

import { Logo } from '../images'
import scrollToSection from '../scroll-help'

import CloseLine from '../../images/close-line-gold.inline.svg'

import './burger.scss'

const Burger = ({ isOpen, closeMenu }) => {
  const onClickA = (event) => {
    scrollToSection(event)
    closeMenu()
  }
  const scrollToHome = (event) => {
    if (window.location.pathname === '/') {
      event.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      closeMenu()
    }
  }
  return (
    <div className='burger-menu-wrapper'>
      <CSSTransition
        in={isOpen}
        timeout={200}
        classNames='burger-menu-animation'
        unmountOnExit
      >
        <div className='burger-menu-list-wrapper'>
          <div className='burger-close-button' onClick={closeMenu}>
            <CloseLine className='close-icon' />
          </div>
          <a className='logo-image-link' href='/#hello' onClick={scrollToHome}>
            <Logo />
          </a>
          <ul className='burger-menu-list'>
            <li>
              <a href='/#portfolio' onClick={onClickA}>
                work
              </a>
            </li>
            <li>
              <a href='/#services' onClick={onClickA}>
                approach
              </a>
            </li>
            <li>
              <a href='/#focus' onClick={onClickA}>
                focus
              </a>
            </li>
            <li>
              <a href='/#about' onClick={onClickA}>
                about
              </a>
            </li>
            <li>
              <a href='/#connect' onClick={onClickA}>
                connect
              </a>
            </li>
          </ul>{' '}
        </div>
      </CSSTransition>
    </div>
  )
}
export default Burger
