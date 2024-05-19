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

export async function POST(request) {
  try {
    await connectMongo();
    const data = await request.json();
    const newCustomer = new Customer(data);
    await newCustomer.save();
    return NextResponse.json({ success: true, customer: newCustomer });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
