const mongoose = require("mongoose");
const db = require("../models");
const projects = require("./projects.json")
// This file empties the Posts collection and inserts the project below

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

const newProject1 = {
  "title": "Diabetes Tester",
  "summary": "A web application using Python Flask backend and Streamlit frontend. This application uses machine learning and to predict the likelyhood of someone having diabetes. Additional information is also presented, like the data used to train the model, and using the charts provided correlations can be made between diabetes and biological characteristics (such as more pregnancies correlate with a higher chance of developing/having diabetes).",
  "image_path": "./img/diabetester.gif",
  "image_icon": "./img/cd-icon-movie.svg",
  "github_url" : "https://github.com/eddyangang/ML_Diabetes",
  "deployed_url" : "https://diabetester.herokuapp.com/",
  "date": new Date()
}

db.Projects.create(newProject1)

const newProject2 = {
  "title": "Easy Reads",
  "summary": "A fullstack web application using Python Flask for backend and React frontend. This application uses Natural Learning toolkit and newspaper (python exclusive platforms) to summarize news articles. By simply entering the URL of the news article, we can extract key words from the original article to produce a concise summary of the article. It is not perfect, but it exciting to try.",
  "image_path": "./img/article.gif",
  "image_icon": "./img/cd-icon-movie.svg",
  "github_url" : "https://github.com/eddyangang/article_summary",
  "deployed_url" : "https://easyreading.herokuapp.com/",
  "date": new Date()
}

db.Projects.create(newProject2)