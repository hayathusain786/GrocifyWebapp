import api from "./axiosInstance";

export const PlaceOrder = async (data) => {
  const res = await api.post("/api/Order/PlaceOrder", data);
  return res;
};

export const GetMyOrders=async ()=>{
    const res=await api.get("/api/Order/GetMyOrders");
    return res.data;
}