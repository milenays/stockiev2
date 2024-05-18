import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Customer from '@/models/Customer';

export async function GET() {
  try {
    await connectMongo();
    const customers = await Customer.find();
    return NextResponse.json(customers);
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(request: Request) {
  try {
    await connectMongo();
    const body = await request.json();
    const customer = new Customer(body);
    await customer.save();
    return NextResponse.json({ success: true, data: customer });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
