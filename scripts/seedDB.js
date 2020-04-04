const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Projects collection and inserts the projects below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactportfolio");

const projectsSeed = [
  // each one should have 
  // project title
  // linke to deployed version
  // link to github
  // gif or screenshot of project

  // {
  //   title: ,
  //   linkDeployed: ,
  //   linkGithub: , 
  //   imgSrc: 
  // }

];

db.Projects.remove({})
  .then(() => db.Projects.collection.insertMany(projectsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
