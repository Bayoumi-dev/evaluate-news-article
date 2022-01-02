import "./styles/index.scss";
import app from "./js/handleForm";
app();

/**
 * Check that service workers are supported
 * Note: it is supported in production mode only
 */
 if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("service-worker.js")
        .then(() => {
          console.log("Service Workers: Registered");
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
  