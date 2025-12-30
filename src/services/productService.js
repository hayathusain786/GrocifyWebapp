import api from "./axiosInstance";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const AddProducts = async (data) => {
  const res = await api.post("/api/Product/AddProduct", data);
  return res;
};

export const GetProductList = async () => {
  const res = await api.get("/api/Product/GetProducts");
  const produtcs = res.data.map((product) => ({
    ...product,
    imageUrl: `${API_BASE}/${product.imageUrl?.replace(/^\/+/, "")}`,
  }));
  return produtcs;
};

export const GetMyProductList = async () => {
  const res = await api.get("/api/Product/GetMyProducts");
  const produtcs = res.data.map((product) => ({
    ...product,
    imageUrl: `${API_BASE}/${product.imageUrl?.replace(/^\/+/, "")}`,
  }));
  return produtcs;
};

export const GetProductById = async (id) => {
  const res = await api.get(`/api/Product/GetProductById?id=${id}`);
  const product = {
    ...res.data,
    imageUrl: `${API_BASE}/${res.data.imageUrl?.replace(/^\/+/, "")}`,
  };
  return product;
};

export const UpdateProduct = async (id, data) => {
  const res = await api.post(`/api/Product/UpdateProduct?id=${id}`, data);
  return res;
};

export const DeleteProduct = async (id) => {
  const res = await api.patch(`/api/Product/DeleteProduct/${id}`);
  return res;
};

export const AddDiscount = async (data) => {
  const res = await api.post("/api/Product/AddDiscount", data);
  return res;
};

export const GetDiscountList = async () => {
  const res = await api.get("/api/Product/GetDiscountList");
  return res.data;
};

export const UpdateDiscount = async (id, data) => {
  const res = await api.put(`/api/Product/UpdateDiscount/${id}`, data);
  return res;
};
