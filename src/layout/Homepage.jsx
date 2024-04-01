import React from 'react';
import '../styles.css'

export default function Homepage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">ยินดีต้อนระบบร้าน โสภาพักที่</h1>
        <p className="text-lg mb-6">ทำการล็อคอินหรือสมัคร เพื่อเข้าสู่ระบบ</p>
      </div>
    </div>
  );
}
