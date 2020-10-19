import axios from "axios";

const instance = axios.create({
  baseURL: "https://wa-clone-9316.herokuapp.com",
});

export default instance;
