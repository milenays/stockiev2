import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Product from '@/models/Product';

export async function GET(request: Request) {
  try {
    await connectMongo();
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json({ success: false, error: 'Product not found' });
    }
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
