'use client';
import { useEffect, useState } from 'react';

interface Supplier {
  _id: string;
  name: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
}

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  useEffect(() => {
    const fetchSuppliers = async () => {
      const res = await fetch('/api/suppliers');
      const data = await res.json();
      setSuppliers(data);
    };

    fetchSuppliers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Suppliers</h1>
      <ul className="w-full max-w-lg bg-white p-8 shadow-md rounded">
        {suppliers.map((supplier) => (
          <li key={supplier._id} className="mb-4">
            <h2 className="text-xl font-bold">{supplier.name}</h2>
            <p>Contact: {supplier.contact}</p>
            <p>Email: {supplier.email}</p>
            <p>Phone: {supplier.phone}</p>
            <p>Address: {supplier.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
