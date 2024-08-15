"use client";
import React, { useState } from "react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

const AddDirectors = () => {
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
          Create Directors
        </span>
        <div
          onClick={handleAddDropdown}
          className="w-[12%] flex justify-evenly items-center border-[1px] py-1 rounded-lg border-formbordercolor hover:bg-buttonhover hover:text-formbackgroundcolor hover:border-0 transition-all ease-in duration-200"
        >
          <MdAddCircleOutline size={15} />
          <span className="text-sm">Add Director</span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center px-3 py-3 max-h-[300px] overflow-y-auto">
        {dropdowns.map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-2 py-2 gap-2 w-[100%]"
          >
            <input
              className="border-[1px] border-inputs w-[15%] h-[35px] px-2 rounded-md placeholder:text-sm placeholder:text-gray-500"
              type="text"
              placeholder="Director Name"
            />
            <input
              className="border-[1px] border-inputs w-[15%] h-[35px] px-2 rounded-md placeholder:text-sm placeholder:text-gray-500"
              type="text"
              placeholder="DIN No"
            />
            <input
              className="border-[1px] border-inputs w-[15%] h-[35px] px-2 rounded-md placeholder:text-sm placeholder:text-gray-500"
              type="number"
              placeholder="Mobile No"
            />
            <input
              className="border-[1px] border-inputs w-[15%] h-[35px] px-2 rounded-md placeholder:text-sm placeholder:text-gray-500"
              type="email"
              placeholder="Email"
            />
            <input
              className="border-[1px] border-inputs w-[15%] h-[35px] px-2 rounded-md placeholder:text-sm placeholder:text-gray-500"
              type="number"
              placeholder="SRT No"
            />
            <input
              className="border-[1px] text-sm text-gray-500 border-inputs w-[15%] h-[35px] px-2 rounded-md"
              type="Date"
              placeholder="Date"
            />
            <div className=" text-sm text-gray-500  w-[8%] h-[35px] px-2 flex justify-around items-center">
              <input type="checkbox" name="" id="" />
              <span>Is Active</span>
            </div>
            <div
              onClick={() =>
                dropdowns.length > 1 && handleRemoveDropdown(index)
              }
              className={`w-[4%] flex justify-evenly items-center border-[1px] py-2 text-sm font-bold rounded-lg border-formbordercolor ${
                dropdowns.length > 1
                  ? "hover:bg-deletecolor hover:text-formbackgroundcolor hover:border-0 cursor-pointer transition-all ease-in duration-200"
                  : "cursor-not-allowed opacity-50"
              }`}
            >
              <MdRemoveCircleOutline size={18} />
              {/* <span>Delete</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddDirectors;
