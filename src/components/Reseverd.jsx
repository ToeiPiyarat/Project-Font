import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ReservedContext from "../contexts/ReservedContext";
import CarNumberContext from "../contexts/CarNumberContext";

export default function ReservedDashboard() {
  return <Reserved />;
}

function Reserved() {
  const { data } = useContext(ReservedContext);
  const { car } = useContext(CarNumberContext);

  const navigate = useNavigate();
  // console.log(data);

  // console.log(car);

  return (
    <div>
      {data && car && data.length > 0 ? (
        <div>
          <div className="p-5 border w-4/6 min-w-[100px] mx-auto rounded mt-5 bg-red-100 max-w-[30vw]">
            <div className="text-3xl mb-5">รายการจอง</div>
            <button
              className="btn bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white px-4 py-2 rounded-md mb-4"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              อ่านคำเตือน
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-2xl">คำเตือน</h3>
                <p className="py-4 text-lg">
                  เมื่อท่านได้ทำการจองที่จอดรถแล้ว
                  จะต้องมาก่อนเวลาหรือให้ตรงตามเวลาที่กำหนด
                  หากมาเกินตามเวลาที่เลือกจองไว้
                  ทางแอดมินจะทำการลบข้อมูลของท่านออกจากการจองโดยไม่สนเงื่อนไข
                </p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <div className="relative flex justify-center">
              <div className="mx-auto max-w-[700px] my-4">
                <table className="table-auto bg-white border border-green-200 rounded-lg">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="px-3 py-2 text-center text-xs font-medium text-gray-600 uppercase tracking-wider border-b border-gray-200">
                        ทะเบียน
                      </th>
                      <th className="px-3 py-2 text-center text-xs font-medium text-gray-600 uppercase tracking-wider border-b border-gray-200">
                        ยี่ห้อ
                      </th>
                      <th className="px-3 py-2 text-center text-xs font-medium text-gray-600 uppercase tracking-wider border-b border-gray-200">
                        รุ่น
                      </th>
                      <th className="px-3 py-2 text-center text-xs font-medium text-gray-600 uppercase tracking-wider border-b border-gray-200">
                        วัน เวลาที่จอง
                      </th>
                      <th className="px-3 py-2 text-center text-xs font-medium text-gray-600 uppercase tracking-wider border-b border-gray-200"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <ReservedItem key={item.id} item={item} car={car}/>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid place-items-center">
          <p>ไม่มีรายการจอง</p>
        </div>
      )}
      <div className="grid place-items-center space-y-4">
        <button
          onClick={() => navigate("/home")}
          className="btn btn-outline bg-green-500 hover:bg-green-600 focus:bg-green-600 hover:text-white focus:text-white"
        >
          กลับหน้าหลัก
        </button>
      </div>
    </div>
  );
}

function ReservedItem({ item, car }) {
  const { brand, model } = car.find(el => el.vehicleNumber === item.vehicleNumber);
  const { deleteReserved } = useContext(ReservedContext);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("คุณต้องการยกเลิกการจองแล้วหรือไม่?");
    if (isConfirmed) {
      deleteReserved(id);
      alert("ท่านได้ยกเลิกการจองแล้ว");
      history.go(0); // รีโหลดหน้า
    }
  };

  const editReserved = () => {
    navigate("/edit/"+item.id);
  };

  return (
    <tr key={item.id} className="bg-green-50">
      <td className="px-3 py-2 text-center border-b border-gray-200">
        {item.vehicleNumber}
      </td>
      <td className="px-3 py-2 text-center border-b border-gray-200">
        {brand}
      </td>
      <td className="px-3 py-2 text-center border-b border-gray-200">
        {model}
      </td>
      <td className="px-3 py-2 text-center border-b border-gray-200">
        {new Date(item.reserverDate).toLocaleString("th-TH")}
      </td>
      <td className="px-3 py-2 text-center border-b border-gray-200">
    <div className="flex gap-2">
        <button onClick={editReserved} className="bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-600 text-white px-2 py-1 rounded-md">
            แก้ไข
        </button>
        <button onClick={() => handleDelete(item.id)} className="bg-red-500 hover:bg-red-600 focus:bg-red-600 text-white px-2 py-1 rounded-md">
            ยกเลิก
        </button>
    </div>
</td>
    </tr>
  );
}