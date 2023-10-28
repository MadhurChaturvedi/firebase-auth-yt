import {React ,useState}  from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import  Dashboard  from "../../dashboard/Dashboard";
// Components


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

    <>
    <Dashboard />
    </>
  );
}






{/* <button onClick={handleLogouy} className=" border-black transition-all border px-10 py-5 my-4 hover:bg-red-600 hover:text-white active:opacity-25">Logout</button> */}