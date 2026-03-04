import React from 'react';
import InventoryTable from './InventoryTable';
import InventoryForm from './InventoryForm';

const InventoryPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Inventory</h2>
      <InventoryTable />
      <InventoryForm />
    </div>
  );
};

export default InventoryPage;
