import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Customer from '@/models/Customer';

export async function POST(request: Request) {
  try {
    const { name, email, phone } = await request.json();
    await connectMongo();
    const customer = new Customer({ name, email, phone });
    await customer.save();
    return NextResponse.json({ success: true, customer });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
