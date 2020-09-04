const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 8080;
const app = express();

// Parse application body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(routes);
app.use(cors)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio_projects");


app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});