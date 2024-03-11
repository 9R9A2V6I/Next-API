import { connectionsSrt } from '@/lib/db';
import { Product } from '@/lib/model/product';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function PUT(request, content) {
  const productId = content.params.id;
  const filter = { _id: productId };
  const payload = await request.json();

  console.log(payload);
  await mongoose.connect(connectionsSrt);
  const result = await Product.findOneAndUpdate(filter, payload);

  return NextResponse.json({ result, success: true });
}

export async function GET(request, content) {
  const productId = content.params.id;
  const record = { _id: productId };

  // console.log(payload);
  await mongoose.connect(connectionsSrt);
  const result = await Product.findById(record);

  return NextResponse.json({ result, success: true });
}
export async function DELETE(request, content) {
  const productId = content.params.id;
  const record = { _id: productId };

  // console.log(payload);
  await mongoose.connect(connectionsSrt);
  const result = await Product.deleteOne(record);

  return NextResponse.json({ result, success: true });
}

