import React from "react";


const Project = () => {
  const projectsArr = [

    {
      title: "Employee Directory",
      linkDeployed: "https://damp-cliffs-93023.herokuapp.com/",
      linkGithub: "https://github.com/missjody/employeedirectory",
      imgSrc: "./images/empDir.jpg",
      description: "Upon application load it fakes an employee directory by importing a list of people from randomuser.me api. Once on the page, the user is able to search by first name, last name, or email address to find the employee they're looking for, using state and filter."
    },
    {
      title: "Surată",
      linkDeployed: "https://surata-app.herokuapp.com/",
      linkGithub: "https://github.com/Inbary-s/productivity-app",
      imgSrc: "./images/surata.jpg",
      description: "React password protected productivity application, including the ability to set up goals and sub tasks, a Pomodoro timer, and a meditation page. To check out, use Portfolio for the username and Password1 for the password."
    },
    {
      title: "Template Engine",
      linkGithub: "https://github.com/missjody/Template_Engine_-_Employee_Summary",
      imgSrc: "./images/programgifsmol.gif",
      description: ""
    },
    {
      title: "Streamer",
      linkDeployed: "https://infinite-cliffs-65236.herokuapp.com/",
      linkGithub: "https://github.com/kacox1251/Streamer",
      imgSrc: "./images/streamer.jpg",
      description: "For our second group project we created a password protected connection for a database that stored what movies and tv shows are on your watch list. To check it out, use missjodyrussell@gmail.com for the username and Password1 for the password"
    },
  ];

  return (

    projectsArr.map(project => (
      <div className="col m6" key={project.title} >
        <div className="card">

          <div className="card-image">
            <img src={project.imgSrc} alt={project.title} className="responsive-img project-image" />

          </div>

          <div className="card-content">
            <span className="card-title" id="darkBlack"><strong>{project.title}</strong></span>
            <p>  {project.description}</p>
          </div>

          <div className="card-action">
            <a href={project.linkGithub}>GitHub Repository</a>
            <a href={project.linkDeployed}>Deployed</a>
          </div>

        </div>
      </div>
    ))

  )
}

export default Project