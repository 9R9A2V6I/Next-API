import { user } from '@/util/db';
import { NextResponse } from 'next/server';

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
  const payload = await request.json();
  if (!payload.name ||!payload.location || !payload.age) {
    return NextResponse.json(
      { result: 'Requied Field not found', success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: 'New User Created', success: true },
    { status: 200 }
  );
}
