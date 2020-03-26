import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./projects.scss"
import { AcornScreenshot } from "./images"

const projects = [
  {
    name: "Acorn",
    image: <AcornScreenshot />,
    efforts: ["UX Design", "UI Design", "App Development"],
    subheading: "Rapid Sensemaking MacOS, Linux & Windows Native App",
    question:
      "How can we breakdown barriers of communication in service of getting collective data to make informed and wholistic decisions?",
    tags: ["holochain", "peer-to-peer-technology", "collective-sensemaking"],
    url: "https://github.com/rapid-sensemaking-framework/cosense",
  },
  {
    name: "Unified Field Corporation",
    image: <AcornScreenshot />,
    efforts: ["UX Design", "UI Design", "App Development"],
    subheading: "Rapid Sensemaking MacOS, Linux & Windows Native App",
    question:
      "How can we breakdown barriers of communication in service of getting collective data to make informed and wholistic decisions?",
    tags: ["holochain", "peer-to-peer-technology", "collective-sensemaking"],
    url: "https://github.com/rapid-sensemaking-framework/cosense",
  },
  {
    name: "cosense",
    image: <AcornScreenshot />,
    efforts: ["UX Design", "UI Design", "App Development"],
    subheading: "Rapid Sensemaking MacOS, Linux & Windows Native App",
    question:
      "How can we breakdown barriers of communication in service of getting collective data to make informed and wholistic decisions?",
    tags: ["holochain", "peer-to-peer-technology", "collective-sensemaking"],
    url: "https://github.com/rapid-sensemaking-framework/cosense",
  },
]

function Project({ project }) {
  return (
    <div className="project">
      <div className="project-image">{project.image}</div>
      <div className="project-name-and-efforts-wrapper">
        <h2 className="project-name">{project.name}</h2>
        <div className="project-efforts-wrapper">
          {project.efforts.map(effort => (
            <div className="project-efforts-item">{effort} .</div>
          ))}
        </div>
      </div>
      <h3 className="project-subheading">{project.subheading}</h3>

      <div className="project-question">{project.question}</div>
      <div className="project-tags-and-link-wrapper">
        <div className="project-tags-wrapper">
          {project.tags.map(tag => (
            <div className="project-tags-item">#{tag}</div>
          ))}
        </div>
        <div className="project-link-button">
          <a href={project.url}>See on Github</a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const settings = {
    arrows: false,
    centerMode: true,
    // infinite: true,
    centerPadding: "15%",
    slidesToShow: 1,
    speed: 500,
  }
  return (
    <div className="project-profiles">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Slider>
    </div>
  )
}
