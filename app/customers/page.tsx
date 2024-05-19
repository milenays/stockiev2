'use client';
import { useEffect, useState } from 'react';

interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const CustomersPage = () => {
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
    <div>
      <h1>Customers</h1>
      {customers.length > 0 ? (
        <ul>
          {customers.map((customer) => (
            <li key={customer._id}>{customer.name} - {customer.email} - {customer.phone} - {customer.address}</li>
          ))}
        </ul>
      ) : (
        <p>No customers found</p>
      )}
    </div>
  );
};

export default CustomersPage;
