import React from "react";
import Login from "./components/Login/Login";
import Account from "./components/Account/Account";
import Signup from "./components/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div
      style={{
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        background: "#898888",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <h1 className="text-center text-3xl font-bold"> Firse Auth & Context</h1> */}
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={
          <ProtectedRoute>
             <Account />
          </ProtectedRoute>
         }
           />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

// 34.42
