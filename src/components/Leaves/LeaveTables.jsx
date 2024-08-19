"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import demoJson from "../../json/demo.json";
import dummyJson from "../../json/dummy.json";
import sampleJson from "../../json/sample.json";
import { HiRefresh } from "react-icons/hi";
import { RxClipboardCopy } from "react-icons/rx";
import { SiMicrosoftexcel } from "react-icons/si";
import { VscFilePdf } from "react-icons/vsc";
import { TfiPrinter } from "react-icons/tfi";
import { RiSearchLine } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";
import { toast, Toaster } from "sonner";

const LeaveTables = () => {
  const searchParams = useSearchParams();
  const [jsonData, setJsonData] = useState(demoJson); // Default to demo.json
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const id = searchParams.get("id");

    let selectedJsonData;
    switch (id) {
      case "1":
        selectedJsonData = demoJson;
        break;
      case "2":
        selectedJsonData = dummyJson;
        break;
      case "3":
        selectedJsonData = sampleJson;
        break;
      default:
        selectedJsonData = demoJson;
        break;
    }

    setJsonData(selectedJsonData);
  }, [searchParams]);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  const renderTableHeaders = () => {
    const headings =
      jsonData.pending_status_Heading ||
      jsonData.viewJobs_Heading ||
      jsonData.leave_Heading;
    return (
      <tr>
        {Object.keys(headings).map((key, index) => (
          <th key={index} className="px-6 py-3">
            {headings[key]}
          </th>
        ))}
      </tr>
    );
  };
  const renderTableHeader = () => {
    const headings =
      jsonData.pending_status_Heading ||
      jsonData.viewJobs_Heading ||
      jsonData.leave_Heading;
    return (
      <div className="gap-4 flex flex-col max-h-[350px] px-3 overflow-auto">
        {Object.keys(headings).map((key, index) => (
          <div
            key={index}
            className=" px-7 py-2 border-[1px] border-inputbordercolor gap-2 text-xs"
          >
            {headings[key]}
          </div>
        ))}
      </div>
    );
  };

  const renderTableRows = () => {
    const bodyData =
      jsonData.pending_status_body ||
      jsonData.viewJobs_body ||
      jsonData.leave_body;
    return bodyData.map((row, index) => (
      <tr key={index} className="bg-white border-b">
        {Object.values(row).map((value, idx) => (
          <td key={idx} className="px-6 py-4">
            {value}
          </td>
        ))}
      </tr>
    ));
  };

  const renderRadioButtons = () => {
    if (jsonData === demoJson) {
      return (
        <div className="flex justify-start items-center gap-10 px-1">
          <div className="flex font-semibold text-sm gap-3">
            <input
              className="border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1"
              name="accounttype"
              id="pendingStatus"
              type="radio"
            />
            <span>Pending Status</span>
          </div>
          <div className="flex font-semibold text-sm gap-3">
            <input
              className="border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1"
              name="accounttype"
              id="dueDateStatus"
              type="radio"
            />
            <span>Due Date and Status</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="bg-formbackgroundcolor shadow-md border-[1px] rounded-md w-[100%]">
        <div className="w-[100%] border-b-[1px] border-b-formbordercolor px-4 flex justify-between items-center h-[43px] text-md font-bold text-inputbordercolor">
          <span>PENDING JOB REPORTS</span>
        </div>
        <div className="flex justify-between items-center px-4">
          <div className="w-[40%] flex py-4">
            <input
              className="w-[100%] h-[35px] border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1 placeholder:text-[13px]"
              placeholder="Client Name"
            />
          </div>
          {renderRadioButtons()}
          <div className="flex items-center gap-2 border-[1px] rounded-md text-sm font-semibold border-inputs px-4 py-[7px] hover:bg-buttonhover hover:text-textwhite hover:border-none transition-all ease-in-out duration-300">
            <HiRefresh
              size={17}
              className="transform hover:rotate-180 transition-all duration-300"
            />
            <button className="">Refresh</button>
          </div>
        </div>
        <div className="flex justify-between items-center py-2 px-4">
          <div className="flex justify-start items-center w-[50%] gap-3 relative">
            <div className="flex justify-center items-center border-[1px] w-[6%] h-[6vh] rounded-md border-copybordercolor text-copytextcolor hover:border-none hover:bg-copybgcolor hover:text-textwhite transition-all ease-in-out duration-300 cursor-pointer">
              <RxClipboardCopy size={20} />
            </div>
            <div className="flex justify-center items-center border-[1px] w-[6%] h-[6vh] rounded-md border-excelbordercolor text-exceltextcolor hover:border-none hover:bg-excelbgcolor hover:text-textwhite transition-all ease-in-out duration-300 cursor-pointer">
              <SiMicrosoftexcel size={20} />
            </div>
            <div className="flex justify-center items-center border-[1px] w-[6%] h-[6vh] rounded-md border-pdfbordercolor text-pdftextcolor hover:border-none hover:bg-pdfbgcolor hover:text-textwhite transition-all ease-in-out duration-300 cursor-pointer">
              <VscFilePdf size={20} />
            </div>
            <div className="flex justify-center items-center border-[1px] w-[6%] h-[6vh] rounded-md border-printbordercolor text-printtextcolor hover:border-none hover:bg-printbgcolor hover:text-textwhite transition-all ease-in-out duration-300 cursor-pointer">
              <TfiPrinter size={20} />
            </div>

            <div
              onClick={toggleButtons}
              className="flex justify-center items-center border-[1px] w-[25%] h-[6vh] rounded-md border-printbordercolor text-printtextcolor hover:border-none hover:bg-printbgcolor hover:text-textwhite transition-all ease-in-out duration-300 text-xs font-semibold cursor-pointer gap-2"
            >
              <span>Column Visibility</span>
              <TiArrowSortedDown size={14} />
            </div>

            {showButtons && (
              <div className="flex flex-col items-center w-[40%] gap-2 absolute left-[31%] border-[1px] border-dropdownsborder/30 py-4 rounded-md top-10 transition-all ease-in-out duration-300 z-30 bg-dropdowns/30 backdrop-blur-md">
                {renderTableHeader()}
              </div>
            )}
          </div>
          <div className="w-[25%] flex justify-around items-center py-1 px-1 border-[1px] border-inputs text-inputs rounded-md focus:border-inputbordercolor">
            <input
              className="w-[85%] h-[35px] text-xs font-medium px-1 outline-none"
              placeholder="Search..."
            />
            <RiSearchLine size={25} position="top-center" />
          </div>
        </div>
      </div>
      <div>
        <div
          id="pdf-table"
          className="bg-formbackgroundcolor shadow-md border-[1px] rounded-md mt-2 max-h-[400px] overflow-y-auto"
        >
          <table className="w-[100%] text-sm text-left text-tabletextcolor dark:text-tabletextcolor">
            <thead className="text-xs text-tableheadingtext dark:text-tableheadingtext uppercase border-b-[1px] border-inputbordercolor">
              {renderTableHeaders()}
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
};

export default LeaveTables;
