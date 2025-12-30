import api from "./axiosInstance";

export const GetShippingAddress = async () => {
  const res = await api.get("/api/User/GetShippingAddress");
  return res.data;
};

export const AddShippingAddress = async (data) => {
  const res = await api.post("/api/User/AddShippingAddress", data);
  return res;
};

export const SendFeedback = async (data) => {
  const res = await api.post("/api/User/SendFeedback", data);
  return res;
};
