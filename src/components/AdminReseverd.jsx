import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReservedContext from "../contexts/ReservedContext";

export default function ReservedDashboard() {
  return (
      <Reseverd />
  );
}

function Reseverd() {
  const { adminData } = useContext(ReservedContext);



  const navigate = useNavigate();
  const back = () => {
    navigate("/admin");
  };
  const rester = () => {
    window.location.reload();
  };

  return (
    <div>
      {adminData?.map((item) => (
        <ReseverdItem key={item.id} item={item} />
      ))}
      <div className="grid place-items-center">
        <button
          onClick={rester}
          className="btn btn-outline bg-green-500 hover:bg-green-600 focus:bg-green-600 hover:text-white focus:text-white"
        >
          รีเซ็ดหน้าจอ{" "}
        </button>
        <button
          onClick={back}
          className="btn btn-outline bg-green-500 hover:bg-green-600 focus:bg-green-600 hover:text-white focus:text-white"
        >
          กลับหน้าหลัก{" "}
        </button>
      </div>
    </div>
  );
}

function ReseverdItem({ item }) {
  const { deleteReserved } = useContext(ReservedContext);

  const hdlDelete = () => {
    deleteReserved(item.id);
    history.go(0);
    alert("ท่านได้ยกเลิกการจองแล้ว");
  };

  return (
    <div className="overflow-x-auto relative mt-4">
  <table className="w-full table-auto">
    <thead>
      <tr className="bg-green-100">
        <th className="px-6 py-4 text-center text-xs font-medium text-gray-600 uppercase tracking-wider border-b border-gray-200">
          User ID
        </th>
        <th className="px-6 py-4 text-center text-xs font-medium text-gray-600 uppercase tracking-wider border-b border-gray-200">
          Car Registration
        </th>
        <th className="px-6 py-4 text-center text-xs font-medium text-gray-600 uppercase tracking-wider border-b border-gray-200">
          Reservation Date
        </th>
        <th className="px-6 py-4 text-center text-xs font-medium text-gray-600 uppercase tracking-wider border-b border-gray-200">
          Phone
        </th>
        <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider border-b border-gray-200">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white">
        <td className="px-6 py-4 text-center whitespace-nowrap border-b border-gray-200">
          {item.user_id}
        </td>
        <td className="px-6 py-4 text-center whitespace-nowrap border-b border-gray-200">
          {item.carRegisteration}
        </td>
        <td className="px-6 py-4 text-center whitespace-nowrap border-b border-gray-200">
          {item.reserverDate}
        </td>
        <td className="px-6 py-4 text-center whitespace-nowrap border-b border-gray-200">
          {item.phone}
        </td>
        <td className="px-6 py-4 text-center whitespace-nowrap border-b border-gray-200">
          <button
            onClick={hdlDelete}
            className="btn btn-outline bg-red-500 hover:bg-red-600 focus:bg-red-600 hover:text-white focus:text-white px-3 py-1 rounded-md"
          >
            ยกเลิก
          </button>
        </td>
      </tr>
      {/* Add more <tr> here if needed */}
    </tbody>
  </table>
</div>
  );
}
