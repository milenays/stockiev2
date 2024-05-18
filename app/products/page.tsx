'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  stockcode: string;
  buyprice: number;
  saleprice: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/products/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data.success) {
      setProducts(products.filter(product => product._id !== id));
    } else {
      console.error(data.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="w-full max-w-lg bg-white p-8 shadow-md rounded">
        {products.map((product) => (
          <li key={product._id} className="mb-4">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>Stock Code: {product.stockcode}</p>
            <p>Buy Price: {product.buyprice}</p>
            <p>Sale Price: {product.saleprice}</p>
            <Link href={`/products/${product._id}/edit`} className="text-blue-500">Edit</Link>
            <button onClick={() => handleDelete(product._id)} className="text-red-500 ml-4">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
