import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const GetCategories = async () => {
  const res = await axios.get(`${API_BASE}/api/Master/GetCategories`);

  const categories = res.data.map((cat) => ({
    ...cat,
    imageUrl: `${API_BASE}/${cat.imageUrl?.replace(/^\/+/, "")}`,
  }));
  return categories;
};

export const AddCategory = async (data) => {
  const res = await axios.post(`${API_BASE}/api/Master/AddCategory`, data);
  return res;
};

export const UpdateCategory = async (id, data) => {
  const res = await axios.put(
    `${API_BASE}/api/Master/UpdateCategory/${id}`,
    data
  );
  return res;
};

export const DeleteCategory=async (id)=>{
    const res=await axios.patch(`${API_BASE}/api/Master/DeleteCategory/${id}`);
    return res;
}

// Unit Master APIs

export const GetUnits = async () => {
  const res = await axios.get(`${API_BASE}/api/Master/GetUnits`);
  return res.data;
};

export const AddUnit = async (data) => {
    const res=await axios.post(`${API_BASE}/api/Master/AddUnit`,data);
    return res;
};

export const UpdateUnit=async (id,data)=>{
    const res=await axios.put(`${API_BASE}/api/Master/UpdateUnit/${id}`,data);
    return res;
}

export const DeleteUnit =async (id)=>{
    const res=await axios.patch(`${API_BASE}/api/Master/DeleteUnit/${id}`);
    return res;
}