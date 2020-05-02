import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Project from "../components/Project/Project"


const Projects = () => {
  const [projects, setProjects] = useState([]);

  // on page load call loadProjects
  useEffect(() => {
    loadProjects()
  }, []);

  // load up all the projects
  const loadProjects = () => {
    API.getProjects()
      .then(results =>
        setProjects(results.data)
      ).catch(err => console.log(err))
  };

  return (
    <div className="container fluid">

      <div className="row">
        <div className="col s6 ">
          <h4 id="darkOrange">projects</h4>
        </div>
      </div>

      <div className="row">

        <Project projects={projects} />

      </div>
    </div>

  )
}

export default Projects;

