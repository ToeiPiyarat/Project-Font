import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const navigate = useNavigate();
        const ok = () => {
        navigate("/home");
        };
        const back = () => {
        navigate("/home");
        };
  return (
    <div>
      <div className="p-5 border w-4/6 min-w-[100px] mx-auto rounded mt-5 bg-red-100 max-w-[30vw]">
      <div className="text-3xl mb-5">แก้ไขข้อมูล</div>
      <form className="flex flex-col gap-2">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">ชื่อผู้ใช้</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="username"
            
          />
        </label>
  
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">เบอร์โทร</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="phone"
            
          />
        </label>
        <div className="flex gap-5 ">
          <button onClick={ok} type="submit" className="btn btn-outline bg-green-500 hover:bg-green-600 focus:bg-green-600 hover:text-white focus:text-white">แก้ไข</button>
          <button onClick={back} className="btn btn-outline bg-green-500 hover:bg-green-600 focus:bg-green-600 hover:text-white focus:text-white">ยกเลิก</button>
        </div>
        </form>
      </div>
    </div>
  )
}
