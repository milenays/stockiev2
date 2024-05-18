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

// Tekil ürünü çekmek için GET endpointi
export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  try {
    await connectMongo();
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json({ success: false, error: 'Product not found' });
    }
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
