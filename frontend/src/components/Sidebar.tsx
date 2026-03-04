import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 h-screen p-4 text-white">
      <div className="mb-8">
        <h1 className="text-xl font-semibold">ERP System</h1>
      </div>
      <nav>
        <ul>
          <li className="mb-4"><Link to="/dashboard">Dashboard</Link></li>
          <li className="mb-4"><Link to="/sales">Sales</Link></li>
          <li className="mb-4"><Link to="/inventory">Inventory</Link></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
