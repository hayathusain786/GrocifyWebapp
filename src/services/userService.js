import axios from "axios";
axios.defaults.withCredentials = true;

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const GetShippingAddress = async () => {
  const res = await axios.get(`${API_BASE}/api/User/GetShippingAddress`);
  return res.data;
};

export const AddShippingAddress = async (data) => {
  const res = await axios.post(`${API_BASE}/api/User/AddShippingAddress`, data);
  return res;
};
