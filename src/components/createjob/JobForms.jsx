import Link from "next/link";
import React from "react";
import { TiUserAdd } from "react-icons/ti";

const JobForms = () => {
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
    <div className="grid grid-cols-3 px-4 py-4">
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
          <option className="text-xs text-inputs" value="">
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
      {/*================ Client Info ========================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>
            Client Info <span className="text-red-600">*</span>
          </span>
          <Link
            href="/createjob/addclient"
            className=" cursor-pointer text-links text-xs flex justify-around items-center"
          >
            Add <TiUserAdd size={20} />
          </Link>
          {/* <TiUserAdd size={20} onClick={handleAddClient} className=" cursor-pointer text-links text-xs" /> */}
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="Client info"
        ></input>
      </div>
      {/*==================== Priority =======================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <span className="text-[15px] font-semibold">
          Priority <span className="text-red-600">*</span>
        </span>
        <select
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
        >
          <option className="text-xs text-inputs" value="">
            --Select Priority--
          </option>
          {priority.map((category) => (
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
      {/*======================= Status ==============================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <span className="text-[15px] font-semibold">
          Status <span className="text-red-600">*</span>
        </span>
        <select
          disabled
          className={`w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 ${
            true ? "bg-gray-300 " : "bg-white"
          }`}
          name=""
          id=""
        >
          <option className="text-xs text-inputs" value="">
            --Select Status--
          </option>
          {status.map((category) => (
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
    </div>
  );
};

export default JobForms;
