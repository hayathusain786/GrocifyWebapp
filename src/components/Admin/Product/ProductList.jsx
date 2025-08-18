import React, { useEffect, useState } from "react";
import { TiPencil, TiTrash } from "react-icons/ti";
import { GetProductList } from "../../../services/productService";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await GetProductList();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <section>
      <div>
        <div className="form-title">
          <h2>Product List</h2>
        </div>

        <div>
          <table className="table-responsive">
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
                    <span
                      className="cursor-pointer text-primary group"
                    >
                      <TiPencil className="group-hover:scale-[105%] group-hover:text-a-dark transition-all duration-300" />
                    </span>
                    |
                    <span
                      className="cursor-pointer text-red-400 group"
                    >
                      <TiTrash className="group-hover:scale-[105%] group-hover:text-a-dark transition-all duration-300" />
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
