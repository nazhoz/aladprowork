"use client";
import React, { useEffect, useState } from "react";
// import { useSearchParams } from 'next/navigation';
import { HiRefresh } from "react-icons/hi";
import { RxClipboardCopy } from "react-icons/rx";
import { SiMicrosoftexcel } from "react-icons/si";
import { VscFilePdf } from "react-icons/vsc";
import { TfiPrinter } from "react-icons/tfi";
import { RiAddBoxFill, RiSearchLine } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";
import {
  clientData,
  jobDetailsHeading,
  jobData,
  DemoData,
} from "../../Data/Clients";
// import { DueDateData, DueDatesHeading } from "../../Data/DueDates";
import { toast, Toaster } from "sonner";
import * as XLSX from "xlsx";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PendingJobDetails = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [selectedTable, setSelectedTable] = useState("pendingStatus");
  const [visibleColumn, setVisibleColumn] = useState({
    workName: true,
    subWorkName: true,
    jobPeriod: true,
    clientName: true,
    assignedStaff: true,
    taggedManager: true,
  });
  // const [data, setData] = useState([]);
  // const [heading, setHeading] = useState([]);
  // const searchParams = useSearchParams();
  // const dataType = searchParams.get('dataType');

  // useEffect(()=>{
  //   if (dataType === "job") {
  //     setData(jobData)
  //     setHeading(jobDetailsHeading)
  //   } else if (dataType === "client") {
  //     setData(clientData)
  //   } else if (dataType === "demo") {
  //     setData(DemoData)
  //   }
  // },[dataType])

  // TODO: VISIBILTY BUTTON FUNCTION

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  const handleRadioChange = (event) => {
    setSelectedTable(event.target.value);
  };

  const toggleColumnVisibilty = (column) => {
    setVisibleColumn((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  // TODO: COPY TO CLIPBOARD FUNCTION

  const copyToClipboard = () => {
    let tableText = "";

    if (selectedTable === "pendingStatus") {
      tableText += jobDetailsHeading
        .map(
          (job) =>
            `${job.workName}\t${job.subWorkName}\t${job.jobPeriod}\t${job.clientName}\t${job.assignedStaff}\t${job.taggedManager}`
          // `${item.workName || item.Name}\t${item.subWorkName || item.subName}\t${item.jobPeriod || item.jobPeriods}\t${item.clientName || item.client}\t${item.assignedStaff || item.assignedStaffs}\t${item.taggedManager || item.taggedManagers}`
        )
        .join("\n");

      tableText += "\n";

      tableText += clientData
        .map(
          (clients) =>
            `${clients.workName}\t${clients.subWorkName}\t${clients.jobPeriod}\t${clients.clientName}\t${clients.assignedStaff}\t${clients.taggedManager}`
        )
        .join("\n");
    } else if (selectedTable === "dueDateStatus") {
      tableText += jobDetailsHeading
        .map((job) => `${job.workName}\t${job.subWorkName}\t${job.jobPeriod}`)
        .join("\n");

      tableText += "\n";

      tableText += clientData
        .map(
          (clients) =>
            `${clients.workName}\t${clients.subWorkName}\t${clients.jobPeriod}`
        )
        .join("\n");
    }

    navigator.clipboard.writeText(tableText).then(() => {
      toast.info("Data copied to clipboard!");
    });
  };

  // TODO: EXCEL SHEET SAVING FUNCTION

  const handleExportToExcel = () => {
    const headers = Object.keys(jobDetailsHeading[0]);
    const headerNames = headers.map((header) => jobDetailsHeading[0][header]);

    let formattedData = [];

    if (selectedTable === "pendingStatus") {
      formattedData = clientData.map((client) => {
        const formattedClient = {};
        headers.forEach((header) => {
          formattedClient[jobDetailsHeading[0][header]] = client[header];
        });
        return formattedClient;
      });
    } else if (selectedTable === "dueDateStatus") {
      formattedData = clientData.map((client) => {
        return {
          workName: client.workName,
          subWorkName: client.subWorkName,
          jobPeriod: client.jobPeriod,
        };
      });
    }

    const ws = XLSX.utils.json_to_sheet(formattedData, {
      header: headerNames,
    });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(
      wb,
      ws,
      selectedTable === "pendingStatus" ? "Pending Jobs" : "Due Dates"
    );

    XLSX.writeFile(
      wb,
      selectedTable === "pendingStatus"
        ? "Pending_Job_Details.xlsx"
        : "Due_Dates.xlsx"
    );

    toast.success("Excel file created!");
  };

  // TODO: PDF FILE SAVING FUNCTION

  const handleExportToPdf = () => {
    const table = document.querySelector("#pdf-table");

    html2canvas(table, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(
        selectedTable === "pendingStatus"
          ? "Pending_Job_Details.pdf"
          : "Due_Dates.pdf"
      );

      toast.success("PDF file created!");
    });
  };

  // TODO: PRINTING TABLE FUNCTION

  const printTable = () => {
    const printContent = document.querySelector("#pdf-table").outerHTML;
    const printWindow = window.open("", "", "height=1000,width=1000");
    printWindow.document.write(`
      <html>
        <head>
          <title>Pending Job Reports</title>
          <style>
            /* Include the CSS you want to apply in the print window */
            body {
              font-family: Arial, sans-serif;
            }
            table {
              width: 100%;
              border: 1px solid #ddd;
              font-size: 13px;
              border-radius: 5px;
            }
            th, td {
              padding: 10px;
              text-align: center;
              border-bottom: 1px solid #ddd
            }
            th {
              background-color: #f4f4f4;
              color: #3849E6;
              padding-top: 15px;
              padding-bottom: 15px;
            }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
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
          <div className="flex justify-start items-center gap-10 px-1">
            <div className="flex font-semibold text-sm gap-3">
              <input
                className="border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1"
                name="accounttype"
                id=""
                type="radio"
                value="pendingStatus"
                checked={selectedTable === "pendingStatus"}
                onChange={handleRadioChange}
              />
              <span>Pending Status</span>
            </div>
            <div className="flex font-semibold text-sm gap-3">
              <input
                className="border-[1px] border-inputs outline-none rounded-md focus:border-inputbordercolor text-xs font-medium px-1"
                name="accounttype"
                id=""
                type="radio"
                value="dueDateStatus"
                checked={selectedTable === "dueDateStatus"}
                onChange={handleRadioChange}
              />
              <span>Due Date and Status</span>
            </div>
          </div>
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
            <div
              onClick={copyToClipboard}
              className="flex justify-center items-center border-[1px] w-[6%] h-[6vh] rounded-md border-copybordercolor text-copytextcolor hover:border-none hover:bg-copybgcolor hover:text-textwhite transition-all ease-in-out duration-300 cursor-pointer"
            >
              <RxClipboardCopy size={20} />
            </div>
            <div
              onClick={handleExportToExcel}
              className="flex justify-center items-center border-[1px] w-[6%] h-[6vh] rounded-md border-excelbordercolor text-exceltextcolor hover:border-none hover:bg-excelbgcolor hover:text-textwhite transition-all ease-in-out duration-300 cursor-pointer"
            >
              <SiMicrosoftexcel size={20} />
            </div>
            <div
              onClick={handleExportToPdf}
              className="flex justify-center items-center border-[1px] w-[6%] h-[6vh] rounded-md border-pdfbordercolor text-pdftextcolor hover:border-none hover:bg-pdfbgcolor hover:text-textwhite transition-all ease-in-out duration-300 cursor-pointer"
            >
              <VscFilePdf size={20} />
            </div>
            <div
              onClick={printTable}
              className="flex justify-center items-center border-[1px] w-[6%] h-[6vh] rounded-md border-printbordercolor text-printtextcolor hover:border-none hover:bg-printbgcolor hover:text-textwhite transition-all ease-in-out duration-300 cursor-pointer"
            >
              <TfiPrinter size={20} />
            </div>

            <div
              className="flex justify-center items-center border-[1px] w-[25%] h-[6vh] rounded-md border-printbordercolor text-printtextcolor hover:border-none hover:bg-printbgcolor hover:text-textwhite transition-all ease-in-out duration-300 text-xs font-semibold cursor-pointer gap-2"
              onClick={toggleButtons}
            >
              <span>Column Visibility</span>
              <TiArrowSortedDown size={14} />
            </div>

            {/* Additional Buttons */}
            {showButtons && (
              <div className="flex flex-col items-center w-[40%] gap-2 absolute left-[31%] border-[1px] border-dropdownsborder/30 py-4 rounded-md top-10 transition-all ease-in-out duration-300 z-30 bg-dropdowns/30 backdrop-blur-md">
                {jobDetailsHeading.map((visible, index) => (
                  <React.Fragment key={index}>
                    <button
                      onClick={() => toggleColumnVisibilty("workName")}
                      className={`border-[1px] w-[90%] h-[6vh] rounded-md border-dropdownsborder/40 bg-buttonbgcolor text-[12px] font-semibold transition-all ease-out duration-300 cursor-pointer ${
                        visibleColumn.workName
                          ? "hover:border-selectedbutton hover:text-selectedbutton"
                          : " bg-selectedbutton border-none text-selectedtext"
                      }`}
                    >
                      {visible.workName}
                    </button>
                    <button
                      onClick={() => toggleColumnVisibilty("subWorkName")}
                      className={`border-[1px] w-[90%] h-[6vh] rounded-md border-dropdownsborder/40 bg-buttonbgcolor text-[12px] font-semibold transition-all ease-out duration-300 cursor-pointer ${
                        visibleColumn.subWorkName
                          ? "hover:border-selectedbutton hover:text-selectedbutton"
                          : "bg-selectedbutton border-none text-selectedtext"
                      }`}
                    >
                      {visible.subWorkName}
                    </button>
                    <button
                      onClick={() => toggleColumnVisibilty("jobPeriod")}
                      className={`border-[1px] w-[90%] h-[6vh] rounded-md border-dropdownsborder/40 bg-buttonbgcolor text-[12px] font-semibold transition-all ease-out duration-300 cursor-pointer ${
                        visibleColumn.jobPeriod
                          ? "hover:border-selectedbutton hover:text-selectedbutton"
                          : "bg-selectedbutton border-none text-selectedtext"
                      }`}
                    >
                      {visible.jobPeriod}
                    </button>
                    <button
                      onClick={() => toggleColumnVisibilty("clientName")}
                      className={`border-[1px] w-[90%] h-[6vh] rounded-md border-dropdownsborder/40 bg-buttonbgcolor text-[12px] font-semibold transition-all ease-out duration-300 cursor-pointer ${
                        visibleColumn.clientName
                          ? "hover:border-selectedbutton hover:text-selectedbutton"
                          : "bg-selectedbutton border-none text-selectedtext"
                      }`}
                    >
                      {visible.clientName}
                    </button>
                    <button
                      onClick={() => toggleColumnVisibilty("assignedStaff")}
                      className={`border-[1px] w-[90%] h-[6vh] rounded-md border-dropdownsborder/40 bg-buttonbgcolor text-[12px] font-semibold transition-all ease-out duration-300 cursor-pointer ${
                        visibleColumn.assignedStaff
                          ? "hover:border-selectedbutton hover:text-selectedbutton"
                          : "bg-selectedbutton border-none text-selectedtext"
                      }`}
                    >
                      {visible.assignedStaff}
                    </button>
                    <button
                      onClick={() => toggleColumnVisibilty("taggedManager")}
                      className={`border-[1px] w-[90%] h-[6vh] rounded-md border-dropdownsborder/40 bg-buttonbgcolor text-[12px] font-semibold transition-all ease-out duration-300 cursor-pointer ${
                        visibleColumn.taggedManager
                          ? "hover:border-selectedbutton hover:text-selectedbutton"
                          : "bg-selectedbutton border-none text-selectedtext"
                      }`}
                    >
                      {visible.taggedManager}
                    </button>
                  </React.Fragment>
                ))}
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
        {/*================================== pending job Table ==========================================*/}
        {selectedTable === "pendingStatus" && (
          <div
            id="pdf-table"
            className="bg-formbackgroundcolor shadow-md border-[1px] rounded-md mt-2 max-h-[400px] overflow-y-auto"
          >
            <table className="w-full">
              <thead className="sticky top-0 bg-tableheadbg z-10 text-tableheadtext">
                {jobDetailsHeading.map((job, index) => (
                  <tr
                    key={index}
                    className="flex justify-between items-center py-4 text-sm border-[1px] rounded-md"
                  >
                    {visibleColumn.workName && (
                      <th className="w-[17%]">{job.workName}</th>
                    )}
                    {visibleColumn.subWorkName && (
                      <th className="w-[17%]">{job.subWorkName}</th>
                    )}
                    {visibleColumn.jobPeriod && (
                      <th className="w-[17%]">{job.jobPeriod}</th>
                    )}
                    {visibleColumn.clientName && (
                      <th className="w-[17%]">{job.clientName}</th>
                    )}
                    {visibleColumn.assignedStaff && (
                      <th className="w-[17%]">{job.assignedStaff}</th>
                    )}
                    {visibleColumn.taggedManager && (
                      <th className="w-[17%]">{job.taggedManager}</th>
                    )}
                  </tr>
                ))}
                {/* {heading.map((job, index) => (
                  <tr
                    key={index}
                    className="flex justify-between items-center py-4 text-sm border-[1px] rounded-md"
                  >
                    <th className="w-[17%]">{job.workName}</th>
                    <th className="w-[17%]">{job.subWorkName}</th>
                    <th className="w-[17%]">{job.jobPeriod}</th>
                    <th className="w-[17%]">{job.clientName}</th>
                    <th className="w-[17%]">{job.assignedStaff}</th>
                    <th className="w-[17%]">{job.taggedManager}</th>
                  </tr>
                ))} */}
              </thead>
              <tbody className="">
                {clientData.map((clients, index) => (
                  <tr
                    key={index}
                    className="flex justify-between items-center py-4 text-xs border-b-[1px] hover:bg-tableheadbghover transition-all ease-in duration-300 font-semibold"
                  >
                    {visibleColumn.workName && (
                      <td className="w-[17%] text-center">
                        {clients.workName}
                      </td>
                    )}
                    {visibleColumn.subWorkName && (
                      <td className="w-[17%] text-center">
                        {clients.subWorkName}
                      </td>
                    )}
                    {visibleColumn.jobPeriod && (
                      <td className="w-[17%] text-center">
                        {clients.jobPeriod}
                      </td>
                    )}
                    {visibleColumn.clientName && (
                      <td className="w-[17%] text-center">
                        {clients.clientName}
                      </td>
                    )}
                    {visibleColumn.assignedStaff && (
                      <td className="w-[17%] text-center">
                        {clients.assignedStaff}
                      </td>
                    )}
                    {visibleColumn.taggedManager && (
                      <td className="w-[17%] text-center">
                        {clients.taggedManager}
                      </td>
                    )}
                  </tr>
                ))}
                {/* {data.map((item, index) => (
                  <tr
                    key={index}
                    className="flex justify-between items-center py-4 text-sm border-b-[1px] hover:bg-tableheadbghover transition-all ease-in duration-300 font-semibold"
                  >
                    <td className="py-2">{item.workName || item.Name || item.Name}</td>
                    <td className="py-2">{item.subWorkName || item.subName || item.subName}</td>
                    <td className="py-2">{item.jobPeriod || item.jobPeriods || item.jobPeriods}</td>
                    <td className="py-2">{item.clientName || item.client || item.client}</td>
                    <td className="py-2">{item.assignedStaff || item.assignedStaffs || item.assignedStaffs}</td>
                    <td className="py-2">{item.taggedManager || item.taggedManagers || item.taggedManagers}</td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        )}

        {/* Due Date Tables */}
        {selectedTable === "dueDateStatus" && (
          <div
            id="pdf-table"
            className="bg-formbackgroundcolor shadow-md border-[1px] rounded-md mt-2 max-h-[400px] overflow-y-auto"
          >
            <table className="w-full">
              <thead className="sticky top-0 bg-tableheadbg z-10 text-tableheadtext">
                {jobDetailsHeading.map((job, index) => (
                  <tr
                    key={index}
                    className="flex justify-evenly items-center py-4 text-sm border-[1px] rounded-md"
                  >
                    <th>{""}</th>
                    {visibleColumn.workName && (
                      <th className="w-[25%]"> {job.workName}</th>
                    )}
                    {visibleColumn.subWorkName && (
                      <th className="w-[25%]">{job.subWorkName}</th>
                    )}
                    {visibleColumn.jobPeriod && (
                      <th className="w-[25%]">{job.jobPeriod}</th>
                    )}
                  </tr>
                ))}
                {/* {heading.map((job, index) => (
                  <tr
                    key={index}
                    className="flex justify-between items-center py-4 text-sm border-[1px] rounded-md"
                  >
                    <th className="w-[17%]">{job.workName}</th>
                    <th className="w-[17%]">{job.subWorkName}</th>
                    <th className="w-[17%]">{job.jobPeriod}</th>
                    <th className="w-[17%]">{job.clientName}</th>
                    <th className="w-[17%]">{job.assignedStaff}</th>
                    <th className="w-[17%]">{job.taggedManager}</th>
                  </tr>
                ))} */}
              </thead>
              <tbody className="">
                {clientData.map((clients, index) => (
                  <tr
                    key={index}
                    className="flex justify-evenly items-center py-4 text-xs border-b-[1px] hover:bg-tableheadbghover transition-all ease-in duration-300 font-semibold"
                  >
                    <td>
                      {" "}
                      <RiAddBoxFill
                        size={20}
                        className="cursor-pointer hover:text-inputbordercolor transition-all ease-out duration-300"
                      />
                    </td>
                    {visibleColumn.workName && (
                      <td className="w-[25%] text-center">
                        {clients.workName}
                      </td>
                    )}
                    {visibleColumn.subWorkName && (
                      <td className="w-[25%] text-center">
                        {clients.subWorkName}
                      </td>
                    )}
                    {visibleColumn.jobPeriod && (
                      <td className="w-[25%] text-center">
                        {clients.jobPeriod}
                      </td>
                    )}
                  </tr>
                ))}
                {/* {data.map((item, index) => (
                  <tr
                    key={index}
                    className="flex justify-between items-center py-4 text-sm border-b-[1px] hover:bg-tableheadbghover transition-all ease-in duration-300 font-semibold"
                  >
                    <td className="py-2">{item.workName || item.Name || item.Name}</td>
                    <td className="py-2">{item.subWorkName || item.subName || item.subName}</td>
                    <td className="py-2">{item.jobPeriod || item.jobPeriods || item.jobPeriods}</td>
                    <td className="py-2">{item.clientName || item.client || item.client}</td>
                    <td className="py-2">{item.assignedStaff || item.assignedStaffs || item.assignedStaffs}</td>
                    <td className="py-2">{item.taggedManager || item.taggedManagers || item.taggedManagers}</td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Toaster richColors position="top-center" />
    </>
  );
};

export default PendingJobDetails;
