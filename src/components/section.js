import React from 'react'
import './section.scss'

export default function Section({ id, heading, children }) {
  return <div id={id} className="section">
    <h2 className="section-heading">{heading}</h2>
    <div className="section-body">{children}</div>
  </div>
}