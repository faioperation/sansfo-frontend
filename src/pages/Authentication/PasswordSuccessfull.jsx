import React from "react";
import { CheckCircle } from "lucide-react";
import logo from "../../assets/Vector.png";
import { useNavigate } from "react-router";

const PasswordSuccessfull = () => {
  const navigate = useNavigate();




  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800">

      {/* Card */}
      <div className="w-[650px]  bg-white border border-gray-200 rounded-2xl shadow-xl p-10">

        {/* Logo */}
        <div className="flex flex-col justify-center items-center gap-2 mb-6">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <h1 className="text-3xl font-semibold text-primary">LoGo</h1>
        </div>

        {/* Title */}
        <h2 className="text-3xl text-center text-primary font-semibold mb-3">
          Password Updated <br />
          <span className="mt-2">Successfully!</span>
        </h2>

        {/* Description */}
        <p className="text-[#A4A4A4] text-md max-w-[400px] mx-auto mb-6 text-center">
          Create a new password. Ensure it differs from previous ones for security
        </p>

        {/* Button */}
        <button onClick={() => navigate('/')} className="btn-primary">
          Continue
        </button>

      </div>

    </div>
  );
};

export default PasswordSuccessfull;