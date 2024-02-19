import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReseverdForm() {
  const [input, setInput] = useState({
    reserverDate: new Date(),
    carRegisteration: "",
    phone: "",
  });

  const navigate = useNavigate();
  const back = () => {
    navigate("/home");
  };

  const hdlChange = (e) => {
    setInput((prv) => ({
      ...prv,
      [e.target.name]: e.target.value,
    }));
  };

  const createReserve = async (input) => {
    try {
      // alert(typeof input.reserverDate)
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
      if (rs === 200) {
        alert("Reserved Successfully");
      }
    } catch (error) {
      alert(error);
    }
  };

  const Reserved = (e) => {
    createReserve(input);
    e.preventDefault();

    navigate("/reserved/show");
  };

  return (
    <div>
      <div>
        <div className="p-5 border w-4/6 min-w-[100px] mx-auto rounded mt-5 bg-red-100 max-w-[30vw]">
          <div className="text-3xl mb-5">ทำการจอง</div>
          <form onSubmit={Reserved} className="flex flex-col gap-2">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">เลขทะเบียน</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                name="carRegisteration"
                value={input.carRegisteration}
                onChange={hdlChange}
              />
            </label>
            <label className="form-control w-full max-w-[220px] ">
              <div className="label">
                <span className="label-text">วัน-เดือน-ปี</span>
              </div>
              <input
                type="datetime-local"
                name="reserverDate"
                value={input.reserverDate}
                onChange={hdlChange}
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
                value={input.phone}
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
    </div>
  );
}
