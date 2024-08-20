"use client";
import React, { useState } from "react";
import { HiRefresh } from "react-icons/hi";
import { RxClipboardCopy } from "react-icons/rx";
import { SiMicrosoftexcel } from "react-icons/si";
import { VscFilePdf } from "react-icons/vsc";
import { TfiPrinter } from "react-icons/tfi";
import { TiArrowSortedDown } from "react-icons/ti";
import { toast } from "sonner";
import * as XLSX from "xlsx";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Prints = ({
  selectedTable,
  setSelectedTable,
  pendingJobs,
  pendingJobsData,
  statusJobs,
  statusJobsData,
  visibleColumns,
  setVisibleColumns,
  toggleButtons,
  showButtons,
}) => {
  const copyToClipboard = () => {
    let tableText = "";
    const headings =
      selectedTable === "pendingStatus" ? pendingJobs : statusJobs;
    const data =
      selectedTable === "pendingStatus" ? pendingJobsData : statusJobsData;

    tableText += Object.values(headings).join("\t") + "\n";
    tableText += data.map((row) => Object.values(row).join("\t")).join("\n");

    navigator.clipboard.writeText(tableText).then(() => {
      toast.info("Data copied to clipboard!");
    });
  };

  const handleExportToExcel = () => {
    const data =
      selectedTable === "pendingStatus" ? pendingJobsData : statusJobsData;
    const ws = XLSX.utils.json_to_sheet(data);
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

  const printTable = () => {
    const printContent = document.querySelector("#pdf-table").outerHTML;
    const printWindow = window.open("", "", "height=1000,width=1000");
    printWindow.document.write(
      `<html>
        <head>
          <title>Pending Job Reports</title>
          <style>
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
              border-bottom: 1px solid #ddd;
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
      </html>`
    );
    printWindow.document.close();
    printWindow.print();
  };

  const handleRadioChange = (event) => {
    setSelectedTable(event.target.value);
    const initialVisibleColumns = Object.keys(
      event.target.value === "pendingStatus" ? pendingJobs : statusJobs
    ).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setVisibleColumns(initialVisibleColumns);
  };

  const toggleColumnVisibility = (column) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  const currentHeadings =
    selectedTable === "pendingStatus" ? pendingJobs : statusJobs;

  return (
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
          onClick={toggleButtons}
          className="flex justify-center items-center gap-3 border-[1px] w-[25%] h-[35px] rounded-md border-printbordercolor font-bold text-filtertextcolor text-xs px-2 hover:border-none hover:bg-black hover:text-textwhite transition-all ease-in-out duration-300 cursor-pointer"
        >
          <span>Visibility Column</span>
          <TiArrowSortedDown size={20} />
        </div>
        {showButtons && (
          <div className="absolute flex flex-col justify-start items-start gap-3 top-[7vh] left-[31%] w-[35%] h-[45vh] shadow-lg border-[1px] rounded-md bg-white/40 backdrop-blur-md px-3 py-4 overflow-y-auto z-30 ">
            {Object.keys(currentHeadings).map((key) => (
              <button
                key={key}
                onClick={() => toggleColumnVisibility(key)}
                className={`flex justify-center items-center w-[100%] border-[1px] shadow-sm border-formbordercolor rounded-md px-3 py-2 text-[12px] hover:bg-selectedbutton hover:text-formbackgroundcolor transition-all ease-in-out duration-300 cursor-pointer ${
                  visibleColumns[key]
                    ? ""
                    : "bg-selectedbutton text-selectedtext"
                }`}
              >
                {currentHeadings[key]}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Prints;
