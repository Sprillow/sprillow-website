import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import { useForm } from "react-hook-form"
import "./contact-form.scss"

import Button from "../button"
import ContactFormSuccess from "./contact-form-success"

function Title({ n, t }) {
  return (
    <div className="contact-form-title">
      <h5 className="contact-form-title-number">{n}</h5>
      <h5 className="contact-form-title-text">{t}</h5>
    </div>
  )
}

function RadioInput({ required, register, error, options = [], label, name }) {
  return (
    <div className="radio-input">
      <div className="input-label">{label}</div>
      {options.map(o => {
        const id = o.replace(" ", "")
        return (
          <div key={id} className="contact-form-option-row">
            <input
              ref={register({ required })}
              type="radio"
              id={id}
              name={name}
              value={o}
            />
            <div className="circle" />
            <label className="radio-input-label" htmlFor={id}>
              {o}
            </label>
            <br />
          </div>
        )
      })}
      <div className="error-message"> {error && (required ? `This field is required` : "eEeE")} </div>
    </div>
  )
}

function TextInput({ required, register, error, placeholder, label, name }) {
  return (
    <div className="text-input">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}
      <input
        ref={register({ required })}
        type={name === "email" ? "email" : "text"}
        id={name}
        name={name}
        placeholder={placeholder}
      ></input>
      <div className="error-message"> {error && (required ? `This field is required` : "eEeE")} </div>
    </div>
  )
}

const TABLET_BREAKPOINT = 1080

export default function ContactForm() {
  const { register, handleSubmit, errors } = useForm() // initialize the hook

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const onSubmit = data => {
     const formdata = new FormData()
    Object.keys(data).forEach(key => {
      formdata.set(key, data[key])
    })
    const xhr = new XMLHttpRequest()
    xhr.open("POST", "https://formspree.io/f/mqkyrggw")
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      /*
      Use the tablet breakpoint here because the layout changes and our
      success/error  layout doesn't work nicely on the 'mobile/tablet' view
      which has a row-like layout
      */
      // success case
      if (xhr.status === 200) {
        if (window.innerWidth > TABLET_BREAKPOINT) {
          // form.reset()
          setSuccess(true)
        } else {
          window.location.href = "/contact-form-success"
        }
      }
      // error case
      else {
        if (window.innerWidth > TABLET_BREAKPOINT) {
          setError(true)
        } else {
          window.location.href = "/contact-form-error"
        }
      }
    }
    xhr.send(formdata)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="contact-form"
    >
      <CSSTransition
        in={!success && !error}
        timeout={600}
        classNames="contact-form-fields"
        unmountOnExit
      >
        <div className="contact-form-fields">
          <Title n="1" t="Tell us a bit about yourself" />
          <div className="form-row two-column-inputs">
            <TextInput
              required
              register={register}
              placeholder="Name"
              name="name"
              error={errors["name"]}
            />
            <TextInput
              required
              register={register}
              placeholder="Email"
              name="email"
              error={errors["email"]}
            />
          </div>
          <div className="form-row">
            <TextInput
              register={register}
              placeholder="Your Role or Position"
              name="position"
              error={errors["position"]}
            />
          </div>
          <Title n="2" t="Tell us about your organization/business" />
          <div className="form-row">
            <TextInput
              required
              register={register}
              placeholder="Organization Name"
              name="organization-name"
              error={errors["organization-name"]}
            />
          </div>
          <div className="form-row">
            <TextInput
              required
              register={register}
              placeholder="Website"
              name="organization-website"
              error={errors["organization-website"]}
            />
          </div>
          <div className="form-row two-column-inputs">
            <TextInput
              required
              register={register}
              placeholder="City"
              name="organization-city"
              error={errors["organization-city"]}
            />
            <TextInput
              required
              register={register}
              placeholder="Country / Territory"
              name="organization-country"
              error={errors["organization-country"]}
            />
          </div>
          <div className="form-row">
            <RadioInput
              required
              register={register}
              label="How long has your organization been running?"
              name="organization-age"
              options={["Pre-launch", "0-5 years", "6-10 years", "10+ years"]}
              error={errors["organization-age"]}
            />
          </div>
          <div className="form-row">
            <RadioInput
              required
              register={register}
              label="How many people work for your organization?"
              name="organization-size"
              options={["Just myself", "2-10", "11-50", "51-100", "100+"]}
              error={errors["organization-size"]}
            />
          </div>

          <Title n="3" t="Tell us about your project" />
          <div className="form-row">
            <RadioInput
              required
              register={register}
              label="What kind of project is this?"
              name="project-type"
              options={[
                "Digital Strategy",
                "UX/UI Design",
                "Mobile App",
                "Web App",
                "E-commerce",
                "Website",
                "Everything",
                "I need your help determining this",
              ]}
              error={errors["project-type"]}
            />
          </div>
          <div className="form-row">
            <TextInput
              register={register}
              label="What is the motivation behind this project? (optional)"
              name="project-motivation"
              error={errors["project-motivation"]}
            />
          </div>
          <div className="form-row">
            <RadioInput
              required
              register={register}
              label="How much are you looking to invest into your ideal result?"
              name="project-budget"
              options={[
                "$5,000 - $10,000",
                "$10,000 - $20,000",
                "$20,000 - $30,000",
                "$30,000 - $50,000",
                "$50,000+",
                "I'm looking for a retainer relationship",
              ]}
              error={errors["project-budget"]}
            />
          </div>
          <div className="form-row">
            <div className="input-label">
              What is your intended or ideal timeframe? (optional)
            </div>
            <div className="two-column-inputs">
              <TextInput
                register={register}
                name="project-timeframe-start"
                placeholder="start"
                error={errors["project-timeframe-start"]}
              />
              <TextInput
                register={register}
                name="project-timeframe-finish"
                placeholder="finish"
                error={errors["project-timeframe-finish"]}
              />
            </div>
          </div>
          <div className="form-row">
            <TextInput
              register={register}
              label="Why would you like to work with us? (optional)"
              name="project-reason"
              error={errors["project-reason"]}
            />
            </div>
            <div className="form-row">
            <TextInput
              register={register}
              label="Tell us anything else that you'd like us to know (optional)"
              name="project-additional-details"
              error={errors["project-additional-details"]}
            />
          </div>
          {/* TODO: add success and error handling here */}
          <div className="form-row">
            <Button text="Submit" className="contact-form-submit-button" />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={success}
        timeout={600}
        classNames="contact-form-success"
        unmountOnExit
      >
        <ContactFormSuccess />
      </CSSTransition>
      {/* ERROR STATE, allows you to go back to the form and try again */}
      <CSSTransition
        in={error}
        timeout={600}
        classNames="contact-form-error"
        unmountOnExit
      >
        <div className="contact-form-error">
          <p>
            :( There was an issue while trying to submit your form. Please{" "}
            <a
              href="#"
              onClick={e => {
                e.preventDefault()
                setError(false)
              }}
            >
              try again
            </a>
            .
          </p>
        </div>
      </CSSTransition>
    </form>
  )
}
