"use client"
import Navbar from '@/components/Navbar/navbar';
import React from 'react';
import '@/app/globals.css'
export default function Home ()  {

  return (
    <div>
        <Navbar></Navbar>
        <div className="container mx-auto mt-8">

<h1 className="text-3xl font-bold mb-4">Dashboard</h1>
<h2 className="text-xl my-3 font-semibold mb-2">Recommendations</h2>
<div className="bg-white m-2 p-4 rounded-lg shadow-md">
    <h2 className = "text-xl text-black">Course 1</h2>
    <a className = "text-black">Enroll</a>
  </div>
  <div className="bg-white m-2 p-4 rounded-lg shadow-md">
    <h2 className = "text-xl text-black">Course 2</h2>
    <a className = "text-black">Enroll</a>
  </div>
  <div className="bg-white m-2 p-4 rounded-lg shadow-md">
    <h2 className = "text-xl text-black">Course 3</h2>
    <a className = "text-black">Enroll</a>
  </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Card 1 */}
  <div>
  <h2 className="text-xl font-semibold mb">Enrolled Courses</h2>
  <div className="bg-white m-2 p-4 rounded-lg shadow-md">
    <h2 className = "text-xl text-black">Course 1</h2>
    <a className = "text-black">Details</a>
  </div>
  
  

  {/* Card 2 */}
  <div className="bg-white m-2 p-4 rounded-lg shadow-md">
    <h2 className = "text-xl text-black">Course 2</h2>
    <a className = "text-black">Details</a>
  </div>

  {/* Card 3 */}
  <div className="bg-white m-2 p-4 rounded-lg shadow-md">
    <h2 className = "text-xl text-black">Course 3</h2>
    <a className = "text-black">Details</a>
  </div>
  </div>
  <div>
  <h2 className="text-xl font-semibold mb">Submit Feedback</h2>
  <div className="bg-white m-2 p-4 rounded-lg shadow-md">
    <h2 className = "text-xl text-black">Course 1</h2>
    <a className = "text-black">Submit Feedback</a>
  </div>
  
  

  {/* Card 2 */}
  <div className="bg-white m-2 p-4 rounded-lg shadow-md">
    <h2 className = "text-xl text-black">Course 2</h2>
    <a className = "text-black">Submit Feedback</a>
  </div>

  {/* Card 3 */}
  <div className="bg-white m-2 p-4 rounded-lg shadow-md">
    <h2 className = "text-xl text-black">Course 3</h2>
    <a className = "text-black">Submit Feedback</a>
  </div>
  </div>
  <div>
  <h2 className="text-xl font-semibold mb">Completed Courses</h2>
  <div className="bg-white m-2 p-4 rounded-lg shadow-md">
    <h2 className = "text-xl text-black">Course 1</h2>
    <a className = "text-black">Details</a>
  </div>
  
  

  {/* Card 2 */}
  <div className="bg-white m-2 p-4 rounded-lg shadow-md">
    <h2 className = "text-xl text-black">Course 2</h2>
    <a className = "text-black">Details</a>
  </div>

  {/* Card 3 */}
  <div className="bg-white m-2 p-4 rounded-lg shadow-md">
    <h2 className = "text-xl text-black">Course 3</h2>
    <a className = "text-black">Details</a>
  </div>
  </div>
</div>
</div>
    </div>
    
  );
};
