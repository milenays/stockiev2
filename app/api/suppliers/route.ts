import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Supplier from '@/models/Supplier';

export async function GET() {
  try {
    await connectMongo();
    const suppliers = await Supplier.find();
    return NextResponse.json(suppliers);
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(request: Request) {
  try {
    await connectMongo();
    const body = await request.json();
    const supplier = new Supplier(body);
    await supplier.save();
    return NextResponse.json({ success: true, data: supplier });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
