"use client";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";
import sampleData from "../../json/sample.json";
import Link from "next/link";
import { AiOutlineForm } from "react-icons/ai";
import Tables from "../Tables/Tables";

const LeaveTables = () => {
  const user = "Wade Wilson";
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const leaveHead = sampleData.leave_Heading;
  const leaveBody = sampleData.leave_body;
  const visibleColumns = {
    LeaveType: true,
    fromDate: true,
    toDate: true,
    totalDays: true,
    status: true,
    reason: true,
    remarks: true,
    actions: true,
  };

  const handleSort = (columnKey) => {
    let direction = "ascending";
    if (sortConfig.key === columnKey && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key: columnKey, direction });
  };

  const sortedRows = [...leaveBody].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });
  return (
    <>
      <div className="bg-formbackgroundcolor shadow-md border-[1px] rounded-md w-[100%]">
        <div className="w-[100%] border-b-[1px] border-b-formbordercolor px-4 py-4 flex justify-between items-center  text-md font-bold text-inputbordercolor">
          <span>
            Leave History of <span>{user.toUpperCase()}</span>
          </span>
          <Link href="/leaves/leaveforms">
            <div className="px-3 py-2 flex justify-center items-center gap-2 text-xs rounded-md border-[1px] border-inputs text-leavebuttonborder hover:bg-leavebuttonhover hover:border-leavebuttonhover hover:text-formbackgroundcolor transition-all ease-out duration-300">
              <AiOutlineForm size={18} />
              <span>Add Leave</span>
            </div>
          </Link>
        </div>
        <div></div>
      </div>
      <div className="bg-formbackgroundcolor shadow-md border-[1px] rounded-md mt-2 max-h-[450px] overflow-y-auto">
        <Tables
          headings={leaveHead}
          rows={sortedRows}
          visibleColumns={visibleColumns}
          onSort={handleSort}
          sortConfig={sortConfig}
        />
      </div>
      <div className="flex justify-end items-center px-5 py-3 text-sm gap-2 font-semibold">
        <span>Show</span>
        <span className="border-[1px] border-inputs px-3 rounded-md text-leavebuttonhover">
          {sortedRows.length}
        </span>
        <span>Entries</span>
      </div>
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
};

export default LeaveTables;
