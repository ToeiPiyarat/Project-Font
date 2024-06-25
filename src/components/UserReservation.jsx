import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReservedSelection() {
  const navigate = useNavigate();

  const handleSelection = (spot) => {
    navigate(`/reserved/form/${spot}`);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl text-center font-semibold mb-4">เลือกพื้นที่จอง</h2>
      <div className="grid grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((spot) => (
          <button
            key={spot}
            onClick={() => handleSelection(spot)}
            className="btn w-full h-20 text-xl bg-gray-200 text-gray-700 border border-gray-400"
          >
            {spot}
          </button>
        ))}
      </div>
    </div>
  );
}
