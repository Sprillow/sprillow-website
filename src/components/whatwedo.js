import React from "react"
import "./whatwedo.css"

export default function WhatWeDoDiagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="600"
      height="600"
      viewBox="0 0 600 600"
    >
      <defs>
        <filter
          id="Ellipse_23"
          x="0"
          y="0"
          width="600"
          height="600"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood flood-color="#dedede" flood-opacity="0.698" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g className="cls-4" transform="matrix(1, 0, 0, 1, 0, 0)">
        <g
          id="Ellipse_23-2"
          data-name="Ellipse 23"
          className="cls-1"
          transform="translate(9 9)"
        >
          <ellipse className="cls-2" cx="345" cy="345.5" rx="345" ry="345.5" />
          <ellipse className="cls-3" cx="345" cy="345.5" rx="343.5" ry="344" />
        </g>
      </g>
    </svg>
  )
}
