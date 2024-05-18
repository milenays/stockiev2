import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Order from '@/models/Order';

export async function GET() {
  try {
    await connectMongo();
    const orders = await Order.find();
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(request: Request) {
  try {
    await connectMongo();
    const body = await request.json();
    const order = new Order(body);
    await order.save();
    return NextResponse.json({ success: true, data: order });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
