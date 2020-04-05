const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Projects collection and inserts the projects below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactportfolio");

const projectsSeed = [

  // ADD ANOTHER PROJECT

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
    title: "Employee Profile Generator",
    linkGithub: "https://github.com/missjody/Developer-Profile-Generator",
    imgSrc: "./images/profilegen.jpg",
    description: "Using a NodeJS interface to create a PDF of the information provided from user's information on GitHub."
  },
  {
    title: "Password Generator",
    linkDeployed: "https://missjody.github.io/Random-Password-Generator/",
    linkGithub: "https://github.com/missjody/Random-Password-Generator",
    imgSrc: "./images/pwGen.jpg",
    description: ""
  },
  {
    title: "Streamer",
    linkDeployed: "https://infinite-cliffs-65236.herokuapp.com/",
    linkGithub: "https://github.com/kacox1251/Streamer",
    imgSrc: "./images/streamer.jpg",
    description: "For our second group project we created a password protected connection for a database that stored what movies and tv shows are on your watch list."
  },
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
