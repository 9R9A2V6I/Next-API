'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function DeleteBtn(props) {
  // console.log(props.id);

  const id = props.id;

  const router = useRouter();

  const deleteRecord = async () => {
   
    let response = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'Delete',
    });
    response = await response.json();
    if (response.success) {
      router.push('/product');
    }
  };
  return (
    <>
      <button onClick={deleteRecord}>Delete</button>
    </>
  );
}
