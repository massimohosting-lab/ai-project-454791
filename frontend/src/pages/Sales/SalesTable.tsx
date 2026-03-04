import React from 'react';
import { TableProps } from '../../types';

const SalesTable: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <table className="min-w-full bg-white">
      <thead className="bg-gray-800 text-white">
        <tr>
          {columns.map((col, index) => (
            <th key={index} className="py-2">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="text-center">
            {columns.map((col, colIndex) => (
              <td key={colIndex} className="py-2">{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
