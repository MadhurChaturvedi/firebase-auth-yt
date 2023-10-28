import React, { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {logIn} = UserAuth();


  const handleSubmit = async (e) => {
     e.preventDefault();
     setEmail()
     try{
     await logIn(email,password)
     navigate('/account')
     }
     catch(e)
     {
      setError(e.message)
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
          <h1 className="text-2xl font-bold py-2 text-center">
            Login in to you Account
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Email Address</label>
            <input
              className="border transition-all p-3"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>

          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Password</label>
            <input
              className="border transition-all p-3"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <button className=" border transition-all text-white bg-blue-500  border-blue-500 hover:bg-blue-600 active:opacity-25 w-full p-4 my-2 hover:text-white hover:transition-all">
            Sign Up
          </button>
        </form>
        <p className="py-2 mt-3">
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className=" underline hover:text-blue-500 transition-all"
          >
            Sign Up.
          </Link>
        </p>
      </div>
    </div>
  );
}
