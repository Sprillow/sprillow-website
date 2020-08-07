import React from 'react'
import './quadrants.scss'

export function Quadrant({ children, onMouseOver, onMouseOut, onClick }) {
  return <div className='quadrant' onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick}>
    {children}
  </div>
}

export default function Quadrants({ children }) {
  return <div className='quadrants'>
    {children}
  </div>
}