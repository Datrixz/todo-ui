import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Card from "./Card";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="h-[20vh] w-screen flex flex-col justify-between bg-[#F9C0C0]/50">
        <div className="flex justify-end text-5xl font-bold p-4">
          <FaRegUserCircle />
        </div>
        <div className="flex justify-between items-center p-2 pr-4 font-bold text-3xl h-max">
          <span className="text-gray-700">Hello, Minesh</span>
          <MdModeEditOutline />
        </div>
      </div>
      <div className="h-[80vh] w-screen bg-[#f8f2f2] p-6">
       <div className=" text-2xl font-medium"> Task List : </div>
       <Card/>
        </div>
    </div>
  );
};

export default Home;
