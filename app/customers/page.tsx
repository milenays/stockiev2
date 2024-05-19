import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Table, Button, Input } from '@nextui-org/react';

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zipCode: ''
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      const res = await fetch('/api/customers');
      const data = await res.json();
      setCustomers(data);
    };

    fetchCustomers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCustomer)
      });
      if (res.ok) {
        const data = await res.json();
        setCustomers([...customers, data]);
        setNewCustomer({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          country: '',
          zipCode: ''
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8 bg-gray-800 text-white min-h-screen">
      <h1 className="text-2xl mb-4">Customers</h1>
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-700 p-4 rounded-lg shadow-md">
        <h2 className="text-xl mb-4">Add Customer</h2>
        <div className="grid grid-cols-2 gap-4">
          <Input
            fullWidth
            label="Full Name"
            name="fullName"
            value={newCustomer.fullName}
            onChange={handleChange}
            className="bg-gray-600"
          />
          <Input
            fullWidth
            label="Email"
            name="email"
            value={newCustomer.email}
            onChange={handleChange}
            className="bg-gray-600"
          />
          <Input
            fullWidth
            label="Phone"
            name="phone"
            value={newCustomer.phone}
            onChange={handleChange}
            className="bg-gray-600"
          />
          <Input
            fullWidth
            label="Address"
            name="address"
            value={newCustomer.address}
            onChange={handleChange}
            className="bg-gray-600"
          />
          <Input
            fullWidth
            label="City"
            name="city"
            value={newCustomer.city}
            onChange={handleChange}
            className="bg-gray-600"
          />
          <Input
            fullWidth
            label="Country"
            name="country"
            value={newCustomer.country}
            onChange={handleChange}
            className="bg-gray-600"
          />
          <Input
            fullWidth
            label="Zip Code"
            name="zipCode"
            value={newCustomer.zipCode}
            onChange={handleChange}
            className="bg-gray-600"
          />
        </div>
        <Button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700">
          Add Customer
        </Button>
      </form>

      {customers.length > 0 ? (
        <Table aria-label="Customers Table" className="bg-gray-700">
          <Table.Header>
            <Table.Column>Full Name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Phone</Table.Column>
            <Table.Column>Address</Table.Column>
            <Table.Column>City</Table.Column>
            <Table.Column>Country</Table.Column>
            <Table.Column>Zip Code</Table.Column>
          </Table.Header>
          <Table.Body>
            {customers.map((customer) => (
              <Table.Row key={customer._id}>
                <Table.Cell>{customer.fullName}</Table.Cell>
                <Table.Cell>{customer.email}</Table.Cell>
                <Table.Cell>{customer.phone}</Table.Cell>
                <Table.Cell>{customer.address}</Table.Cell>
                <Table.Cell>{customer.city}</Table.Cell>
                <Table.Cell>{customer.country}</Table.Cell>
                <Table.Cell>{customer.zipCode}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : (
        <p>No customers found</p>
      )}
    </div>
  );
};

export default CustomersPage;
