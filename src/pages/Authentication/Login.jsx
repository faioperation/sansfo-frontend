import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../assets/Vector.png";
import { useNavigate } from "react-router";
// import useAxiosSecure from "../../hooks/useAxios";
// import { useAuth } from "../Provider/AuthProvider";
// import Cookies from "js-cookie";
// import axios from "axios";
// import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  // const axiosSecure = useAxiosSecure();
  // const { login } = useAuth();
  const [loading, setLoading] = useState(false)

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);

    // setLoading(true);
    // try {

    //   const res = await axios.post(
    //     "https://test11.fireai.agency/auth/login/",
    //     data
    //   );

    //   Cookies.set("accessToken", res.data.tokens.access);

    //   login(res.data);

    //   navigate("/");
    //   toast.success("Login Successful!");

    // } catch (error) {

    //   console.log(error.response?.data);
    //   toast.error("Something went wrong!");

    // }
    // setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f8f9] text-[#2F3337]">

      <div className="w-[650px] bg-white border border-gray-200 rounded-2xl p-10 shadow-sm">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">

          <div className="flex flex-col items-center gap-2 mb-3">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <h1 className="text-3xl font-semibold text-primary">LoGo</h1>
          </div>

          <h2 className="text-lg font-semibold text-primary">
            Login to Account
          </h2>

          <p className="text-sm text-[#64748B] mt-1">
            Start with new journey
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div>

            <label className="text-sm text-[#64748B]">
              Email
            </label>

            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-white border border-gray-300 text-[#2F3337] placeholder-[#A0AAB5] focus:outline-none focus:ring-2 focus:ring-primary"
            />

          </div>

          {/* Password */}
          <div>

            <label className="text-sm text-[#64748B]">
              Password
            </label>

            <div className="relative mt-2">

              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-[#2F3337] placeholder-[#A0AAB5] pr-12 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Toggle Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>

            </div>

            {/* Forgot Password */}
            <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={() => navigate("/auth/forget-password")}
                className="text-sm text-[#64748B] hover:text-[#2F3337] transition"
              >
                Forgot password?
              </button>
            </div>

          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full"
          >
            {/* Continue */}
            {/* {loading ? "Processing..." : "Log In"} */} Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;