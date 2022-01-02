import { NoContent, Loading, AnalysisComponent } from "./components";
const resultSection = document.getElementById("result-sec");

const analysisResult = async (url) => {
  // Loading indicator to give the user an indication
  resultSection.innerHTML = Loading;

  // Fetch sentiment analysis
  const response = await fetch("http://localhost:3001/sentiment-analysis", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ payload: url }),
  });

  try {
    const data = await response.json();
    resultSection.innerHTML =
      // Check whether there is content or not
      data.status.code !== "0"
        ? NoContent(data.status.msg)
        : AnalysisComponent(data);
  } catch (error) {
    console.log("error", error);
  }
};

export default analysisResult;
