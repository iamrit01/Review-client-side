import axios from "axios";

const api = axios.create({
  baseURL: "http://8000/api/v1/users",
});

export const signup = (payload) => api.post("/create", payload);

const apis = {
  signup,
};

export default apis;
