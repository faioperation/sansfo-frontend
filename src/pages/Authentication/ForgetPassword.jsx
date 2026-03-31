import React from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router";
import logo from "../../assets/Vector.png";
// import { useMutation } from "@tanstack/react-query";
// import useAxiosSecure from "../../hooks/useAxios";
// import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const navigate = useNavigate();
  // const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800">
      
      <div className="w-[650px] h-[500px] bg-white border border-gray-200 rounded-2xl shadow-xl p-10">

        {/* Header */}
        <div className="flex flex-col items-center mb-8">

          <div className="flex flex-col items-center gap-2 mb-3">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <h1 className="text-3xl font-semibold text-primary">LoGo</h1>
          </div>

          <h2 className="text-lg font-semibold text-primary">
            Forgot Password?
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Please enter your email to get verification code
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          <div>
            <label className="text-sm text-gray-600">
              Email
            </label>

            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                Email is required
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn-primary"
          >
            Continue
          </button>

        </form>

      </div>

    </div>
  );
};

export default ForgetPassword;