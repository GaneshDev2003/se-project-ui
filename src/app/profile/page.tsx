"use client"
import Navbar from "@/components/Navbar/navbar";
import React from "react";
import { useState } from "react";
export default function Home (){
    const [coursesEnrolled, setCoursesEnrolled] = useState([
        { id: 1, title: 'React Basics', instructor: 'John Doe' },
        { id: 2, title: 'JavaScript Fundamentals', instructor: 'Jane Smith' },
        { id: 3, title: 'Web Development with HTML/CSS', instructor: 'Sam Johnson' },
      ]);
    
      return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto flex justify-center mt-8 ">
            
              <div className="bg-white mt-12 p-8 rounded text-black w-96 z-10 y-40">
              <h1 className="text-3xl font-bold mb-4">My Profile</h1>
        
                {/* User Information (Hardcoded for demo) */}
                <div className="mb-6">
                  <p className="text-lg font-semibold">Name: John Doe</p>
                  <p className="text-lg font-semibold">Roll Number: 21f10001</p>
                  {/* Add more user information as needed */}
                  {/* Courses Enrolled */}
                
              <div>
                  <h2 className="text-2xl font-bold mb-4">Courses Enrolled</h2>
                  {coursesEnrolled.length === 0 ? (
                    <p>No courses enrolled yet.</p>
                  ) : (
                    <ul>
                      {coursesEnrolled.map((course) => (
                        <li key={course.id} className="mb-4">
                          <p className="text-lg font-semibold">{course.title}</p>
                          <p>Instructor: {course.instructor}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                </div>
              </div>
              
            </div></div>

            
          );
}