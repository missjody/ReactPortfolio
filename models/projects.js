const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  title: { type: String, required: true },
  linkDeployed: { type: String },
  linkGithub: { type: String, required: true },
  imgSrc: { type: String, required: true },
  description: { type: String, required: true }
});

const Projects = mongoose.model("Projects", projectsSchema);

module.exports = Projects;
