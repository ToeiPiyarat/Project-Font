import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarNumberContext from "../contexts/CarNumberContext";
import ReservedContext from "../contexts/ReservedContext";

export default function ReseverdForm() {
  const { car } = useContext(CarNumberContext);
  const { adminData } = useContext(ReservedContext);
  // console.log(data);
  const [input, setInput] = useState({
    reserverDate: new Date().toISOString().slice(0, 16),
    vehicleNumber: "",
    status: "RESERVED",
  });

  // const {brand, model} = car?.find(item => item)

  // console.log(model);

  const navigate = useNavigate();
  const back = () => {
    navigate("/home");
  };

  const hdlChange = (e) => {
    setInput((prv) => ({
      ...prv,
      [e.target.name]: e.target.value,
    }));
    // console.log(input);
  };

  const createReserve = async (input) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const rs = await axios.post(
        "http://localhost:8889/reserved/creacte",
        input,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (rs.status === 200) {
        alert("Reserved Successfully");
      }
    } catch (error) {
      alert(error);
    }
  };

  const Reserved = async (e) => {
    e.preventDefault();
    if (adminData?.length >= 10) {
      alert('ไม่สามารถจองได้แล้ว')
      navigate('/reserved/show')
    }else {
      await createReserve(input);
      navigate("/reserved/show");
      history.go(0);
    }

  };

  // console.log(input.vehicleNumber);
  const foundCar = car?.find(
    (item) => item.vehicleNumber === input.vehicleNumber
  );
  const brand = foundCar ? foundCar.brand : "";
  const model = foundCar ? foundCar.model : "";
  // console.log(brand);

  return (
    <div>
      <div className="p-5 border w-4/6 min-w-[100px] mx-auto rounded mt-5 bg-red-100 max-w-[30vw]">
        <div className="text-3xl mb-5">ทำการจอง</div>
        <form onSubmit={Reserved} className="flex flex-col gap-2">
          <label className="form-control w-full max-w-xs">
            <div className="dropdown">
              <select
                name="vehicleNumber"
                value={input.vehicleNumber}
                onChange={hdlChange}
                className="btn m-1 bg-transparent"
              >
                <option value="">เลือกหมายเลขทะเบียน</option>
                {car &&
                  car.map((item) => (
                    <option key={item.id} value={item.vehicleNumber}>
                      {item.vehicleNumber}
                    </option>
                  ))}
              </select>
            </div>
          </label>
          <label className="form-control w-full max-w-[220px] ">
            <div className="label">
              <span className="label-text">ยี่ห้อ</span>
            </div>
            <input type="text" value={brand} readOnly />
          </label>
          <label className="form-control w-full max-w-[220px] ">
            <div className="label">
              <span className="label-text">รุ่น</span>
            </div>
            <input type="text" value={model} readOnly />
          </label>
          <label className="form-control w-full max-w-[220px] ">
            <div className="label">
              <span className="label-text">วัน เวลาที่จอง</span>
            </div>
            <input
              type="datetime-local"
              name="reserverDate"
              value={input.reserverDate}
              onChange={hdlChange}
            />
          </label>
          <div className="flex gap-5 ">
            <button
              type="submit"
              className="btn btn-outline bg-green-500 hover:bg-green-600 focus:bg-green-600 hover:text-white focus:text-white"
            >
              ตกลง{" "}
            </button>
            <button
              onClick={back}
              className="btn btn-outline bg-green-500 hover:bg-green-600 focus:bg-green-600 hover:text-white focus:text-white"
            >
              ยกเลิก{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
