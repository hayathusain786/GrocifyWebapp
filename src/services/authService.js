import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const adminlogin = async (data) => {
  const res = await axios.post(`${API_BASE}/api/Auth/AdminLogin`, data,{withCredentials:true});

  return res;
};
export const userlogin = async (data) => {
  const res = await axios.post(`${API_BASE}/api/Auth/UserLogin`, data,{withCredentials:true});

  return res;
};
export const logout = async () => {
  const res = await axios.post(`${API_BASE}/api/Auth/Logout`);
  return res;
};
