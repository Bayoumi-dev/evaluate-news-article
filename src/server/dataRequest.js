require("dotenv").config();
const fetch = require("node-fetch");

const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
// Personal API Key for meaningcloud API
const apiKey = process.env.API_KEY;

const handleDataRequest = async (articleUrl) => {
  const url = `${baseURL}?key=${apiKey}&url=${articleUrl}&lang=en`;
  const response = await fetch(url);

  try {
    let data = await response.json();
    // Send specific data to the client
    return (data = {
      status: data.status,
      model: data.model,
      agreement: data.agreement,
      subjectivity: data.subjectivity,
      confidence: data.confidence,
      irony: data.irony,
      score_tag: data.score_tag,
    });

  } catch (error) {
    console.log("error", error);
  }
};

module.exports = handleDataRequest;
