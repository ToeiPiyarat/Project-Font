import React, { useContext, useState } from 'react';
import AuthContext from '../contexts/AuthContext';

export default function UserProfire() {

    const [isUpdate, setIsUpdate] = useState(false)
    const {user, updateProfile} = useContext(AuthContext)

    const [update, setUpdate] = useState({
        email: user.email,
        phone: user.phone
    })

    const hdlClick = (e) => {
        e.preventDefault()
        setIsUpdate(!isUpdate)
    }

    const hdlChange = (e) => {
        setUpdate(prevUpdate => ({
            ...prevUpdate,
            [e.target.name]: e.target.value
        }));
    }
    

    const hdlSubmit = (e) => {
        e.preventDefault()
        updateProfile(update)
        setIsUpdate(false)
        window.location.reload();
    }

    const hdlCancel = () => {
        setIsUpdate(false)
    }

    
  return (
   <div>
     {isUpdate ? (<div className="max-w-md mx-auto">
      <form onSubmit={hdlSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">อีเมลล์</label>
          <input onChange={hdlChange} type="text" name="email" value={update.email} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">เบอร์โทรศัพท์</label>
          <input onChange={hdlChange} type="text" name="phone" value={update.phone} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="text-center">
          <button  className="btn btn-primary">บันทึกข้อมูล</button>
          <button onClick={hdlCancel} className="btn btn-primary">ยกเลิก</button>
        </div>
      </form>
    </div>) 
    : 
    (<div className="max-w-md mx-auto">
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">อีเมลล์</label>
          <input readOnly  type="text" value={update.email} name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-gray-400" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">เบอร์โทรศัพท์</label>
          <input readOnly type="tel" name="phone" value={update.phone} className="mt-1 p-2 border border-gray-300 rounded-md w-full text-gray-400" />
        </div>
        <div className="text-center">
          <button onClick={hdlClick} className="btn btn-primary">แก้ไขข้อมูล</button>
        </div>
      </form>
    </div>)}
   </div>
  );
}