import React from "react"
import "./contact-form-error.scss"

export default function ContactFormError() {
  return (
    <div className="contact-form-error">
      <p>
        There was an issue during the submission of your form, and we couldn't recover from it! <br />
        Sorry about that, we hope you'll try again. <br />
        <a href="/">Go home</a>
      </p>
    </div>
  )
}
