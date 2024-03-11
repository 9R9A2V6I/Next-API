import { user } from '@/util/db';
import { NextResponse } from 'next/server';

export function GET(request, content) {
  const data = user;

  const userData = data.filter((user) => user.id == content.params.id);
  return NextResponse.json(
    userData.length == 0
      ? { result: 'No Data Found', success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  );
}

export async function PUT(request, content) {
  let payload = await request.json();
  payload.id = content.params.id;
  console.log(payload);
  if (!payload.name || !payload.loaction|| !payload.age) {
    return NextResponse.json(
      { result: 'Requied Field not found', success: false },
      { status: 400 }
    );
  }
  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}

export function DELETE(request,content){
  let id =content.params.id;
  if(id){
    return NextResponse.json({result:"User Deleted",success:true},{status:200})
  }
  else{
    return NextResponse.json({result:"Internal Error,Please try afetr sometimes",success:false},{status:400})
  }
}
