import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">ยินดีต้อนระบบร้าน โสภาพักที่</h1>
        <p className="text-lg mb-6">ทำการล็อคอินหรือสมัคร เพื่อเข้าสู่ระบบ</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-green-500 hover:bg-green-600 focus:bg-green-600 text-white py-2 px-4 rounded"
        >
          ล็อคอิน
        </button>
      </div>
    </div>
  );
}
