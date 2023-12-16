import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-start">
        <div className="text-white text-xl font-bold">Course Recommender</div>
        <a className="text-white text-l font-bold mx-2" href = "/dashboard">Dashboard</a>
        <a className="text-white text-l font-bold mx-2" href = "/profile">Profile</a>
        <a className="text-white text-l font-bold mx-2" href = "/feedback">Feedback</a>
        <div className="flex items-center"> 
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 border rounded mr-2"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;