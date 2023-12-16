"use client"
import React, { useState } from 'react';

export default function FeedbackForm(){
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [reviews, setReviews] = useState([
    { name: 'John Doe', feedback: 'Great experience with the course!' },
    { name: 'Jane Smith', feedback: 'Awesome content and great professor.' },
  ]);

  const handleFeedbackSubmit = (e:any) => {
    e.preventDefault();

    // Create a new review object
    const newReview = {
      name,
      feedback,
    };

    // Add the new review to the reviews array
    setReviews([...reviews, newReview]);

    // Clear the form fields
    setFeedback('');
    setName('');
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Feedback Form</h1>

      {/* Feedback Form */}
      <form onSubmit={handleFeedbackSubmit} className="mb-8">
      <div className="mb-4">
          <label htmlFor="feedback" className="block text-sm font-medium text-white-700">
            Feedback for course
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows = {4}
            className="mt-1 p-2 border rounded w-full text-black"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="feedback" className="block text-sm font-medium text-white-700">
            Feedback for Professor
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows = {4}
            className="mt-1 p-2 border rounded w-full text-black"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-sm font-medium text-white-700">
            Feedback for Course Support team
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows = {4}
            className="mt-1 p-2 border rounded w-full text-black"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Feedback
        </button>
      </form>

      {/* Other Reviews */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Other Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((review, index) => (
              <li key={index} className="mb-4">
                <p className="text-lg font-semibold">{review.name}</p>
                <p>{review.feedback}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

