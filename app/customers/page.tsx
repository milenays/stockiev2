'use client';

import { useState, useEffect } from 'react';

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      const res = await fetch('/api/customers');
      const data = await res.json();
      setCustomers(data);
    };

    fetchCustomers();
  }, []);

  const addCustomer = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, email, phone, address, city, country, zipCode }),
    });

    const newCustomer = await res.json();
    setCustomers([...customers, newCustomer]);
    setFullName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCity('');
    setCountry('');
    setZipCode('');
  };

  return (
    <div>
      <h1>Customers</h1>
      <form onSubmit={addCustomer}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
        <button type="submit">Add Customer</button>
      </form>
      {customers.length > 0 ? (
        <ul>
          {customers.map((customer) => (
            <li key={customer._id}>
              {customer.fullName} - {customer.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No customers found</p>
      )}
    </div>
  );
}
