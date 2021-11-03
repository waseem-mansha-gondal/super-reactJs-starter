import axios from "axios";
import { API_URL } from "./constants";

export default axios.create({
  baseURL: API_URL,
  responseType: "json",
  headers: { "Content-type": "application/json" },
});
