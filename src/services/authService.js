//import axios from "axios";

import api from "./axiosInstance";

//const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const adminlogin = async (data) => {
  const res = await api.post("/api/Auth/AdminLogin", data);

  return res;
};
export const userlogin = async (data) => {
  const res = await api.post("/api/Auth/UserLogin", data);

  return res;
};
export const logout = async () => {
  const res = await api.post("/api/Auth/Logout");
  return res;
};
