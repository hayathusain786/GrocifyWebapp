import React, { useEffect, useState } from "react";
import { GetCategories } from "../../../services/masterService";
import {
  AddDiscount,
  GetDiscountList,
  UpdateDiscount,
} from "../../../services/productService";
import { toast } from "react-toastify";
import { TiPencil, TiTrash } from "react-icons/ti";

const Discount = () => {
  const data = {
    id: "",
    name: "",
    description: "",
    percentage: "",
    categoryId: "",
    fromDate: "",
    toDate: "",
  };

  const [categories, setCategories] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [inputData, setInputData] = useState(data);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await GetCategories();
      setCategories(data);
    };

    const fetchDiscounts = async () => {
      const data = await GetDiscountList();
      setDiscounts(data);
    };

    fetchCategories();
    fetchDiscounts();
  }, [inputData]);

  const handleSubmit = async () => {
    try {
      debugger;
      let res = null;
      if (inputData.id != "") {
        res = await UpdateDiscount(inputData.id, inputData);
      } else {
        res = await AddDiscount(inputData);
      }

      if (res.status == 201) {
        toast.success("Discount Added Successfully.");
      } else if (res.status == 200) {
        toast.success("Discount Update Successfully.");
      }
      setInputData(data);
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  const handleEdit = (Id) => {
    const discount = discounts.find((dis) => dis.id === Id);
    console.log(discount);
    setInputData({
      id: discount.id,
      name: discount.name,
      description: discount.description,
      percentage: discount.percentage,
      categoryId: discount.categoryId,
      fromDate: new Date(discount.fromDate).toLocaleDateString("en-CA"),
      toDate: new Date(discount.toDate).toLocaleDateString("en-CA"),
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section>
      {/* form section  */}
      <div>
        <div className="form-title">
          <h2>Discount</h2>
        </div>
        <div className="input-group">
          {/* Id  */}

          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="Name"
            id="Name"
            className="form-control"
            autoComplete="off"
            value={inputData.name}
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            name="Description"
            id="Description"
            className="form-control"
            autoComplete="off"
            value={inputData.description}
            onChange={(e) =>
              setInputData({ ...inputData, description: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="category">Category</label>
          <select
            className="form-select"
            name="category"
            id="category"
            value={inputData.categoryId}
            onChange={(e) =>
              setInputData({ ...inputData, categoryId: e.target.value })
            }
          >
            <option value="">--Select Category--</option>
            {categories.map((cat) => (
              <option value={cat.id} key={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="percentage">Percentage</label>
          <input
            type="number"
            name="percentage"
            id="percentage"
            className="form-control"
            autoComplete="off"
            value={inputData.percentage}
            onChange={(e) =>
              setInputData({ ...inputData, percentage: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="fromDate">From Date</label>
          <input
            type="date"
            name="fromDate"
            id="fromDate"
            className="form-control"
            autoComplete="off"
            value={inputData.fromDate}
            onChange={(e) =>
              setInputData({ ...inputData, fromDate: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="toDate">To Date</label>
          <input
            type="date"
            name="toDate"
            id="toDate"
            className="form-control"
            autoComplete="off"
            value={inputData.toDate}
            onChange={(e) =>
              setInputData({ ...inputData, toDate: e.target.value })
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

      {/* List section  */}
      <div className="my-10">
        <div className="w-full overflow-x-scroll custom-scrollbar-2">
          <table className="table-responsive-action">
            <thead>
              <tr className="text-left">
                <th>Sr.No.</th>
                <th>Name</th>
                <th>Description</th>
                <th>Percentage</th>
                <th>Category</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {discounts.map((discount, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{discount.name}</td>
                  <td>{discount.description}</td>
                  <td>{discount.percentage}</td>
                  <td>{discount.categoryName}</td>
                  <td>{new Date(discount.fromDate).toLocaleDateString()}</td>
                  <td>{new Date(discount.toDate).toLocaleDateString()}</td>
                  <td>
                    <span
                      className="text-primary"
                      onClick={() => handleEdit(discount.id)}
                    >
                      <TiPencil />
                    </span>
                    |
                    <span className="text-red-400">
                      <TiTrash />
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

export default Discount;
