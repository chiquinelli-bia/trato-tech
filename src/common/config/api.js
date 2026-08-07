import axios from "axios";

const instance = axios.create({
  baseURL: "https://6a69f5f4b2789286ad713aa0.mockapi.io",
});

export default instance;
