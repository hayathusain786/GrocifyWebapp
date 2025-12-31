import api from "./axiosInstance";

//const API_BASE=import.meta.env.VITE_API_BASE_URL;

export const getCart=async()=>{
    const res=await api.get("/api/Cart/GetCart");
    const cartItems=res.data.map( (item)=>({
        ...item,total:item.quantity*item.price,productImage:item.productImage
    }));
    return cartItems;
}

export const addCart=async (productId)=>{
    const res=await api.post("/api/Cart/AddCart",{productId});
    return res;
}

export const increaseQuantity=async(productId)=>{
    const res=await api.post("/api/Cart/QuantityIncrease",{productId});
    return res;
}

export const decreaseQuantity=async(productId)=>{
    const res=await api.post("/api/Cart/QuantityDecrease",{productId});
    return res;
}

export const removeItem=async(productId)=>{
    const res=await api.post("/api/Cart/RemoveItem",{productId});
    return res;
}
