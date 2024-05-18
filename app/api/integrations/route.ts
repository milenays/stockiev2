import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Integration from '@/models/Integration';

export async function POST(request: Request) {
  try {
    await connectMongo();
    const body = await request.json();
    const integration = new Integration(body);
    await integration.save();
    return NextResponse.json({ success: true, data: integration });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function GET() {
  try {
    await connectMongo();
    const integrations = await Integration.find();
    return NextResponse.json(integrations);
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
