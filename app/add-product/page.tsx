'use client';
import { useState } from 'react';

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    stockcode: '',
    barcode: '',
    deporaf: '',
    depoalan: '',
    category: '',
    brand: '',
    buyprice: 0,
    marketprice: 0,
    saleprice: 0,
    quantity: 0,
    fakequantity: 0,
    criticalquantity: 0,
    images: [''],
    descriptions: '',
    desi: 0,
    supplier: '',
    tags: [''],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form className="w-full max-w-lg bg-white p-8 shadow-md rounded" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
        </div>
        {/* Diğer form alanları aynı şekilde */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </form>
    </div>
  );
}
