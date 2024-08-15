"use client";
import React, { useState } from "react";
import JobBulkForm from "../components/CreateJobBulk/JobBulkForm";
import ClientDetails from "../components/CreateJobBulk/ClientDetails";
import ClientInfo from "../components/CreateJobBulk/ClientInfo";
import { toast, Toaster } from "sonner";

const CreateJobBulk = () => {
  const [selectedClients, setSelectedClients] = useState([]); // Tracks the client for each row

  const handleClientSelect = (clientName) => {
    setSelectedClients(clientName); // Store all selected clients
  };

  const handleClientChange = (index, clientName) => {
    const updatedClients = [...selectedClients];
    updatedClients[index] = clientName;
    setSelectedClients(updatedClients);
  };

  const ToastCreate = () => {
    toast.success("Job Created Successfully!");
  };

  const ToastCancel = () => {
    toast.error("Job Creation Cancelled");
  };
  return (
    <div>
      <div className="flex justify-around px-2 py-2">
        <JobBulkForm />
        <ClientDetails
          onClientSelect={handleClientSelect}
          disabledClients={selectedClients}
        />
      </div>
      <div className="px-4 py-4">
        <ClientInfo
          selectedClients={selectedClients}
          onClientChange={handleClientChange}
        />
      </div>
      <div className="px-4">
        <div className="py-4 px-4 flex justify-between bg-formbackgroundcolor border-[1px] shadow-md rounded-lg mt-2 mb-2 w-[100%]">
          <button
            onClick={ToastCreate}
            className="w-[15%] text-[15px] font-bold  flex justify-evenly items-center border-[1px] py-2 rounded-lg border-blackborder hover:bg-buttonhover hover:text-formbackgroundcolor hover:border-0 transition-all ease-in duration-200 "
          >
            Create
          </button>
          <button
            onClick={ToastCancel}
            className="w-[15%] text-[15px] font-bold flex justify-evenly items-center border-[1px] py-2 rounded-lg border-blackborder hover:bg-deletecolor hover:text-formbackgroundcolor hover:border-0 transition-all ease-in duration-200 "
          >
            Cancel
          </button>
        </div>
      </div>
      <Toaster richColors position="top-right" />
    </div>
  );
};

export default CreateJobBulk;
