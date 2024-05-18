'use client';
import { useEffect, useState } from 'react';

interface Category {
  _id: string;
  name: string;
  description: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('/api/categories');
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <ul className="w-full max-w-lg bg-white p-8 shadow-md rounded">
        {categories.map((category) => (
          <li key={category._id} className="mb-4">
            <h2 className="text-xl font-bold">{category.name}</h2>
            <p>Description: {category.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
