'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Table, Button, Input } from '@nextui-org/react';

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      const res = await fetch('/api/customers');
      const data = await res.json();
      setCustomers(data);
    };
    fetchCustomers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch('/api/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const newCustomer = await res.json();
      setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="p-8 bg-gray-800 text-white min-h-screen">
      <h1 className="text-2xl mb-4">Customers</h1>
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-700 p-4 rounded-lg shadow-md">
        <h2 className="text-xl mb-4">Add Customer</h2>
        <Input
          name="fullName"
          label="Full Name"
          onChange={handleChange}
          value={formData.fullName}
          fullWidth
        />
        <Input
          name="email"
          label="Email"
          onChange={handleChange}
          value={formData.email}
          fullWidth
        />
        <Input
          name="phone"
          label="Phone"
          onChange={handleChange}
          value={formData.phone}
          fullWidth
        />
        <Input
          name="address"
          label="Address"
          onChange={handleChange}
          value={formData.address}
          fullWidth
        />
        <Input
          name="city"
          label="City"
          onChange={handleChange}
          value={formData.city}
          fullWidth
        />
        <Input
          name="zipCode"
          label="Zip Code"
          onChange={handleChange}
          value={formData.zipCode}
          fullWidth
        />
        <Input
          name="country"
          label="Country"
          onChange={handleChange}
          value={formData.country}
          fullWidth
        />
        <Button type="submit" className="mt-4">
          Add Customer
        </Button>
      </form>
      <Table
        aria-label="Customer List"
        css={{ height: 'auto', minWidth: '100%' }}
      >
        <Table.Header>
          <Table.Column>Full Name</Table.Column>
          <Table.Column>Email</Table.Column>
          <Table.Column>Phone</Table.Column>
          <Table.Column>Address</Table.Column>
          <Table.Column>City</Table.Column>
          <Table.Column>Zip Code</Table.Column>
          <Table.Column>Country</Table.Column>
        </Table.Header>
        <Table.Body>
          {customers.length > 0 ? (
            customers.map((customer) => (
              <Table.Row key={customer._id}>
                <Table.Cell>{customer.fullName}</Table.Cell>
                <Table.Cell>{customer.email}</Table.Cell>
                <Table.Cell>{customer.phone}</Table.Cell>
                <Table.Cell>{customer.address}</Table.Cell>
                <Table.Cell>{customer.city}</Table.Cell>
                <Table.Cell>{customer.zipCode}</Table.Cell>
                <Table.Cell>{customer.country}</Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan={7} css={{ textAlign: 'center' }}>
                No customers found
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CustomersPage;
