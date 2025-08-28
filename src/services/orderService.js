import axios from "axios";
axios.defaults.withCredentials = true;

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const PlaceOrder = async (data) => {
  const res = await axios.post(`${API_BASE}/api/Order/PlaceOrder`, data);
  return res;
};

export const GetMyOrders=async ()=>{
    const res=await axios.get(`${API_BASE}/api/Order/GetMyOrders`);
    return res.data;
}