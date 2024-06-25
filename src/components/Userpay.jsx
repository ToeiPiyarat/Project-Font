import React, { useState } from 'react';
import QRCode from 'qrcode.react';

export default function Userpay() {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const paymentInfo = {
    amount: '50.00',
    currency: 'THB',
    description: 'กรุณาชำระเพื่อใช้บริการ'
  };

  const qrCodeValue = `${window.location.origin}/payment?amount=${paymentInfo.amount}&currency=${paymentInfo.currency}&description=${paymentInfo.description}`;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setFilePreview(URL.createObjectURL(selectedFile));
    } else {
      setFilePreview(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload submission here
    console.log('File to be uploaded:', file);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 p-4">
      <div className="bg-base-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">ชำระเงิน</h1>
        <div className="mb-6">
          <p className="text-lg">จำนวนเงิน: {paymentInfo.amount} {paymentInfo.currency}</p>
          <p className="text-lg">รายละเอียด: {paymentInfo.description}</p>
        </div>
        <div className="flex justify-center mb-6">
          <QRCode value={qrCodeValue} size={256} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">แนบสลิปการจ่ายเงิน:</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileChange} 
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          {filePreview && (
            <div className="mb-4">
              <img src={filePreview} alt="Payment Slip Preview" className="w-full h-auto rounded-md" />
            </div>
          )}
          <button type="submit" className="w-full btn btn-primary">
            ยืนยันการจ่ายเงิน
          </button>
        </form>
      </div>
    </div>
  );
}
