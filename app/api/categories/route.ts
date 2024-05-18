import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Category from '@/models/Category';

export async function GET() {
  try {
    await connectMongo();
    const categories = await Category.find();
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(request: Request) {
  try {
    await connectMongo();
    const body = await request.json();
    const category = new Category(body);
    await category.save();
    return NextResponse.json({ success: true, data: category });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
