import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ReservedContext = createContext();
function ReservedContextProvider(props) {
  const [data, setData] = useState(null)

  useEffect(() => {
    const showReserved = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) {return}
        const rs = await axios.get("http://localhost:8889/reserved/show", {
          headers: {Authorization: `Bearer ${token}`}
        });
        // console.log(rs.data)
        setData(rs.data)

      } catch (error) {
        alert(error);
      }
    };
    showReserved();

  }, []);

  const deleteReserved = async (reservedId) => {
    try {
        const re = await axios.delete(`http://localhost:8889/reserved/delete/${reservedId}`);
        if (re.status === 200) {
        }

    } catch (error) {
        alert(error.message)
        
    }
};
    

  return (
    <ReservedContext.Provider value={{ data, deleteReserved }}>
      {props.children}
    </ReservedContext.Provider>
  );
}

export default ReservedContext;
export { ReservedContextProvider };
