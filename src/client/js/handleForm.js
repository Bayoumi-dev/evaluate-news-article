import isValidUrl from "./isValidUrl";
import analysisResult from "./analysisResult";
import { ErrorMessage } from "./components";

const form = document.getElementById("form");
const articleUrl = document.getElementById("article-url");
const error = document.getElementById("error");

const handleSubmit = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = articleUrl.value.trim();
    const checkUrl = isValidUrl(url);

    // Check the URL is valid and tell the user when not valid
    if (typeof checkUrl === "string") error.innerHTML = ErrorMessage(checkUrl);
    else {
      analysisResult(url);
      error.innerHTML = "";
    }
  });
};

export default handleSubmit;
