import React, { useEffect, useState } from "react";
import { TiPencil, TiTrash } from "react-icons/ti";
import {
  DeleteProduct,
  GetMyProductList,
} from "../../../services/productService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await GetMyProductList();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure to remove this item!");
    if (!confirmed) return;
    try {
      const res = await DeleteProduct(id);
      if (res.status == 200) {
        toast.success("Product Delete Successfully.");
        setProducts(products.filter((product) => product.id != id));
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <section>
      <div>
        <div className="form-title">
          <h2>Product List</h2>
        </div>

        <div className="w-full pb-4 overflow-x-scroll custom-scrollbar-2">
          <table className="table-responsive-action">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Unit</th>
                <th>Image</th>
                <th>Price</th>
                <th>Offer Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.categoryName}</td>
                  <td>{product.unitName}</td>
                  <td>
                    <img
                      src={product.imageUrl}
                      alt="Product Image"
                      width={30}
                    />
                  </td>
                  <td>{product.price}</td>
                  <td>{product.offerPrice}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <Link
                      to={`/admin/add-product?id=${product.id}`}
                      className="text-primary"
                    >
                      <TiPencil/>
                    </Link>
                    |
                    <span
                      className="text-red-400"
                      onClick={() => handleDelete(product.id)}
                    >
                      <TiTrash/>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
