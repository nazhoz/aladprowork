"use client";
import React, { useState } from "react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

const ClientInfo = ({ selectedClients, onClientChange }) => {
  const [dropdowns, setDropdowns] = useState([0]);
  const [formData, setFormData] = useState([]);
  const [isPlaceHolderVisible, setIsPlaceHolderVisible] = useState(true);

  const handleAddDropdown = () => {
    setDropdowns([...dropdowns, dropdowns.length]);
    setFormData([...formData, {}]);
  };

  const handleRemoveDropdown = (index) => {
    const updatedDropdowns = dropdowns.filter((_, i) => i !== index);
    const updatedFormData = formData.filter((_, i) => i !== index);
    onClientChange(index, "");
    setDropdowns(updatedDropdowns);
    setFormData(updatedFormData);
  };

  const handleInputChange = (index, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index] = { ...updatedFormData[index], [field]: value };
    setFormData(updatedFormData);
  };

  const handleClientSelect = (index, clientName) => {
    onClientChange(index, clientName);
  };

  const jobCategory = [
    { id: 1, name: "LLP Form No.8" },
    { id: 2, name: "Account Preparation for Management" },
    { id: 3, name: "Allegation of Company Address" },
    { id: 4, name: "Auditors Appointment" },
    { id: 5, name: "CA Certification" },
  ];

  const validateField = (index, field) => {
    return formData[index]?.[field] ? "border-inputs" : "border-red-500";
  };

  return (
    <div className="w-[100%] bg-formbackgroundcolor mt-3 rounded-md shadow-md">
      <div className=" flex justify-between items-center gap-4 px-3 py-3 border-[1px] border-inputs rounded-md h-[50px]  font-bold">
        <span className="font-bold px-2 text-md text-inputbordercolor">
          CLIENTS INFO
        </span>
        <div
          onClick={handleAddDropdown}
          className="w-[12%] flex justify-evenly items-center border-[1px] py-1 rounded-lg border-formbordercolor hover:bg-buttonhover hover:text-formbackgroundcolor hover:border-0 transition-all ease-in duration-200"
        >
          <MdAddCircleOutline size={15} />
          <span className="text-sm">Add Clients</span>
        </div>  
      </div>
      <div className="flex flex-col gap-3 justify-between items-center px-3 py-3 max-h-[400px] overflow-y-auto">
        {dropdowns.map((_, index) => (
          <div
            key={index}
            className="flex px-2 py-2 items-center  w-[100%]  border-[1px] border-inputs shadow-md bg-lightgray rounded-md"
          >
            <div className="grid grid-cols-5 py-2 gap-2">
              <div className="">
                <input
                  disabled
                  value={selectedClients[index] || ""}
                  onChange={(e) =>
                    handleClientSelect(index, e.target.value)
                  }
                  placeholder="--Select Client--"
                  className="w-[90%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 bg-gray-300"
                />
                  
                
              </div>
              <div className="">
                <select
                  className={`w-[90%] h-[35px] border-[1px] outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 ${validateField(
                    index,
                    "status"
                  )}`}
                  onChange={(e) =>
                    handleInputChange(index, "status", e.target.value)
                  }
                >
                  <option className="text-xs text-inputs" value="">
                    --Select Status--
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
              <div className="">
                <select
                  className={`w-[90%] h-[35px] border-[1px] outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 ${validateField(
                    index,
                    "priority"
                  )}`}
                  onChange={(e) =>
                    handleInputChange(index, "priority", e.target.value)
                  }
                >
                  <option className="text-xs text-inputs" value="">
                    --Select Priority--
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
              <input
                className="border-[1px] border-inputs w-[90%] h-[35px] px-2 rounded-md placeholder:text-xs placeholder:text-blackborder focus:border-inputbordercolor outline-none"
                type="text"
                placeholder="Service Amount"
                onChange={(e) =>
                  handleInputChange(index, "serviceAmount", e.target.value)
                }
              />
              <input
                className="border-[1px] border-inputs w-[90%] h-[35px] px-2 rounded-md placeholder:text-xs placeholder:text-blackborder focus:border-inputbordercolor outline-none"
                type="number"
                placeholder="Estimate Time(In hrs)"
                onChange={(e) =>
                  handleInputChange(index, "estimateTime", e.target.value)
                }
              />
              <div className="relative w-[90%]">
                {isPlaceHolderVisible && (
                  <div className="absolute text-xs top-[50%] left-[50%] text-blackborder transform -translate-y-[50%] pointer-events-none">
                    Start Date
                  </div>
                )}
                <input
                  className={`border-[1px] text-xs text-blackborder border-inputs w-[100%] h-[35px] px-2 rounded-md focus:border-inputbordercolor outline-none ${validateField(
                    index,
                    "startDate"
                  )}`}
                  type="date"
                  onChange={(e) =>
                    handleInputChange(index, "startDate", e.target.value)
                  }
                  onFocus={() => setIsPlaceHolderVisible(false)}
                  onBlur={() =>
                    !formData[index]?.startDate && setIsPlaceHolderVisible(true)
                  }
                />
              </div>
              <div className="relative w-[90%]">
                {isPlaceHolderVisible && (
                  <div className="absolute text-xs top-[50%] left-[50%] text-blackborder transform -translate-y-[50%] pointer-events-none">
                    End Date
                  </div>
                )}
                <input
                  className={`border-[1px] text-xs text-blackborder border-inputs w-[100%] h-[35px] px-2 rounded-md focus:border-inputbordercolor outline-none ${validateField(
                    index,
                    "endDate"
                  )}`}
                  type="date"
                  onChange={(e) =>
                    handleInputChange(index, "endDate", e.target.value)
                  }
                  onFocus={() => setIsPlaceHolderVisible(false)}
                  onBlur={() =>
                    !formData[index]?.endDate && setIsPlaceHolderVisible(true)
                  }
                />
              </div>

              <div className="">
                <select
                  className={`w-[90%] h-[35px] border-[1px] outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 ${validateField(
                    index,
                    "assignee"
                  )}`}
                  onChange={(e) =>
                    handleInputChange(index, "assignee", e.target.value)
                  }
                >
                  <option className="text-xs text-inputs" value="">
                    --Select Assignee--
                  </option>
                  {jobCategory.map((category) => (
                    <option
                      className="text-blackborder "
                      key={category.id}
                      value={category.name}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="">
                <select
                  className={`w-[90%] h-[35px] border-[1px] outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 ${validateField(
                    index,
                    "manager"
                  )}`}
                  onChange={(e) =>
                    handleInputChange(index, "manager", e.target.value)
                  }
                >
                  <option className="text-xs text-inputs" value="">
                    --Select Manager--
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
              <div className="">
                <select
                  className={`w-[90%] h-[35px] border-[1px] outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 ${validateField(
                    index,
                    "partner"
                  )}`}
                  onChange={(e) =>
                    handleInputChange(index, "partner", e.target.value)
                  }
                >
                  <option className="text-xs text-inputs" value="">
                    --Select Partner--
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
            </div>

            <div
              onClick={() =>
                dropdowns.length > 1 && handleRemoveDropdown(index)
              }
              className={`w-[5%] h-[10vh] flex justify-evenly items-center border-[1px] py-2 text-sm font-bold rounded-lg border-inputs ${
                dropdowns.length > 1
                  ? "hover:bg-deletecolor hover:text-formbackgroundcolor hover:border-0 cursor-pointer transition-all ease-in duration-200"
                  : "cursor-not-allowed opacity-50"
              }`}
            >
              <MdRemoveCircleOutline size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientInfo;
