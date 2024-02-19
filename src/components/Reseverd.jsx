import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReservedContext, {
  ReservedContextProvider,
} from "../contexts/ReservedContext";

export default function ReservedDashboard() {
  return (
    <ReservedContextProvider>
      <Reseverd />
    </ReservedContextProvider>
  );
}

function Reseverd() {
  const { data } = useContext(ReservedContext);
  const navigate = useNavigate();
  const back = () => {
    navigate("/home");
  };
  const rester = () => {
    window.location.reload();
  };

  return (
    <div>
      {data?.map((item) => (
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
    <div className="overflow-x-auto relative">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th></th>
          </tr>
          <tr className="bg-red-50">
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-black">
              {item.user_id}
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-black">
              {item.carRegisteration}
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-black">
              {item.reserverDate}
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-black">
              {item.phone}
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-black">
              <button
                onClick={hdlDelete}
                className="btn btn-outline bg-green-500 hover:bg-green-600 focus:bg-green-600 hover:text-white focus:text-white top-0 right-0 mt-2 mr-2"
              >
                ยกเลิก
              </button>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
