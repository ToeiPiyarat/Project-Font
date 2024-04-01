import React from 'react';
import '../styles.css'

export default function Homepage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome to Parking Recommendation</h1>
        <p className="text-lg mb-6">Find the best parking spots near you!</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
}
