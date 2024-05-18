'use client';
import { useEffect, useState } from 'react';

interface Order {
  _id: string;
  orderNumber: string;
  fullName: string;
  address1: string;
  city: string;
  status: string;
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch('/api/orders');
      const data = await res.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <ul className="w-full max-w-lg bg-white p-8 shadow-md rounded">
        {orders.map((order) => (
          <li key={order._id} className="mb-4">
            <h2 className="text-xl font-bold">{order.orderNumber}</h2>
            <p>Full Name: {order.fullName}</p>
            <p>Address: {order.address1}, {order.city}</p>
            <p>Status: {order.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
