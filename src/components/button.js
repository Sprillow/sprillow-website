import React from "react"
import "./button.scss"

export default function Button({ text, className }) {
  return (
    <div className={`custom-button-wrapper ${className}`}>
      <div className="custom-button-bars custom-button-left-bars">
        <div />
        <div />
        <div />
      </div>
      <button className="custom-button">{text}</button>
      <div className="custom-button-bars custom-button-right-bars">
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
