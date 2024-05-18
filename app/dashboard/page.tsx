'use client';
import { useEffect, useState } from 'react';

interface Summary {
  productsCount: number;
  ordersCount: number;
  customersCount: number;
  suppliersCount: number;
}

export default function Dashboard() {
  const [summary, setSummary] = useState<Summary>({
    productsCount: 0,
    ordersCount: 0,
    customersCount: 0,
    suppliersCount: 0,
  });

  useEffect(() => {
    const fetchSummary = async () => {
      const [productsRes, ordersRes, customersRes, suppliersRes] = await Promise.all([
        fetch('/api/products'),
        fetch('/api/orders'),
        fetch('/api/customers'),
        fetch('/api/suppliers'),
      ]);

      const productsData = await productsRes.json();
      const ordersData = await ordersRes.json();
      const customersData = await customersRes.json();
      const suppliersData = await suppliersRes.json();

      setSummary({
        productsCount: productsData.length,
        ordersCount: ordersData.length,
        customersCount: customersData.length,
        suppliersCount: suppliersData.length,
      });
    };

    fetchSummary();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 w-full max-w-lg bg-white p-8 shadow-md rounded">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold">Products</h2>
          <p className="text-2xl">{summary.productsCount}</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold">Orders</h2>
          <p className="text-2xl">{summary.ordersCount}</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold">Customers</h2>
          <p className="text-2xl">{summary.customersCount}</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold">Suppliers</h2>
          <p className="text-2xl">{summary.suppliersCount}</p>
        </div>
      </div>
    </div>
  );
}
