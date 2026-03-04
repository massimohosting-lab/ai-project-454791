import React from 'react';
import SalesTable from './SalesTable';
import SalesForm from './SalesForm';

const SalesPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Sales</h2>
      <SalesTable />
      <SalesForm />
    </div>
  );
};

export default SalesPage;
