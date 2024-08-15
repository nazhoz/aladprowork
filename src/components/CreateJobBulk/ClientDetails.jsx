"use client";
import React from "react";

const ClientDetails = ({ onClientSelect, disabledClients }) => {
  const jobCategory = [
    { id: 1, name: "ARAGANATH RATHEESH" },
    { id: 2, name: "KALLINGAL MUJEEBRAHIMAN" },
    { id: 3, name: "SHAMEERA CHERADA" },
    { id: 4, name: "A K PETROLEUM" },
    { id: 5, name: "A V MEDICALS" },
    { id: 6, name: "ABDUL ADIL THAYYIL" },
    { id: 7, name: "ABDUL GAFOOR KUNNATH" },
    { id: 8, name: "ABDUL GAFOOR T" },
    { id: 9, name: "ABDUL KAREEM" },
    { id: 10, name: "ABDUL SHARIF" },
    { id: 12, name: "ABOOBACKER" },
    { id: 13, name: "EXTRA BAKES" },
  ];

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    onClientSelect((prevSelectedClients) => {
      // Check if the client is already selected
      if (prevSelectedClients.includes(selectedOption)) {
        // If it's already selected, remove it from the selection
        return prevSelectedClients.filter((client) => client !== selectedOption);
      } else {
        // Otherwise, add it to the selection
        return [...prevSelectedClients, selectedOption];
      }
    });
  };

  return (
    <div className="bg-formbackgroundcolor shadow-md border-[1px] rounded-md w-[30%]">
      <div className="w-[100%] border-b-[1px] border-b-formbordercolor px-4 flex justify-between items-center  h-[43px] text-md font-bold text-inputbordercolor">
        <span>CLIENT DETAILS</span>
      </div>
      <div className="">
        <div className="flex flex-col px-2 py-2 gap-2 ">
          <span className="text-[15px] font-semibold">
            Clients <span className="text-red-600">*</span>
          </span>
          <div className="w-[95%] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-[14px] font-medium px-1 h-[150px] overflow-auto">
            {jobCategory.map((category) => (
              <div key={category.id} className="flex items-center py-1">
                <input
                  type="checkbox"
                  id={`client-${category.id}`}
                  value={category.name}
                  onChange={handleChange}
                  checked={disabledClients.includes(category.name)}
                  className="mr-2"
                  disabled={disabledClients.includes(category.name)}
                />
                <label
                  htmlFor={`client-${category.id}`}
                  className={`text-black ${
                    disabledClients.includes(category.name) ? "line-through" : ""
                  }`}
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
