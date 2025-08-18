import React, { useEffect, useState } from "react";
import { AddProducts } from "../../../services/productService";
import { toast } from "react-toastify";
import { GetCategories, GetUnits } from "../../../services/masterService";

const AddProduct = () => {
  const data = {
    name: "",
    description: "",
    uploadImage: null,
    categoryId: "",
    unitId: "",
    quantity: "",
    price: "",
    offerPrice: "",
  };

  const [refetch, setRefetch] = useState(false);
  const [inputData, setInputData] = useState(data);
  const [categories, setCategories] = useState([]);
  const [units, setUnits] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await GetCategories();
      setCategories(data);
    };
    const fetchUnits=async ()=>{
        const data=await GetUnits();
        setUnits(data);
    }
    fetchCategories();
    fetchUnits();
  }, [refetch]);

  const formData = new FormData();
  formData.append("name", inputData.name);
  formData.append("description", inputData.description);
  formData.append("uploadImage", inputData.uploadImage);
  formData.append("categoryId", inputData.categoryId);
  formData.append("unitId", inputData.unitId);
  formData.append("quantity", inputData.quantity);
  formData.append("price", inputData.price);
  formData.append("offerPrice", inputData.offerPrice);

  const handleSubmit = async () => {
    const result = await AddProducts(formData);
    if (result.status == 201) {
      toast.success("Product Add Successfully");
    } else {
      toast.warn("Something went wrong !");
    }
    setRefetch(!refetch);
    setInputData(data);
  };

  return (
    <section>
      <div>
        <div className="form-title">
          <h2>Add Product</h2>
        </div>
        <div className="input-group">
          {/* Id  */}

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            autoComplete="off"
            value={inputData.name}
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            className="form-control"
            autoComplete="off"
            value={inputData.description}
            onChange={(e) =>
              setInputData({ ...inputData, description: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="uploadImage">Upload Image</label>
          <input
            type="file"
            name="uploadImage"
            id="uploadImage"
            className="form-control-file"
            autoComplete="off"
            onChange={(e) =>
              setInputData({ ...inputData, uploadImage: e.target.files[0] })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="categoryId">Category</label>
          <select
            name="categoryId"
            id="categoryId"
            className="form-select"
            selected={inputData.categoryId}
            value={inputData.categoryId}
            onChange={(e) =>
              setInputData({ ...inputData, categoryId: e.target.value })
            }
          >
            <option value="">--Select Category--</option>
            {categories.map( (cat)=>(
                 <option value={cat.id} key={cat.id}>{cat.name}</option>
            ) )}
           
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="unitId">Unit</label>
          <select
            name="unitId"
            id="unitId"
            className="form-select"
            selected={inputData.unitId}
            value={inputData.unitId}
            onChange={(e) =>
              setInputData({ ...inputData, unitId: e.target.value })
            }
          >
            <option value="">--Select Unit--</option>
           {units.map( (unit)=>(
                 <option value={unit.id} key={unit.id}>{unit.name}</option>
            ) )}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="form-control"
            autoComplete="off"
            value={inputData.quantity}
            onChange={(e) =>
              setInputData({ ...inputData, quantity: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            className="form-control"
            autoComplete="off"
            value={inputData.price}
            onChange={(e) =>
              setInputData({ ...inputData, price: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="offerPrice">offer Price</label>
          <input
            type="number"
            name="offerPrice"
            id="offerPrice"
            className="form-control"
            autoComplete="off"
            value={inputData.offerPrice}
            onChange={(e) =>
              setInputData({ ...inputData, offerPrice: e.target.value })
            }
          />
        </div>
        <div className="my-10">
          <button className="btn-primary" onClick={handleSubmit}>
            Submit
          </button>
          <button className="mx-3 btn-danger">Clear</button>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
