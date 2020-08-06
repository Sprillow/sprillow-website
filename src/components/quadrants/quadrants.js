import React from 'react'
import './quadrants.scss'

export function Quadrant({ children }) {
  return <div className='quadrant'>
    {children}
  </div>
}

export default function Quadrants({ children }) {
  return <div className='quadrants'>
    {children}
  </div>
}