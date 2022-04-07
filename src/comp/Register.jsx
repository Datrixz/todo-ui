import React from "react";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-around items-center sm:p-8 sm:ring-4 sm:ring-[#e99191]/70 sm:rounded-3xl">
        <div className="flex flex-col justify-center items-center text-4xl font-bold mb-20 text-stone-800">
          Welcome Onboard
        </div>
        <div className="flex flex-col children:mb-3 mb-8 justify-center items-center">
          <input
            type="text"
            placeholder="Enter your Email "
            className="p-4 rounded-full shadow-md w-[90vw] max-w-[560px] focus:outline-none focus:ring-1 focus:ring-[#e99191]"
          />
          <input
            type="text"
            placeholder="Enter your Password"
            className="p-4 rounded-full shadow-md w-[90vw] max-w-[560px] focus:outline-none focus:ring-1 focus:ring-[#e99191]"
          />
          <a href="/" className="font-bold text-[#d77373] self-start pl-6">
            Forgot Password?
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link to="/home" className="text-white text-lg shadow-lg shadow-[#E99191]/50  rounded-2xl px-10 py-4 font-medium bg-[#e99191]">
            Register
          </Link>
          <div className="font-medium text-lg mt-4 text-slate-500">
            Already have an account?
          </div>
          <button className="font-bold text-lg text-[#d77373]">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
