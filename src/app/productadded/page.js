'use client';
import { useState } from 'react';

export default function productAdd() {
  const [name, setName] = useState();
  const [className, setClassName] = useState();
  const [lastName, setLastName] = useState();
  const [subject, setSubject] = useState();

  const addUser = async () => {
    // console.log({ name, lastName, className, subject });
    let result = await fetch('http://localhost:3000/api/products', {
      method: 'POST',
      body: JSON.stringify({ name, lastName, className, subject }),
    });
    result = await result.json();
    if (result.success) {
      alert('New Product added');
    } else {
      alert('Something Went Wrong');
    }
  };

  return (
    <>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              GoFinance
            </h1>
            <p className="text-white mt-1">
              The most popular peer to peer lending at SEA
            </p>
            <button
              type="submit"
              className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 bg-black">
              <input
                className="pl-2 outline-none border-none bg-black"
                type="text"
                name=""
                id=""
                placeholder=" name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 bg-black">
              <input
                className="pl-2 outline-none border-none bg-black"
                type="text"
                name=""
                id=""
                placeholder=" LastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 bg-black">
              <input
                className="pl-2 outline-none border-none  bg-black "
                type="text"
                name=""
                id=""
                placeholder="Class"
                onChange={(e) => setClassName(e.target.value)}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 bg-black">
              <input
                className="pl-2 outline-none border-none  bg-black"
                type="text"
                name=""
                id=""
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            {/* <div className="flex items-center border-2 py-2 px-3 rounded-2xl bg-black">
							
							<input className="pl-2 outline-none border-none bg-black" type="text" name="" id="" placeholder="Password" />
      </div> */}
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              onClick={addUser}
            >
              Submit
            </button>
           
          </form>
        </div>
      </div>
    </>
  );
}
