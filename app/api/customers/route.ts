import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Customer from '@/models/Customer';

export async function GET() {
  await connectMongo();
  const customers = await Customer.find();
  return NextResponse.json(customers);
}

export async function POST(request: Request) {
  const { name, email } = await request.json();
  await connectMongo();
  const newCustomer = new Customer({ name, email });
  await newCustomer.save();
  return NextResponse.json(newCustomer);
}
