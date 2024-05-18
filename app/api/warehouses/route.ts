import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Warehouse from '@/models/Warehouse';

export async function GET() {
  try {
    await connectMongo();
    const warehouses = await Warehouse.find();
    return NextResponse.json(warehouses);
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(request: Request) {
  try {
    await connectMongo();
    const body = await request.json();
    const warehouse = new Warehouse(body);
    await warehouse.save();
    return NextResponse.json({ success: true, data: warehouse });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
