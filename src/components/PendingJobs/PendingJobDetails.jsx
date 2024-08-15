"use client";
import React, { useState } from "react";
import { HiRefresh } from "react-icons/hi";
import { RxClipboardCopy } from "react-icons/rx";
import { SiMicrosoftexcel } from "react-icons/si";
import { VscFilePdf } from "react-icons/vsc";
import { TfiPrinter } from "react-icons/tfi";
import { RiSearchLine } from "react-icons/ri";

const PendingJobDetails = () => {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="bg-formbackgroundcolor shadow-md border-[1px] rounded-md w-[100%]">
      <div className="w-[100%] border-b-[1px] border-b-formbordercolor px-4 flex justify-between items-center h-[43px] text-md font-bold text-inputbordercolor">
        <span>PENDING JOB REPORTS</span>
      </div>
      <div className="flex justify-between items-center px-4">
        <div className="w-[40%] flex py-4">
          <input
            className="w-[100%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1"
            placeholder="Client Name"
          />
        </div>
        <div className="flex justify-start items-center gap-10 px-1">
          <div className="flex font-semibold text-sm gap-3">
            <input
              className="border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1"
              name="accounttype"
              id=""
              type="radio"
            />
            <span>Pending Status</span>
          </div>
          <div className="flex font-semibold text-sm gap-3">
            <input
              className="border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1"
              name="accounttype"
              id=""
              type="radio"
            />
            <span>Due Date and Status</span>
          </div>
        </div>
        <div className="flex items-center gap-2 border-[1px] rounded-md text-sm font-semibold border-inputs px-4 py-[7px] hover:bg-buttonhover hover:text-textwhite hover:border-none transition-all ease-in-out duration-300">
          <HiRefresh size={17} />
          <button className="">Refresh</button>
        </div>
      </div>
      <div className="flex justify-between items-center py-2 px-4">
        <div className="flex justify-start items-center w-[50%] gap-3 relative">
          <div className="flex justify-center items-center border-[1px] w-[6%] h-[6vh] rounded-md border-copybordercolor text-copytextcolor hover:border-none hover:bg-copybgcolor hover:text-textwhite transition-all ease-in-out duration-300">
            <RxClipboardCopy size={20} />
          </div>
          <div className="flex justify-center items-center border-[1px] w-[6%] h-[6vh] rounded-md border-excelbordercolor text-exceltextcolor hover:border-none hover:bg-excelbgcolor hover:text-textwhite transition-all ease-in-out duration-300">
            <SiMicrosoftexcel size={20} />
          </div>
          <div className="flex justify-center items-center border-[1px] w-[6%] h-[6vh] rounded-md border-pdfbordercolor text-pdftextcolor hover:border-none hover:bg-pdfbgcolor hover:text-textwhite transition-all ease-in-out duration-300">
            <VscFilePdf size={20} />
          </div>
          <div className="flex justify-center items-center border-[1px] w-[6%] h-[6vh] rounded-md border-printbordercolor text-printtextcolor hover:border-none hover:bg-printbgcolor hover:text-textwhite transition-all ease-in-out duration-300">
            <TfiPrinter size={20} />
          </div>

          <div
            className="flex justify-center items-center border-[1px] w-[20%] h-[6vh] rounded-md border-printbordercolor text-printtextcolor hover:border-none hover:bg-printbgcolor hover:text-textwhite transition-all ease-in-out duration-300 text-xs font-semibold cursor-pointer"
            onClick={toggleButtons}
          >
            <span>Column Visibility</span>
          </div>

          {/* Additional Buttons */}
          {showButtons && (
            <div className="flex w-[98%] gap-2 absolute left-[53%] transition-all ease-in-out duration-300">
              <button className="border-[1px] w-[15%] h-[6vh] rounded-md border-inputs bg-buttonbgcolor text-[11px]">
                Work Name
              </button>
              <button className="border-[1px] w-[15%] h-[6vh] rounded-md border-inputs bg-buttonbgcolor text-[11px]">
                Sub Work Name
              </button>
              <button className="border-[1px] w-[15%] h-[6vh] rounded-md border-inputs bg-buttonbgcolor text-[11px]">
                Job Period
              </button>
              <button className="border-[1px] w-[15%] h-[6vh] rounded-md border-inputs bg-buttonbgcolor text-[11px]">
                Client Name
              </button>
              <button className="border-[1px] w-[15%] h-[6vh] rounded-md border-inputs bg-buttonbgcolor text-[11px]">
                Assigned Staff
              </button>
              <button className="border-[1px] w-[15%] h-[6vh] rounded-md border-inputs bg-buttonbgcolor text-[11px]">
                Tagged Manager
              </button>
            </div>
          )}
        </div>
        <div className="w-[25%] flex justify-around items-center py-1 px-1 border-[1px] border-inputs rounded-md focus:border-inputbordercolor">
          <input
            className="w-[85%] h-[35px] text-xs font-medium px-1 outline-none"
            placeholder="Client Name"
          />
          <RiSearchLine size={25} />
        </div>
      </div>
      <div>
        {/*================================== Table ==========================================*/}
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default PendingJobDetails;
