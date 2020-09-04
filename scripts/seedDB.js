const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio_projects");

const projectSeed = [{"title":"Micromouse", "summary":"Designed and built a micromouse vehicle. Programmed  PID controllers on an arduino nano to allow the vehicle to adjust for deviations when cruising straight or turning. Used a PID controller to allow the vehicle to follow a wall. Used Flood-fill algorithm to find best path within a maze.", "image_path":"./img/mouse2.jpg", "image_icon":"./img/cd-icon-picture.svg", "github_url":"", "deployed_url":"", "date":"2019-09-01 07:00:00", "createdAt":"2020-08-05 09:34:04", "updatedAt":"2020-08-05 09:34:04"},
{"title":"Crazyflie 2.0 Drone", "summary":"Incorporated a cascaded feedback controller to allow a crazyflie quadcopter to hover at steady-state. Developed vertical, horizontal, and altitude estimators using prediction and correction model to reduce noise from measurements. Developed a mathematical model of the mixer matrix to determine PWM outputs of each motor for given commands.", "image_path":"./img/drone.jpg", "image_icon":"./img/cd-icon-picture.svg", "github_url":"", "deployed_url":"", "date":"2019-10-01 07:00:00", "createdAt":"2020-08-05 09:34:04", "updatedAt":"2020-08-05 09:34:04"},
{"title":"X-Ray Rotation Bed", "summary":"Designed the state machine architecture of a motion controller for a seven axis tomography system on LabView, integrated an intuitive UI for controlling each axis, and established serial communication via ethernet to the motion controller. Kept daily progress with a research journal.", "image_path":"./img/rotationbed.jpg", "image_icon":"./img/cd-icon-picture.svg", "github_url":"", "deployed_url":"", "date":"2019-06-01 07:00:00", "createdAt":"2020-08-05 09:34:04", "updatedAt":"2020-08-05 09:34:04"},
{"title":"HoverBoard", "summary":"Designed a real-time, multitasking model of hovercraft using three directional quadcopter fans, and one lift fan on Solidworks. Established the state machine architecture and an intuitive GUI that allows for mouse actions and directional buttons on the keyboard to control hovercraft.", "image_path":"./img/hover.jpg", "image_icon":"./img/cd-icon-picture.svg", "github_url":"", "deployed_url":"", "date":"2019-05-01 07:00:00", "createdAt":"2020-08-05 09:34:04", "updatedAt":"2020-08-05 09:34:04"},
{"title":"2D Printer", "summary":"Built a real-time 2D printer by developing a model on Solidworks and 3D printing components to build a prototype. Established serial communication using PSOC series micro-controller and used LabView to track coordinates of the mouse to then translate controls for each motor.", "image_path":"./img/2dprinter.jpg", "image_icon":"./img/cd-icon-picture.svg", "github_url":"", "deployed_url":"", "date":"2018-12-01 08:00:00", "createdAt":"2020-08-05 09:34:04", "updatedAt":"2020-08-05 09:34:04"},
{"title":"iDentical Intern", "summary":"Manufactured teeth implants by 3D scanning teeth, developing CAD models of teeth implants, and using subtractive manufacturing techniques to produce titanium teeth replica with millimeter tolerance. Performed mechanical bench testing of retention features on teeth implants.", "image_path":"./img/pullout.jpg", "image_icon":"./img/cd-icon-picture.svg", "github_url":"", "deployed_url":"", "date":"2019-11-01 07:00:00", "createdAt":"2020-08-05 09:34:04", "updatedAt":"2020-08-05 09:34:04"},
{"title":"Kiwibot Intern", "summary":"Kiwibot is a startup food delivery service that focuses on delivering food (or any physical items) in a cost effective way, while leaving no carbon footprint. As a inter, I assisted in designing the chassis system of the next generation of Kiwibots by using four motors to allow stationary rotation. I also helped debug, troubleshoot, repair and maintain KiwiBots and Kiwi campus\u2019s hardware.", "image_path":"./img/kiwi.jpg", "image_icon":"./img/cd-icon-picture.svg", "github_url":"", "deployed_url":"", "date":"2019-07-01 07:00:00", "createdAt":"2020-08-05 09:34:04", "updatedAt":"2020-08-05 09:34:04"},
{"title":"Weather App", "summary":"A mobile responsive weather application allowing users to search for cities and obtain weather forecast using three different HTTP request from OpenWeatherMap API.", "image_path":"./img/weatherApp.gif", "image_icon":"./img/cd-icon-movie.svg", "github_url":"https://github.com/eddyangang/weather-station", "deployed_url":"https://eddyangang.github.io/weather-station/", "date":"2020-07-01 07:00:00", "createdAt":"2020-08-05 09:34:04", "updatedAt":"2020-08-05 09:34:04"},
{"title":"Budget Buddies", "summary":"A fullstack financial planning application that can help you be conscience of your day to day purchases.", "image_path":"./img/budgetbuddy.gif", "image_icon":"./img/cd-icon-movie.svg", "github_url":"https://github.com/eddyangang/budget-buddy", "deployed_url":"https://agile-retreat-52176.herokuapp.com/", "date":"2020-08-01 07:00:00", "createdAt":"2020-08-05 09:34:04", "updatedAt":"2020-08-05 09:34:04"},
{"title":"Employee Tracker", "summary":"A command line application allows the user to quickly add, view, and update employees, roles, and departments within a company; and have the data stored in a SQL database.", "image_path":"./img/preview.gif", "image_icon":"./img/cd-icon-movie.svg", "github_url":"https://github.com/eddyangang/employeeTracker", "deployed_url":"", "date":"2020-07-20 07:00:00", "createdAt":"2020-08-05 09:34:04", "updatedAt":"2020-08-05 09:34:04"}];

db.Projects.remove({})
  .then(() => db.Projects.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });