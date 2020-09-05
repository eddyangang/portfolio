const mongoose = require("mongoose");
const db = require("../models");
const projects = require("./projects.json")
// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio_projects");


db.Projects.remove({})
  .then(() => db.Projects.collection.insertMany(projects))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  const newProject = {
    "title": "Quizzly",
    "summary": "A full-stack web application intended to gamify studying where friends can play a real-time studying game and communicate through a chat. This application utilizes socket.io to create a game server such that every client in the same room can share the same view and the host as the ability to add/delete/edit flashcards to play the game.",
    "image_path": "./img/quizzly.gif",
    "image_icon": "./img/cd-icon-movie.svg",
    "github_url" : "https://github.com/eddyangang/Quizzly",
    "deployed_url" : "https://enigmatic-springs-12174.herokuapp.com/",
    "date": new Date()
  }
db.Projects.create(newProject)