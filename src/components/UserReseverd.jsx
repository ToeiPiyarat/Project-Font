import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserReseverd() {
  const navigate = useNavigate();
  const linkToReserved = () => {
    navigate("/reserved");
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <h2 className="card-title mx-auto">ยินดีต้อนรับ</h2>
      <div className="card-body text-center">
        <h2 className="card-title mx-auto">ทำการจอง</h2>
        <p className="text-auto">ตอนนนี้ท่านเข้าสู่ระบบแล้ว</p>
        <p className="text-auto">สามารถทำการจองรถได้แล้ว</p>
        <div className="card-actions flex justify-center">
          <button onClick={linkToReserved} className="btn btn-primary">จองตรงนี้</button>
        </div>
      </div>
    </div>
  );
}
