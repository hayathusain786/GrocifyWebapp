import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const AddProducts=async(data)=>{
    const res=await axios.post(`${API_BASE}/api/Product/AddProduct`,data);
    return res;
}

export const GetProductList=async ()=>{
    const res=await axios.get(`${API_BASE}/api/Product/GetProducts`)
    const produtcs=res.data.map( (product)=>({
        ...product,imageUrl:`${API_BASE}/${product.imageUrl?.replace(/^\/+/, "")}`
    }) )
    return produtcs;
}