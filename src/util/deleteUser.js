'use client';

import React from 'react';

export default function DeleteUser(props) {
  const id = props;
  console.log(id);

  const deleteUSer = async () => {
    let result = await fetch('http://localhost:3000/api/users/' + id, {
      method: 'delete',
    });
    result = await result.json();

    if (result.success) {
      alert('True');
    }
  };

  return (
    <>
      <button onClick={deleteUSer}>Delete</button>
    </>
  );
}
