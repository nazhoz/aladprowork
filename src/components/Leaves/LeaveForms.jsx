"use client";
import React, { useState } from "react";

const LeaveForms = () => {
  const [selectedDayType, setSelectedDayType] = useState("");

  const handleDayTypeChange = (event) => {
    setSelectedDayType(event.target.value);
  };

  const AvialableLeave = [{ TotalLeave: 2 }, { RemainingLeave: 2 }];

  return (
    <>
      <div className="px-3 py-5 flex justify-between">
        <div className="bg-formbackgroundcolor shadow-md border-[1px] rounded-md w-[75%]">
          <div className="w-[100%] border-b-[1px] border-b-formbordercolor px-4 py-4 flex justify-between items-center  text-md font-bold text-inputbordercolor">
            <span>Request Leave</span>
          </div>
          <div className="grid grid-cols-2 px-4 py-6 gap-7">
            {/* ========================== Leave Type ========================================= */}
            <div className="flex flex-col gap-2 ">
              <span className="text-[13px] font-semibold">
                Leave Type <span className="text-red-600">*</span>
              </span>
              <select
                className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-2 "
                name=""
                id=""
              >
                <option className="text-xs text-inputs" value="">
                  --Select Leave Type--
                </option>
                {LeaveType.map((category) => (
                  <option
                    className="text-black "
                    key={category.id}
                    value={category.name}
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            {/* ========================== Day Type ========================================= */}
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-semibold px-2">
                Day Type <span className="text-red-600">*</span>
              </span>
              <div className="flex gap-5">
                <div
                  className={`w-[20%] h-[35px] flex justify-evenly items-center text-sm font-semibold cursor-pointer ${
                    selectedDayType === "Full Day"
                      ? "bg-leavebgborder rounded-md text-white"
                      : "border-[1px] border-leaveradioborder  rounded-md"
                  }`}
                  onClick={() => setSelectedDayType("Full Day")}
                >
                  <input
                    type="radio"
                    name="Day Type"
                    value="Full Day"
                    checked={selectedDayType === "Full Day"}
                    onChange={handleDayTypeChange}
                    className="hidden"
                  />
                  <span>Full Day</span>
                </div>
                <div
                  className={`w-[20%] h-[35px] flex justify-evenly items-center text-sm font-semibold cursor-pointer ${
                    selectedDayType === "Half Day"
                      ? "bg-leavebgborder rounded-md text-white"
                      : "border-[1px] border-leaveradioborder  rounded-md"
                  }`}
                  onClick={() => setSelectedDayType("Half Day")}
                >
                  <input
                    type="radio"
                    name="Day Type"
                    value="Half Day"
                    checked={selectedDayType === "Half Day"}
                    onChange={handleDayTypeChange}
                    className="hidden"
                  />
                  <span>Half Day</span>
                </div>
              </div>
            </div>
            {/* ========================== From Dates ========================================= */}
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-semibold">
                Start Date <span className="text-red-600">*</span>
              </span>
              <input
                className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-2 "
                type="date"
              />
            </div>
            {/* ========================== To Dates ========================================= */}
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-semibold">
                To Date <span className="text-red-600">*</span>
              </span>
              <input
                className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-2 "
                type="date"
              />
            </div>
            {/* ========================== Total Days ========================================= */}
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-semibold">
                Total Days <span className="text-red-600">*</span>
              </span>
              <input
                className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-2 "
                type="text"
                placeholder="Total Days"
              />
            </div>
            {/* ========================== Remarks Notes ========================================= */}
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-semibold">Remarks Notes</span>
              <textarea
                className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-2 py-2 "
                placeholder="Remarks Notes"
              />
            </div>
          </div>
        </div>
        <div className="bg-formbackgroundcolor shadow-md border-[1px] rounded-md w-[24%]">
          <div className="w-[100%] border-b-[1px] border-b-formbordercolor px-4 py-4 flex justify-between items-center  text-md font-bold text-inputbordercolor">
            <span>Available Leaves</span>
          </div>
          <div className="flex flex-col justify-around px-4 items-center h-[45vh]">
            <div className="bg-totalleaves w-[80%] h-[25%] flex justify-evenly items-center rounded-md">
              <span className="text-[40px] font-bold">2</span>
              <span className="text-lg font-semibold">Total Leaves</span>
            </div>
            <div className="bg-leavestaken w-[80%] h-[25%] gap-2 flex justify-evenly items-center rounded-md">
              <span className="text-[40px] font-bold">0</span>
              <span className="text-lg font-semibold">Leave Taken</span>
            </div>
            <div className="bg-remainleaves w-[80%] h-[25%] gap-2 flex justify-evenly items-center rounded-md">
              <span className="text-[40px] font-bold">2</span>
              <span className="text-lg font-semibold">Remain Leave</span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 px-4 flex justify-between bg-formbackgroundcolor border-[1px] shadow-md rounded-lg mt-2 mb-2 ml-3 w-[98%]">
        <button
          // onClick={createToast}
          className="w-[15%] text-[15px] font-bold  flex justify-evenly items-center border-[1px] py-2 rounded-lg border-blackborder hover:bg-buttonhover hover:text-formbackgroundcolor hover:border-0 transition-all ease-in duration-200 "
        >
          Create
        </button>
        <button
          // onClick={cancelToast}
          className="w-[15%] text-[15px] font-bold flex justify-evenly items-center border-[1px] py-2 rounded-lg border-blackborder hover:bg-deletecolor hover:text-formbackgroundcolor hover:border-0 transition-all ease-in duration-200 "
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default LeaveForms;
