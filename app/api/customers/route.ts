// app/api/customers/route.ts

import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Customer from '@/models/Customer';

export async function GET() {
  try {
    await connectMongo();
    const customers = await Customer.find({});
    return NextResponse.json({ customers });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch customers' });
  }
}
