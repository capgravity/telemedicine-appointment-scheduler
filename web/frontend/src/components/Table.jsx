import React from "react";

const Table = ({ columns, data }) => {
  return (
    <table className="w-full text-left border-collapse border border-gray-200">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} className="border border-gray-200 px-4 py-2 bg-gray-100">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border border-gray-200 px-4 py-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;