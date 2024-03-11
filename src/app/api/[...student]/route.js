import { NextResponse } from 'next/server';

export async function GET(request, content) {
  const strudentDetails = content.params.student;
  console.log(strudentDetails);
  return NextResponse.json({ result: strudentDetails }, { status: 200 });
}
