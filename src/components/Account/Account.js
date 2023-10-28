import {React ,useState}  from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
export default function Signup() {

  const {user, logout} = UserAuth();
  const navigate = useNavigate();
  const handleLogouy = async () => {
     try{
      await logout() 
      navigate('/')
  
     }
     catch(e)
     {
       console.log(e.message)
     }
  }

  return (
    <div
      style={{
        width: "50%",
        height: "59%",
        background: "#FFF",
        borderRadius: "15px",
        padding: "5px",
        flexWrap: "wrap",
        color: "black",
      }}
      className="shadow-md pt-2 border-5"
    >
      <div className=" max-w-[700px] mx-auto my-6-4">
        <div>
          <h1 className="text-2xl font-bold py-2 text-center">Account</h1>
          <div className=" flex justify-center items-center flex-col mt-28 ">
          <p className=" font-extrabold ">User Email: {user && user.email}</p>
          <button onClick={handleLogouy} className=" border-black transition-all border px-10 py-5 my-4 hover:bg-red-600 hover:text-white active:opacity-25">Logout</button>
        </div>
        </div>
      </div>
    </div>
  );
}
