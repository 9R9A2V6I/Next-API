import { NextResponse } from 'next/server';

import { writeFile } from 'fs/promises';
export async function POST(req) {
  const data = await req.fromData();
  const file = data.get('file');
  if (!file) {
    return NextResponse.json({ "message": "no iamge found", success: false });
  }

  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const path = `./public/${file.name}`;
  await writeFile(path.buffer);

  return NextResponse.json({ "message": 'File Upload', success: true });
}
