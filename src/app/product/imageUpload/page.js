'use client';

import { useState } from 'react';

export default function imageUp() {
  const [file, setFile] = useState();

  const uploadImg = async (e) => {
    e.preventDefault();
    console.log(file);

    const data = new FormData();
    data.set('file', file);
    let result = await fetch('api/upload', {
      method: 'POST',
      body: data,
    });

    // result = await result.json();
    if (result.success) {
      alert('File Upload');
    }
  };

  return (
    <>
      <h1>Upload Image</h1>
      <form action="" onSubmit={uploadImg}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button
          className="py-1 px-1  flex justify-center items-center h-10 w-20 hover:bg-red-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}
