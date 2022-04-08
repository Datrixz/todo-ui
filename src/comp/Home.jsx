import { MdModeEditOutline } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Card from "./Card";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState('UnKnown');
  const getname = (name) => {
    setName(name)
  }
  return (<>
    <div className="absolute">     <Outlet context={{getname}}/> </div>

    <div className="h-screen flex flex-col items-center sm:justify-center">

      <div className="rounded shadow-xl w-screen max-w-3xl md:h-[90%]">
      <div className="flex flex-col justify-between shadow bg-[#F9C0C0]/50">
        <div className="flex justify-end text-5xl font-bold p-4">
          <FaRegUserCircle />
        </div>
        <div className="flex justify-between items-center p-2 pr-4 font-bold text-3xl mt-2">
          <span className="text-gray-700 font-bold">Hello, {name}</span>
         <Link to='namemodal'> <MdModeEditOutline /></Link>
        </div>
      </div>
      <div className="p-6">
        <div className=" text-2xl font-medium"> Task List : </div>
        <div id="cards">
          <Card />
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Home;
