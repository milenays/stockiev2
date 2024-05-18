import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Product from '@/models/Product';

// Tüm ürünleri çekmek için GET endpointi
export async function GET() {
  try {
    await connectMongo();
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
