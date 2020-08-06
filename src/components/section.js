import React from 'react'
import './section.scss'

export default function Section({ id, heading, h1heading, children }) {
  return <div id={id} className="section">
    {h1heading && <h1 className="section-heading">{heading}</h1>}
    {!h1heading && <h2 className="section-heading">{heading}</h2>}
    <div className="section-body">{children}</div>
  </div>
}