// Function to check whether a given string is a valid URL or not 
// This is an Effortless function but serve the purpose :)
const isUrl = (str) => /(\w\.[A-z]{2,12})/.test(str);

const isValidUrl = (url) =>
  // Check the URL field
  !url ? "Field is empty" : !isUrl(url) ? "Invalid URL" : true;

export default isValidUrl;
