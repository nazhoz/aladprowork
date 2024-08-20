"use client";
import React from "react";
// import { MdArrowDropDown, MdArrowDropUp  } from "react-icons/md";

const Tables = ({ headings, rows, visibleColumns, onSort, sortConfig }) => {
  return (
    <div>
      <table className="w-full">
        <thead className="sticky top-0 bg-tableheadbg z-10 text-tableheadtext">
          <tr className="flex justify-between items-center py-4 text-sm border-[1px] rounded-md">
            {Object.keys(headings).map(
              (key) =>
                visibleColumns[key] && (
                  <th
                    key={key}
                    className="w-[17%] cursor-pointer"
                    onClick={() => onSort && onSort(key)}
                  >
                    {headings[key]}
                    {sortConfig && sortConfig.key === key && (
                      <span>
                        {sortConfig.direction === 'ascending' ? ' 🔼' : ' 🔽'}
                      </span>
                    )}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={Object.keys(headings).length} className="text-center py-4">
                No data available
              </td>
            </tr>
          ) : (
            rows.map((row, index) => (
              <tr
                key={index}
                className="flex justify-between items-center py-4 text-xs border-b-[1px] hover:bg-tableheadbghover transition-all ease-in duration-300 font-semibold"
              >
                {Object.keys(headings).map(
                  (key) =>
                    visibleColumns[key] && (
                      <td key={key} className="w-[17%] text-center">
                        {row[key]}
                      </td>
                    )
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
