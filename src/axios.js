import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  //   baseURL: "http://localhost:5001/clone-a5e8b/us-central1/api",  // will work for localhost by command -> firebase emulators:start
  baseURL: "https://us-central1-clone-a5e8b.cloudfunctions.net/api",

  // "",
});

export default instance;
