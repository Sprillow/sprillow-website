import React from "react"
import "./button.scss"

export default function Button({ text, className, href, onClickA, onClick }) {
  return (
    <div className={`custom-button-wrapper ${className}`}>
      <div className="custom-button-bars custom-button-left-bars">
        <div />
        <div />
        <div />
      </div>
      {!href && (
        <button className={`custom-button`} onClick={onClick}>
          {text}
        </button>
      )}
      {href && (
        <a className={`custom-button`} href={href} onClick={onClickA}>
          {text}
        </a>
      )}

      <div className="custom-button-bars custom-button-right-bars">
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
