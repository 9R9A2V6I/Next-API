'use client';
import React, { useState, useEffect } from 'react';

export default function Update({ params }) {
  let id = params.id;
  // console.log(params.id);
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [age, setAge] = useState();

  useEffect(() => {
    getUserDetails();
  });

  const getUserDetails = async () => {
    let data = await fetch('http://localhost:3000/api/users/'+ id);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setLocation(data.result.location);
  };                                  

  const editUser = async () => {
    let result = await fetch('http://localhost:3000/api/users/' + id, {
      method: 'PUT',
      body: JSON.stringify({ name,location,age }),
    });

    result = await result.json();

    if (result.success) {
      alert('User Updated');
    } else {
      alert('Invalid Creditial');
    }
    console.log(result);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                  Login Form with Floating Labels
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Username"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label
                      for="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Username
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      value={location}
                      name="password"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <label
                      for="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Loaction
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="age"
                      name="age"
                      type="text"
                      value={age}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="User Age"
                      onChange={(e) => setAge(e.target.value)}
                    />
                    <label
                      for="age"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      age
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      onClick={editUser}
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
