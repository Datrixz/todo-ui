import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

const NameModal = () => {
  const [Input, setInput] = useState(" ");
  const { getname } = useOutletContext();

 const entername = () => {
     getname(Input);
     setInput('')
 }
  return (
    <div
      className="flex flex-col w-screen h-screen bg-[#F9C0C0]/80 items-center justify-center relative "
    >
        <div className="flex flex-col items-center justify-center bg-white p-8 rounded-xl drop-shadow-md">
      <div className="text-2xl text-black mb-5">Enter your name:</div>
      <input
        type="text"
        value={Input}
        onChange={(e) => setInput(e.target.value)}
        className="p-1 w-[20%] min-w-[280px] border-2 border-[#e99191] outline-none rounded-lg"
      />
      <div className="mt-6">
        <Link
          to="/home"
          className="text-white shadow-md shadow-[#E99191]/50  rounded-2xl px-8 py-2  bg-[#E99191] font-medium"
        >
          Cancel
        </Link>
        <Link to="/home"
          onClick={entername}
          className="text-white shadow-md shadow-[#E99191]/50  rounded-2xl px-8 py-2 ml-6 bg-[#E99191] font-medium"
        >
          Confirm
        </Link>
      </div>
      </div>
    </div>
  );
};

export default NameModal;
