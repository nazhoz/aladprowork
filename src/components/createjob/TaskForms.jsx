"use client";
import React, { useState } from "react";

const TaskForms = () => {
  const [isRecurring, setIsRecurring] = useState(false);

  const handleCheckboxChange = () => {
    setIsRecurring(!isRecurring);
  };

  return (
    <div className="flex">
      <div className="px-6 w-[35%]">
        <div className="w-[47%] flex justify-between items-center">
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
        <div className="flex flex-col py-4 gap-2">
          <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
            <span>
              Task Name/Job Period <span className="text-red-600">*</span>
            </span>
          </div>
          <input
            className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1"
            placeholder="Task Name"
          />
        </div>
      </div>
      <div className="w-[64%]">
        <div className="flex flex-col  gap-2">
          <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
            <span>
              Task Description <span className="text-red-600">*</span>
            </span>
          </div>
          <textarea
            className="w-[95%] h-[70px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-2 py-3"
            placeholder="Description"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskForms;
