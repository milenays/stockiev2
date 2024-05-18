'use client';
import { useEffect, useState } from 'react';

interface Warehouse {
  _id: string;
  name: string;
  location: string;
  capacity: number;
  description: string;
}

export default function Warehouses() {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      const res = await fetch('/api/warehouses');
      const data = await res.json();
      setWarehouses(data);
    };

    fetchWarehouses();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Warehouses</h1>
      <ul className="w-full max-w-lg bg-white p-8 shadow-md rounded">
        {warehouses.map((warehouse) => (
          <li key={warehouse._id} className="mb-4">
            <h2 className="text-xl font-bold">{warehouse.name}</h2>
            <p>Location: {warehouse.location}</p>
            <p>Capacity: {warehouse.capacity}</p>
            <p>Description: {warehouse.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
