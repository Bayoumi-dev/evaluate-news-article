// Setup empty JS object to act as endpoint
let projectData = {};

const express = require("express");
const cors = require("cors");
const mockAPI = require("./mockAPI.js");
const handleDataRequest = require("./dataRequest.js");

// Start up an instance of app
const app = express();

/* Middleware */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Cors for cross origin allowance
app.use(cors());

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
const port = 3001;
app.listen(port, function () {
  console.log(`Listening on port: ${port}`);
});
