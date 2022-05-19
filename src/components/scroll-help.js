const scrollToSection = event => {
  // event.persist()

  // only do this behaviour if already on the homepage
  if (window.location.pathname === "/") {
    event.preventDefault()
    const url = new URL(event.target.href)
    const id = url.hash
    const element = document.querySelector(id)
    element.scrollIntoView({
      behavior: "smooth",
    })
  }
}

export default scrollToSection
