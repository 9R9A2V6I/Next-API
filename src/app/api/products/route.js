import { connectionsSrt } from '@/lib/db';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import { Product } from '@/lib/model/product';

export async function GET() {
  let data = [];
  let success = true;

  try {
    await mongoose.connect(connectionsSrt);
    data = await Product.find();
  } catch (err) {
    data = { result: 'error' };
    success = false;
  }

  return NextResponse.json({ result: data,success} );
}

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionsSrt);
  let product = new Product(payload);
  const result = await product.save();
  return NextResponse.json({ result, success: true });
}
