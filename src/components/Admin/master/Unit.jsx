import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AddUnit, DeleteUnit, GetUnits, UpdateUnit } from "../../../services/masterService";
import { TiPencil, TiTrash } from "react-icons/ti";


const Unit = () => {
  
  const data={
    id:"",
    name:"",
    description:""
  }
  const [refetch,setRefetch]=useState(false);
  const [inputData,setInputData]=useState(data);
  const [units,setUnits]=useState([]);

  useEffect( ()=>{
    const fetchUnits=async()=>{
      const data = await GetUnits();
      setUnits(data);
    }
    fetchUnits();
  },[refetch] );

  const handleSubmit =async(e)=>{
    e.preventDefault();

    let result=false;

    if(inputData.id==""){
      result=await AddUnit(inputData);
    }
    else{
      result=await UpdateUnit(inputData.id,inputData);
    }
    if(result.status==201){
      toast.success('Unit Added Successfully..')
    }
    else if(result.status==200){
      toast.info('Unit update successfully..')
    }
    else{
      toast.warn('Something went wrong!!');
    }
    setRefetch(!refetch);
    setInputData(data);
  }

  const handleEdit=(id)=>{
      const unit= units.find( (u)=>u.id===id );
      setInputData({
        id:unit.id,
        name:unit.name,
        description:unit.description
      });

      window.scrollTo({top:0,behavior:"smooth"})
  }

  const handleDelete=async (id)=>{
    const confirmed = confirm('Are you sure to remove this record!');
    if(!confirmed) return;
    const result=await DeleteUnit(id);
    if(result.status==200){
      toast.info('Unit deleted successfully.');
    }
    else{
      toast.warn('Something went wrong !!');
    }
    setRefetch(!refetch);
  }

  return (
<section>
      {/* form section  */}
      <div>
        <div className="form-title">
          <h2>Unit</h2>
        </div>
        <div className="input-group">
          {/* Id  */}

          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="Name"
            id="Name"
            className="form-control"
            value={inputData.name}
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
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
            value={inputData.description}
            onChange={(e) =>
              setInputData({ ...inputData, description: e.target.value })
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
          <table className="table-responsive-action">
            <thead>
              <tr className="text-left">
                <th>Sr.No.</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {units.map((unit, index) => (
                <tr className="text-left" key={index}>
                  <td>{index + 1}</td>
                  <td>{unit.name}</td>
                  <td>{unit.description} </td>
                  <td>
                    <span className="text-primary" onClick={() => handleEdit(unit.id)}>
                      <TiPencil className="" />
                    </span>
                    |
                    <span className="text-red-400" onClick={()=>handleDelete(unit.id)}>
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

export default Unit;
