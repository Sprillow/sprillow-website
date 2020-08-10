const scrollToSection = event => {
  event.persist()
  console.log(event)
  event.preventDefault()
  const id = new URL(event.target.href).hash
  const element = document.querySelector(id)
  element.scrollIntoView({
    behavior: "smooth",
  })
}

export default scrollToSection
