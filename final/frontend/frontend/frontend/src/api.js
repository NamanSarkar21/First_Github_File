import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:5000" });

export const signup = (data) => API.post("/signup", data);
export const login = (data) => API.post("/login", data);
export const forecast = (data) => API.post("/forecast", data);
export const risk = (data) => API.post("/risk", data);
export const summarize = (data) => API.post("/summarize", data);
