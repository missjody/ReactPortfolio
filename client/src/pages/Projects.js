import React from "react"; //, { useState, useEffect } 
// import API from "../utils/API";


const Projects = () => {
  // const [projects, setProjects] = useState([]);

  // // on page load call loadProjects
  // useEffect(() => {
  //   loadProjects()
  // }, []);

  // // load up all the projects
  // const loadProjects = () => {
  //   API.getProjects()
  //     .then(results =>
  //       setProjects(results.data)
  //     ).catch(err => console.log(err))
  // };

  const projects = [

    {
      title: "Burger Munch",
      linkDeployed: "https://blooming-eyrie-50875.herokuapp.com/",
      linkGithub: "https://github.com/missjody/Burger_Munch",
      imgSrc: "./images/burgerMunch.jpg",
      description: "This full stack application allows the user to make a wishlist of burgers to munch, while also storing a list of burgers previously munched."
    },
    {
      title: "Dessert Search",
      linkDeployed: "https://hmbudzinski.github.io/OfficialProjectOne/",
      linkGithub: "https://github.com/hmbudzinski/OfficialProjectOne",
      imgSrc: "./images/dessert.jpg",
      description: "For our first group project we were asked to come together as a team to solve a real world problem using data from multiple server-side API requests."
    },
    {
      title: "Employee Profile",
      linkDeployed: "https://github.com/missjody/Developer-Profile-Generator",
      linkGithub: "https://github.com/missjody/Developer-Profile-Generator",
      imgSrc: "./images/profilegen.jpg",
      description: "Using a NodeJS interface, this application creates a PDF from the information provided by the user's profile on GitHub."
    },
    {
      title: "Password Generator",
      linkDeployed: "https://missjody.github.io/Random-Password-Generator/",
      linkGithub: "https://github.com/missjody/Random-Password-Generator",
      imgSrc: "./images/pwGen.jpg",
      description: "With this application the user a password with a variety of characters included, and a length of their own choosing."
    },
    {
      title: "Streamer",
      linkDeployed: "https://infinite-cliffs-65236.herokuapp.com/",
      linkGithub: "https://github.com/kacox1251/Streamer",
      imgSrc: "./images/streamer.png",
      description: "Our team created a password protected connection to a database that stored movies and tv shows are on their watch list."
    }
  ]

  // console.log("Projects ", projects)


  return (
    <div className="container fluid">

      <div className="row">
        <div className="col s6 ">
          <h4 id="darkOrange">projects</h4>
        </div>
      </div>

      <div className="row">

        {projects.map(project => (
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
        ))}
      </div>
    </div>

  )
}

export default Projects;

