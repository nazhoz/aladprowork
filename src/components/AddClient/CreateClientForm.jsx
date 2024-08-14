import React from "react";
import ClientForm from "./ClientForm";
import JobCategory from "./JobCategory";
import AddDocument from "./AddDocument";
import AddDirectors from "./AddDirectors";
import Link from "next/link";

const CreateClientForm = () => {
  return (
    <div className="flex flex-col justify-around px-3 py-3 w-[100%] shadow-sm">
      <div className="w-[100%] flex flex-col justify-start items-center py-2 bg-formbackgroundcolor  shadow-md rounded-lg">
        <div className="w-[100%] border-b-[1px] border-b-formbordercolor px-4  flex justify-start items-center  h-[43px] text-md  font-bold text-inputbordercolor">
          Create Client
        </div>
        <ClientForm />
      </div>
      <JobCategory />
      <AddDocument />
      <AddDirectors />
      <div className="py-4 px-4 flex justify-between bg-formbackgroundcolor  shadow-md rounded-lg mt-2 mb-2">
        <button className="w-[15%] text-[15px] font-bold -ml-3 flex justify-evenly items-center border-[1px] py-2 rounded-lg border-blackborder hover:bg-buttonhover hover:text-formbackgroundcolor hover:border-0 transition-all ease-in duration-200 ">
          Create
        </button>
        <Link
          href="/"
          className="w-[15%] text-[15px] font-bold flex justify-evenly items-center border-[1px] py-2 rounded-lg border-blackborder hover:bg-deletecolor hover:text-formbackgroundcolor hover:border-0 transition-all ease-in duration-200 "
        >
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default CreateClientForm;
