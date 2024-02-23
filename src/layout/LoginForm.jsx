import axios from 'axios'
import {useState} from "react";
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom';
import '../styles.css'

export default function LoginForm() {
  const { setUser, user } = useAuth()
  const [input, setInput] = useState({
    username : '', 
    password : ''
  })
  
  const navigate = useNavigate()
  

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      const rs = await axios.post('http://localhost:8889/auth/login', input)
      // console.log(rs.data.token)
      localStorage.setItem('token', rs.data.token)
      const rs1 = await axios.get('http://localhost:8889/auth/me', {
        headers : { Authorization : `Bearer ${rs.data.token}` }
       
      })
      setUser(rs1.data)
      // console.log(user)
      // navigate('/home')
      // // console.log(rs1.data)
      
      // navigate('/admin')
      
    }catch(err) {
      console.log( err.message)
    }
  
  }

  return (
    <div className="p-5 border w-2/6 min-w-[100px] mx-auto rounded mt-5 bg-red-100 max-w-[30vw]">
      <div className="flex justify-center">
        <img src="car.jpg" className="w-24 h-24 rounded-full border border-black" /></div>
      <div className="text-3xl mb-5 flex-grow-0 text-center">จองที่จอดรถออนไลน์</div>
      <div className="text-3xl mb-5 flex-grow-0 text-center">กรุณาเข้าสู่ระบบของท่าน</div>
      <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">ชื่อผู้ใช้งาน</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="username"
            value={input.username}
            onChange={ hdlChange }
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">รหัสผ่าน</span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
            name="password"
            value={ input.password }
            onChange={ hdlChange }
          />
        </label>

        <div className="flex gap-5 ">
        <button type="submit" className="btn btn-outline bg-green-500 hover:bg-green-600 focus:bg-green-600 hover:text-white focus:text-white">ล็อคอิน</button>
        </div>
      </form>
    </div>
  );
}
