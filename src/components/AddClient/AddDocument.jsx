"use client";
import React, { useState } from "react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

const AddDocument = () => {
  const [dropdowns, setDropdowns] = useState([0]);

  const handleAddDropdown = () => {
    setDropdowns([...dropdowns, dropdowns.length]);
  };

  const handleRemoveDropdown = (index) => {
    const updatedDropdowns = dropdowns.filter((_, i) => i !== index);
    setDropdowns(updatedDropdowns);
  };
  return (
    <div className="w-[100%] bg-formbackgroundcolor mt-3 rounded-md shadow-md">
      <div className=" flex justify-between items-center gap-4 px-3 py-3 border-[1px] border-inputs rounded-md h-[50px]  font-bold">
        <span className="font-bold text-md text-inputbordercolor">
          Add Documents
        </span>
        <div
          onClick={handleAddDropdown}
          className="w-[12%] flex justify-evenly items-center border-[1px] py-1 rounded-lg border-formbordercolor hover:bg-buttonhover hover:text-formbackgroundcolor hover:border-0 transition-all ease-in duration-200"
        >
          <MdAddCircleOutline size={15} />
          <span className="text-sm">Add</span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center px-3 py-3 max-h-[300px] overflow-y-auto">
        {dropdowns.map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-2 py-2 gap-2 w-[100%]"
          >
            <label className="text-sm  font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Upload Document
            </label>
            <div className="grid w-[35%]  items-center gap-1.5 ">
              <input
                className="flex w-full h-[35px] rounded-md border border-blue-300 border-input bg-white text-sm text-gray-400 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium file:h-[35px]"
                type="file"
                id="picture"
              />
            </div>
            <input
              className="border-[1px] border-inputs w-[35%] h-[35px] px-2 rounded-md placeholder:text-sm placeholder:text-inputbordercolor"
              type="text"
              placeholder="Document Description"
            />
            <div
              onClick={() =>
                dropdowns.length > 1 && handleRemoveDropdown(index)
              }
              className={`w-[12%] flex justify-evenly items-center border-[1px] py-2 text-sm font-bold rounded-lg border-formbordercolor ${
                dropdowns.length > 1
                  ? "hover:bg-deletecolor hover:text-formbackgroundcolor hover:border-0 cursor-pointer transition-all ease-in duration-200"
                  : "cursor-not-allowed opacity-50"
              }`}
            >
              <MdRemoveCircleOutline size={15} />
              <span>Delete</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddDocument;
