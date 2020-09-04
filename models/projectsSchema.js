const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Book must have a title"
    },
    summary: {
        type: String,
        trim: true
    },
    image_path: {
        type: String,
        trim: true
    },
    image_icon: {
        type: String,
        trim: true
    },
    github_url: {
        type: String,
        trim: true
    },
    deployed_url: {
        type: String,
        trim: true
    },
    date: {
        type: Date
    }
});

const Projects = mongoose.model("Projects", projectsSchema);

module.exports = Projects;

