import React from 'react';
import { FormProps } from '../../types';
import { useFormik } from 'formik';

const SalesForm: React.FC<FormProps> = ({ initialValues, onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-4">
      <div className="mb-2">
        <label htmlFor="productName" className="block">Product Name</label>
        <input
          type="text"
          id="productName"
          name="productName"
          onChange={formik.handleChange}
          value={formik.values.productName}
          className="p-2 border border-gray-400"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="quantity" className="block">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          onChange={formik.handleChange}
          value={formik.values.quantity}
          className="p-2 border border-gray-400"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
    </form>
  );
};

export default SalesForm;
