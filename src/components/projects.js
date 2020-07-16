import React from "react"
import "./projects.scss"
import { AcornScreenshot, CosenseScreenshot, UfcScreenshot } from "./images"

const projects = [
  {
    name: "Acorn",
    image: <AcornScreenshot />,
    efforts: ["UX Design", "UI Design", "App Development"],
    subheading: "MacOS & Linux Desktop App for Project Management",
    question: `Modelled playfully after the energetic nature of
    squirrels, Acorn is a collaborative desktop application
    for teams and individuals to map their aspirational goals
    and efforts. We used cutting edge peer-to-peer software
    Holochain for this project.`,
    tags: ["holochain", "peer-to-peer-technology", "project-management"],
    url: "https://github.com/h-be/acorn-docs",
  },
  // {
  //   name: "Unified Field Corporation",
  //   image: <UfcScreenshot />,
  //   efforts: ["Advisory", "Strategy", "Tech Architecture"],
  //   subheading:
  //     "Advisory capacity for tech stack development for a food systems",
  //   question: "How can we...?",
  //   tags: ["holochain", "food-production", "food-systems"],
  //   url: "",
  // },
  // {
  //   name: "cosense",
  //   image: <CosenseScreenshot />,
  //   efforts: ["UX Design", "UI Design", "App Development"],
  //   subheading: "Rapid Sensemaking MacOS, Linux & Windows Native App",
  //   question:
  //     "How can we breakdown barriers of communication in service of getting collective data to make informed and wholistic decisions?",
  //   tags: ["cross-platform", "social-algorithms", "collective-sensemaking"],
  //   url: "https://github.com/rapid-sensemaking-framework/cosense",
  // },
]

function Project({ project }) {
  return (
    <div className="project">
      <div className="project-image">{project.image}</div>
      <div className="project-name-and-efforts-wrapper">
        <h2 className="project-name">{project.name}</h2>
        <div className="project-efforts-wrapper">
          {project.efforts.map((effort, index) => (
            <div key={index} className="project-efforts-item">
              {effort}{" "}
            </div>
          ))}
        </div>
      </div>
      <h3 className="project-subheading">{project.subheading}</h3>

      <div className="project-question">{project.question}</div>
        <div className="project-tags-wrapper">
          {project.tags.map((tag, index) => (
            <div key={index} className="project-tags-item">
              #{tag}
            </div>
          ))}
        </div>
        {project.url && (
            <a className="project-link-button" href={project.url}>See on Github</a>
        )}
      </div>
  )
}

export default function Projects() {
  return (
    <div className="project-profiles">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  )
}
