import React, { useEffect, useState } from "react";
import {
  AddCategory,
  DeleteCategory,
  GetCategories,
  UpdateCategory,
} from "../../../services/masterService";
import { TiPencil, TiTrash } from "react-icons/ti";

import { toast } from "react-toastify";

const Category = () => {
  const data = {
    Id: "",
    Name: "",
    Description: "",
    UploadImage: null,
  };

  const [refetch, setRefetch] = useState(false);
  const [categories, setCategories] = useState([]);
  const [inputData, setInputData] = useState(data);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await GetCategories();
      setCategories(data);
      console.log("kk");
    };
    fetchCategories();
  }, [refetch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let resp = false;
    const formData = new FormData();
    formData.append("Id", inputData.Id);
    formData.append("Name", inputData.Name);
    formData.append("Description", inputData.Description);
    formData.append("Image", inputData.UploadImage);

    if (inputData.Id != "") {
      resp = await UpdateCategory(inputData.Id, formData);
    } else {
      resp = await AddCategory(formData);
    }
    if (resp.status == 201) {
      // alert("Category Added Succeccfully..");
      toast.success("Category Added Succeccfully..");
      setInputData(data);
    } else if (resp.status == 200) {
      // alert('Category Updated Successfully..')
      toast.success("Category Updated Successfully..");
      setInputData(data);
    } else {
      toast.warn("Something went wrong");
    }

    setRefetch(!refetch);
  };

  const handleEdit = (Id) => {
    const categor = categories.find((cat) => cat.id === Id);
    setInputData({
      Id: Id,
      Name: categor.name,
      Description: categor.description,
    });

    //  Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {

    const confirmed = confirm('Are you sure to remove this record!');
    if(!confirmed) return;

    const result = await DeleteCategory(id);
    if (result.status == 200) {
      toast.info("Category Deleted Successfully");
    } else {
      toast.warn("Something went wrong !!");
    }
    setRefetch(!refetch);
  };

  return (
    <section>
      {/* form section  */}
      <div>
        <div className="form-title">
          <h2>Category</h2>
        </div>
        <div className="input-group">
          {/* Id  */}

          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="Name"
            id="Name"
            className="form-control"
            value={inputData.Name}
            onChange={(e) =>
              setInputData({ ...inputData, Name: e.target.value })
            }
            autoComplete="off"
          />
        </div>
        <div className="input-group">
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            name="Description"
            id="Description"
            className="form-control"
            value={inputData.Description}
            onChange={(e) =>
              setInputData({ ...inputData, Description: e.target.value })
            }
            autoComplete="off"
          />
        </div>
        <div className="input-group">
          <label htmlFor="UploadImage">Upload Image</label>
          <input
            type="file"
            name="UploadImage"
            id="UploadImage"
            className="form-control-file"
            onChange={(e) =>
              setInputData({ ...inputData, UploadImage: e.target.files[0] })
            }
            autoComplete="off"
          />
        </div>
        <div className="my-10">
          <button className="btn-primary" onClick={handleSubmit}>
            Submit
          </button>
          <button
            className="mx-3 btn-danger"
            onClick={() => setInputData(data)}
          >
            Clear
          </button>
        </div>
      </div>

      {/* List section  */}
      <div className="my-10">
        <div className="w-full">
          <table className="table-responsive">
            <thead>
              <tr className="text-left">
                <th>Sr.No.</th>
                <th>Name</th>
                <th>Description</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, index) => (
                <tr className="text-left" key={index}>
                  <td>{index + 1}</td>
                  <td>{cat.name}</td>
                  <td>{cat.description} </td>
                  <td>
                    <img src={cat.imageUrl} alt="Cat" width="50" />{" "}
                  </td>
                  <td>
                    <span
                      className="cursor-pointer text-primary group"
                      onClick={() => handleEdit(cat.id)}
                    >
                      <TiPencil className="group-hover:scale-[105%] group-hover:text-a-dark transition-all duration-300" />
                    </span>
                    |
                    <span
                      className="cursor-pointer text-red-400 group"
                      onClick={() => handleDelete(cat.id)}
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

export default Category;
