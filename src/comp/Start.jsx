import { MdEditNote } from "react-icons/md";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <div className="flex flex-col justify-center items-center ring-4 ring-[#e99191]/70 rounded-3xl mx-4 py-8">
      <div className="flex flex-col justify-center items-center">
        <MdEditNote className="h-14 w-14 mb-2" />
        <div className="text-2xl font-medium">
          {" "}
          Get things done with <span className="font-bold">Todo</span>
        </div>
        <div className="text-center text-xl p-6">
          Task Management app that makes it easy to stay organised and manage
          your life
        </div>
        
      </div>
      <Link to="register" className="text-white shadow-lg shadow-[#E99191]/50  rounded-2xl px-10 py-4 mt-10 bg-[#E99191] font-medium">Get Started</Link>
    </div>
    </div>
  );
};

export default Start;
