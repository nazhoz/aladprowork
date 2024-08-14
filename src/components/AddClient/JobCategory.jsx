"use client";
import React, { useState } from "react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

const JobCategory = () => {
  const assignedStaff = [
    { id: 1, name: "MOHAMMED ALI" },
    { id: 2, name: "ABDU RAHIM" },
    { id: 3, name: "MANIKANDAN MAMBATTA" },
    { id: 4, name: "MUHAMMED RASHID" },
  ];

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
      <div className="w-[100%] rounded-md border-[1px] border-b-formbordercolor px-3 flex justify-between items-center h-[50px] text-sm font-bold">
        <div className="w-[15%] flex justify-start items-center gap-4 px-1">
          <input type="checkbox" />
          <span className="font-bold text-sm text-inputbordercolor">Job Category</span>
        </div>
        <div className="w-[15%] flex justify-start items-center gap-4 px-7 ">
          <span className="font-bold text-sm text-inputbordercolor">Job Process</span>
        </div>
        <div className="w-[15%] flex justify-start items-center gap-4 px-4">
          <span className="font-bold text-sm text-inputbordercolor">Assigned Staff</span>
        </div>
        <div className="w-[15%] flex justify-start items-center gap-4 px-2">
          <span className="font-bold text-sm text-inputbordercolor">Tagged Manager</span>
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
      <div className="max-h-[300px] overflow-y-auto">
        {" "}
        {/* Fixed height and overflow for scrolling */}
        {dropdowns.map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-4 py-2 gap-2 "
          >
            <input type="checkbox" />
            <div className="flex w-[85%] gap-3">
              <select
                className="w-[85%] h-[40px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1"
                name=""
                id=""
              >
                <option className="text-xs" value="" disabled>
                  --Select Job Category--
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
              <select
                className="w-[85%] h-[40px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1"
                name=""
                id=""
              >
                <option className="text-xs" value="" disabled>
                  --Select Job Category--
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
              <select
                className="w-[85%] h-[40px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1"
                name=""
                id=""
              >
                <option className="text-xs" value="" disabled>
                  --Select Job Category--
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
              <select
                className="w-[85%] h-[40px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1"
                name=""
                id=""
              >
                <option className="text-xs" value="" disabled>
                  --Select Job Category--
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
            </div>
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

export default JobCategory;
