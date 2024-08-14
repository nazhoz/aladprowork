"use client";
import React, { useState } from "react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

const AssignedStaff = () => {
  const assignedStaff = [
    { id: 1, name: "MOHAMMED ALI" },
    { id: 2, name: "ABDU RAHIM" },
    { id: 3, name: "MANIKANDAN MAMBATTA" },
    { id: 4, name: "MUHAMMED RASHID" },
  ];

  const [dropdowns, setDropDowns] = useState([0]);

  const handleAddDropdown = () => {
    setDropDowns([...dropdowns, dropdowns.length]);
  };

  const handleRemoveDropdown = (index) => {
    const updatedDropdowns = dropdowns.filter((_, i) => i !== index);
    setDropDowns(updatedDropdowns);
  };

  return (
    <div className="w-[100%]">
      <div className="w-[100%] border-b-[1px] border-t-[1px] border-b-formbordercolor px-3 flex justify-between items-center h-[50px] text-sm font-bold">
        <div className="w-[15%] flex justify-evenly items-center">
          <input type="checkbox" />
          <span>Assigned Staff</span>
        </div>
        <div
          onClick={handleAddDropdown}
          className="w-[12%] flex justify-evenly items-center border-[1px] py-2 rounded-lg border-formbordercolor hover:bg-buttonhover hover:text-formbackgroundcolor hover:border-0 transition-all ease-in duration-200"
        >
          <MdAddCircleOutline size={15} />
          <span>Add</span>
        </div>
      </div>

      {/*====================== Assigned staff dropdown container ===================== */}
      <div className="max-h-[200px] overflow-y-auto">  {/* Fixed height and overflow for scrolling */}
        {dropdowns.map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-4 py-2 gap-2"
          >
            <input type="checkbox" />
            <select
              className="w-[85%] h-[40px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1"
              name=""
              id=""
            >
              <option className="text-xs" value="" disabled>
                --Select Assigneee--
              </option>
              {assignedStaff.map((category) => (
                <option
                  className="text-black"
                  key={category.id}
                  value={category.name}
                >
                  {category.name}
                </option>
              ))}
            </select>
            <div
              onClick={() => dropdowns.length > 1 && handleRemoveDropdown(index)}
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

export default AssignedStaff;
