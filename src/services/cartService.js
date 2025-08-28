import axios from "axios";
axios.defaults.withCredentials=true;

const API_BASE=import.meta.env.VITE_API_BASE_URL;

export const getCart=async()=>{
    const res=await axios.get(`${API_BASE}/api/Cart/GetCart`);
    const cartItems=res.data.map( (item)=>({
        ...item,total:item.quantity*item.price,productImage:`${API_BASE}/${item.productImage?.replace(/^\/+/, "")}`
    }));
    return cartItems;
}

export const addCart=async (productId)=>{
    const res=await axios.post(`${API_BASE}/api/Cart/AddCart`,{productId});
    return res;
}

export const increaseQuantity=async(productId)=>{
    const res=await axios.post(`${API_BASE}/api/Cart/QuantityIncrease`,{productId});
    return res;
}

export const decreaseQuantity=async(productId)=>{
    const res=await axios.post(`${API_BASE}/api/Cart/QuantityDecrease`,{productId});
    return res;
}

export const removeItem=async(productId)=>{
    const res=await axios.post(`${API_BASE}/api/Cart/RemoveItem`,{productId});
    return res;
}
