'use client';

import { useState } from 'react';
import { Input, Button } from '@nextui-org/react';

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
    price: ''
  });

  const [error, setError] = useState('');

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
    if (!data.success) {
      setError(data.error);
    } else {
      setError('');
      // Ürün başarıyla eklendi
      console.log(data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form className="w-full max-w-lg bg-gray-700 p-8 shadow-md rounded" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">Name</label>
          <Input name="name" value={formData.name} onChange={handleChange} fullWidth />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="price">Price</label>
          <Input name="price" value={formData.price} onChange={handleChange} fullWidth />
        </div>
        {/* Diğer form alanları aynı şekilde */}
        <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</Button>
      </form>
    </div>
  );
}
