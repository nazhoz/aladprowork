"use client"
import React, { useState } from "react";

const JobBulkForm = () => {
    const [isRecurring, setIsRecurring] = useState(false);

  const handleCheckboxChange = () => {
    setIsRecurring(!isRecurring);
  };
  const jobCategory = [
    { id: 1, name: "LLP Form No.8" },
    { id: 2, name: "Account Prepration for Management" },
    { id: 3, name: "Allegration of Company Address" },
    { id: 4, name: "Auditors Appointment" },
    { id: 5, name: "CA Certification" },
  ];

  const financialYear = [
    { id: 1, name: "2024-2025" },
    { id: 2, name: "2023-2024" },
    { id: 3, name: "2022-2023" },
    { id: 4, name: "2021-2022" },
    { id: 5, name: "2020-2021" },
  ];

  const priority = [
    { id: 1, name: "High" },
    { id: 2, name: "Normal" },
  ];

  const status = [
    { id: 1, name: "Waiting for Approval" },
    { id: 2, name: "Approved" },
  ];
  return (
    <div className="bg-formbackgroundcolor shadow-md border-[1px] rounded-md w-[67%]">
      <div className="w-[100%] border-b-[1px] border-b-formbordercolor px-4 flex justify-between items-center  h-[43px] text-md font-bold text-inputbordercolor">
        <span>CREATE JOB BULK</span>
      </div>
      <div className="grid grid-cols-3 px-4 py-3  ">
        {/*=============== Job Category =================*/}
        <div className="flex flex-col px-2 py-2 gap-2 ">
          <span className="text-[15px] font-semibold">
            Job Category <span className="text-red-600">*</span>
          </span>
          <select
            className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
            name=""
            id=""
          >
            <option  className="text-xs text-inputs" value="">
              --Select Job Category--
            </option>
            {jobCategory.map((category) => (
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
        {/*============== Job Process ====================*/}
        <div className="flex flex-col px-2 py-2 gap-2">
          <span className="text-[15px] font-semibold">
            Job Process <span className="text-red-600">*</span>
          </span>
          <select
            className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
            name=""
            id=""
          >
            <option className="text-xs text-inputs" value="">
              --Select Job Process--
            </option>
            {jobCategory.map((category) => (
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
        {/*============ Fiancial Year ====================*/}
        <div className="flex flex-col px-2 py-2 gap-2">
          <span className="text-[15px] font-semibold">
            Financial Year <span className="text-red-600">*</span>
          </span>
          <select
            className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
            name=""
            id=""
          >
            <option className="text-xs text-inputs" value="">
              --Select Financial Year--
            </option>
            {financialYear.map((category) => (
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
        <div className=" flex items-center gap-2 px-4 h-[35px] mt-7">
          <label className="flex items-center">
            <input
              value="wedding-gift"
              className="peer cursor-pointer hidden"
              checked={isRecurring}
              onChange={handleCheckboxChange}
              type="checkbox"
            />
            <span className="inline-block w-5 h-5 border-2 relative cursor-pointer after:content-[''] after:absolute after:top-2/4 after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[10px] after:h-[10px] after:bg-[#333] after:rounded-[2px] after:opacity-0 peer-checked:after:opacity-100"></span>
          </label>
          <span className="text-sm font-bold">Is Recurring?</span>
        </div>
        <div className="flex flex-col py-4 gap-2 px-2">
          <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
            <span>
              Job Period
            </span>
          </div>
          <input
            className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1"
            placeholder="Task Name"
          />
        </div>
      </div>
    </div>
  );
};

export default JobBulkForm;
