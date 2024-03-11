import React from 'react';

async function getUserDataHandler(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data.result;
}

export default async function UserDetails({ params }) {
  const user = await getUserDataHandler(params.id); 
  console.log(user)

  return (
    <>
      <h1>User Details</h1>

      <div>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>{user.location}</h1>
      </div>
    </>
  );
}
