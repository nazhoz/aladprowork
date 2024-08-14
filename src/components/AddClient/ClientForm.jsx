import React from "react";

const ClientForm = () => {
  const jobCategory = [
    { id: 1, name: "LLP Form No.8" },
    { id: 2, name: "Account Prepration for Management" },
    { id: 3, name: "Allegration of Company Address" },
    { id: 4, name: "Auditors Appointment" },
    { id: 5, name: "CA Certification" },
  ];

  const countryCodes = [
    { id: 1, code: "+91", name: "IND" },
    { id: 2, code: "+1", name: "USA" },
    { id: 3, code: "+44", name: "GBR" },
    { id: 4, code: "+1", name: "CAN" },
    { id: 5, code: "+61", name: "AUS" },
  ];

  const Manager = [
    { id: 1, name: "MOHAMMED ALI" },
    { id: 2, name: "ABDU RAHIM" },
    { id: 3, name: "MANIKANDAN MAMBATTA" },
    { id: 4, name: "MUHAMMED RASHID" },
  ];

  const partner =[
    { id: 1, name: "MOHAMMED ALI" },
    { id: 2, name: "ABDU RAHIM" },
    { id: 3, name: "MANIKANDAN MAMBATTA" },
    { id: 4, name: "MUHAMMED RASHID" },
  ]
  return (
    <div className="grid grid-cols-3 w-[100%] py-2 px-2">
      {/*======================= Client name ================================*/}
      <div className="flex flex-col px-2 py-2 gap-2 ">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span clsa>
            Client Name <span className="text-red-600">*</span>
          </span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="Client Name"
        ></input>
      </div>
      {/*=============================== File No ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>
            File No <span className="text-red-600">*</span>
          </span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="File No"
        ></input>
      </div>
      {/*=============================== Client Email ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>
            Client Email <span className="text-red-600">*</span>
          </span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="Client Email"
        ></input>
      </div>
      {/*=============================== Address Line1 ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>
            Address Line1 <span className="text-red-600">*</span>
          </span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="Address Line1"
        ></input>
      </div>
      {/*=============================== Address Line2 ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>
            Address Line2 <span className="text-red-600">*</span>
          </span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="Address Line2"
        ></input>
      </div>
      {/*=============================== Pincode ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>
            Pincode <span className="text-red-600">*</span>
          </span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="Pincode"
        ></input>
      </div>
      {/*=============================== District ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>District</span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="District"
        ></input>
      </div>
      {/*=============================== State ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>State</span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="State"
        ></input>
      </div>
      {/*=============================== Contact No ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>
            Contact No <span className="text-red-600">*</span>
          </span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="Contact No"
        ></input>
      </div>
      {/*=============================== Client Group ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>
            Client Group <span className="text-red-600">*</span>
          </span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="Client Group"
        ></input>
      </div>
      {/*=============================== Client Classification ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>Client Classification</span>
        </div>
        <select
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
        >
          <option className="text-xs" value="" disabled>
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
      {/*=============================== Company Start ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>Company Start</span>
        </div>
        <input
          className="border-[1px] px-2 h-[35px] rounded-md text-xs w-[95%]  border-inputs outline-none focus:border-inputbordercolor"
          type="date"
        />
      </div>
      {/*=============================== Gst no ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>GST No</span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="GST No"
        ></input>
      </div>
      {/*=============================== Pan no ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>PAN No</span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="PAN No"
        ></input>
      </div>
      {/*=============================== Tan no ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>
            TAN No <span className="text-red-600">*</span>
          </span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="TAN No"
        ></input>
      </div>
      {/*=============================== Cin no ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>CIN No</span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="CIN No"
        ></input>
      </div>
      {/*=============================== Opening Balance ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>
            Opening Balance <span className="text-red-600">*</span>
          </span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="Opening Balance"
        ></input>
      </div>
      {/*=============================== Contact Person ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>
            Contact Person <span className="text-red-600">*</span>
          </span>
        </div>
        <input
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
          placeholder="Contact Person"
        ></input>
      </div>
      {/*=============================== Mobile Number ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>
            Mobile Number <span className="text-red-600">*</span>
          </span>
        </div>
        <div className="flex px-1 w-[95%] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor ">
          <select className="w-[12%] h-[35px] outline-none border-r-[1px] text-xs bg-none" name="" id="">
            {countryCodes.map((codes) => (
              <option key={codes.id} value={codes.code}>
                {codes.name} ({codes.code})
              </option>
            ))}
          </select>
          <input
            className="w-[85%] h-[35px]  text-xs font-medium outline-none px-2"
            name=""
            id=""
            type="number"
            placeholder="Mobile Number"
          />
        </div>
      </div>
      {/*=============================== Account Type ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-3">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>
            Account Type 
          </span>
        </div>
        <div className="flex justify-start items-center gap-10 px-1">
          <div className="flex font-semibold text-sm gap-3">
            <input
              className=" border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
              name="accounttype"
              id=""
              type="radio"
              placeholder="Mobile Number"
            />
            <span>Payable</span>
          </div>
          <div className="flex font-semibold text-sm gap-3">
            <input
              className=" border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
              name="accounttype"
              id=""
              type="radio"
              placeholder="Mobile Number"
            />
            <span>Receivable</span>
          </div>
        </div>
      </div>
      {/*=============================== Status ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-3">
        <div className="text-[15px] font-semibold flex justify-between items-center w-[95%]">
          <span>
            Status 
          </span>
        </div>
        <label className="inline-flex items-center gap-3 cursor-pointer text-sm font-medium">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-red-400 peer-focus:outline-none peer-focus:ring-1    rounded-full peer white:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
          <span className="font-semibold">is Active ?</span>
        </label>
      </div>
      {/*=============================== Assigned Staff ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2 ">
        <span className="text-[15px] font-semibold">
        Assigned Staff
        </span>
        <select
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
        >
          {Manager.map((category) => (
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
      {/*=============================== Tagged Manager ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2 ">
        <span className="text-[15px] font-semibold">
        Tagged Manager
        </span>
        <select
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
        >
          {partner.map((category) => (
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
      {/*=============================== Tagged Partner ===================================*/}
      <div className="flex flex-col px-2 py-2 gap-2 ">
        <span className="text-[15px] font-semibold">
        Tagged Partner 
        </span>
        <select
          className="w-[95%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 "
          name=""
          id=""
        >
          {Manager.map((category) => (
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

export default ClientForm;
