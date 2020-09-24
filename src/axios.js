import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-d140e.cloudfunctions.net/api", // the API URL (cloud function)
  // http://localhost:5001/clone-d140e/us-central1/api
});

export default instance;
