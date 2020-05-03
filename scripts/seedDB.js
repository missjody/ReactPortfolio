const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Projects collection and inserts the projects below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactportfolio");

const projectsSeed = [

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
    description: "React password protected productivity application, including the ability to set up goals and sub tasks, a Pomodoro timer, and a meditation page. To check it out, use Portfolio for the username and Password1 for the password."
  },
  {
    title: "Streamer",
    linkDeployed: "https://infinite-cliffs-65236.herokuapp.com/",
    linkGithub: "https://github.com/kacox1251/Streamer",
    imgSrc: "./images/streamer.jpg",
    description: "For our second group project we created a password protected connection for a database that stored what movies and tv shows are on your watch list. To check it out, use missjodyrussell@gmail.com for the username and Password1 for the password"
  },
];

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(projectsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
