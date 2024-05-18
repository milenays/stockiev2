'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Product {
  _id: string;
  name: string;
  stockcode: string;
  barcode: string;
  deporaf: string;
  depoalan: string;
  category: string;
  brand: string;
  buyprice: number;
  marketprice: number;
  saleprice: number;
  quantity: number;
  fakequantity: number;
  criticalquantity: number;
  images: string[];
  descriptions: string;
  desi: number;
  supplier: string;
  tags: string[];
}

export default function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p>Stock Code: {product.stockcode}</p>
      <p>Barcode: {product.barcode}</p>
      <p>Depot Shelf Code: {product.deporaf}</p>
      <p>Depot Area Code: {product.depoalan}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p>Buy Price: {product.buyprice}</p>
      <p>Market Price: {product.marketprice}</p>
      <p>Sale Price: {product.saleprice}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Fake Quantity: {product.fakequantity}</p>
      <p>Critical Quantity: {product.criticalquantity}</p>
      <p>Description: {product.descriptions}</p>
      <p>Desi: {product.desi}</p>
      <p>Supplier: {product.supplier}</p>
      <p>Tags: {product.tags.join(', ')}</p>
    </div>
  );
}
