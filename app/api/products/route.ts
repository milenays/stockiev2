import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Product from '@/models/Product';

export async function POST(request: Request) {
  try {
    await connectMongo();
    const body = await request.json();
    const product = new Product(body);
    await product.save();
    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
