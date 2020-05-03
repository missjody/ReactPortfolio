import React from "react";


const Project = (props) => {

  return (

    props.projects.map(project => (
      <div className="col m6" key={project.title} >
        <div className="card">

          <div className="card-image">
            <img src={project.imgSrc} alt={project.title} className="responsive-img project-image" />

          </div>

          <div className="card-content">
            <span className="card-title" id="darkBlack"><p><strong>{project.title}</strong></p></span>
            <p>  {project.description}</p>
          </div>

          <div className="card-action">
            <a href={project.linkGithub}><p>GitHub Repository</p></a>
            <a href={project.linkDeployed}><p>Deployed</p></a>
          </div>

        </div>
      </div>
    ))

  )
}

export default Project;