import React, { useState } from "react"
import "./styles.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Burger from "../components/burger/burger"
import ContactFormError from "../components/contact-form/contact-form-error"
import Section from "../components/section"

const ContactFormSuccessPage = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

  return (
    <Layout>
      <SEO title="Encountered an issue" />

      {/* burger menu (hidden on larger screens) */}
      <Burger
        isOpen={openBurgerMenu}
        closeMenu={() => setOpenBurgerMenu(false)}
      />
      <div className="burger-menu-button">
        <Button
          text="menu"
          className="menu"
          onClick={() => setOpenBurgerMenu(true)}
          menu
        ></Button>
      </div>

      <Section heading="Uh oh!">
        <ContactFormError />
      </Section>
    </Layout>
  )
}

export default ContactFormSuccessPage
