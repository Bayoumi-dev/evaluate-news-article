// Setup empty JS object to act as endpoint
let projectData = {};

const express = require("express");
const cors = require("cors");
const mockAPI = require("./mockAPI.js");
const handleDataRequest = require("./dataRequest.js");

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("../../webpack.prod");

// Start up an instance of app
const app = express();

/* Middleware */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Cors for cross origin allowance
app.use(cors());

// Initialize the static main file
// app.use(express.static("dist"));

// Express use the webpack-dev-middleware and use the webpack.prod.js
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler));

// Mock API route (just for test)
app.get("/test", function (_, res) {
  projectData = mockAPI;
  res.send(projectData);
});

app.post("/sentiment-analysis", async function (req, res) {
  const data = await handleDataRequest(req.body.payload);
  projectData = data;
  res.send(projectData);
});

// Spin up the server
const port = 30031;
app.listen(port, function () {
  console.log(`Listening on port: ${port}`);
});
