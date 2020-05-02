import axios from "axios";

export default {
  // Gets all projects
  getProjects: function () {
    console.log("Test getProjcets")
    return axios.get("/api/projects");
  }
};