'use client';
import { useEffect, useState } from 'react';

interface Customer {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
}

export default function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const res = await fetch('/api/customers');
      const data = await res.json();
      setCustomers(data);
    };

    fetchCustomers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <ul className="w-full max-w-lg bg-white p-8 shadow-md rounded">
        {customers.map((customer) => (
          <li key={customer._id} className="mb-4">
            <h2 className="text-xl font-bold">{customer.fullName}</h2>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <p>Address: {customer.address}, {customer.city}, {customer.country}, {customer.zipCode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
