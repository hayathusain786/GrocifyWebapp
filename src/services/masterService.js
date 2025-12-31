//import axios from "axios";
import api from "./axiosInstance";
//axios.defaults.withCredentials=true;
//const API_BASE = import.meta.env.VITE_API_BASE_URL;

//const token = localStorage.getItem("token");

export const GetCategories = async () => {
  const res = await api.get("/api/Master/GetCategories");

  const categories = res.data.map((cat) => ({
    ...cat,
    imageUrl: cat.imageUrl,
  }));
  return categories;
};

export const AddCategory = async (data) => {
  const res = await api.post("/api/Master/AddCategory", data);
  return res;
};

export const UpdateCategory = async (id, data) => {
  const res = await api.put(`/api/Master/UpdateCategory/${id}`, data);
  return res;
};

export const DeleteCategory = async (id) => {
  const res = await api.patch(`/api/Master/DeleteCategory/${id}`);
  return res;
};

// Unit Master APIs

export const GetUnits = async () => {
  const res = await api.get("/api/Master/GetUnits");
  return res.data;
};

export const AddUnit = async (data) => {
  const res = await api.post("/api/Master/AddUnit", data);
  return res;
};

export const UpdateUnit = async (id, data) => {
  const res = await api.put(`/api/Master/UpdateUnit/${id}`, data);
  return res;
};

export const DeleteUnit = async (id) => {
  const res = await api.patch(`/api/Master/DeleteUnit/${id}`);
  return res;
};
