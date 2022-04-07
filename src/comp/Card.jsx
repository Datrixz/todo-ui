import React from "react";
import { GiConfirmed } from "react-icons/gi";
import { RiImageAddFill } from "react-icons/ri";
import { MdOutlineAddBox } from "react-icons/md";

const Card = () => {
  const arr = [
    {
      list: "Buy some chocolate",
      checked: true,
    },
    {
        list: "Complete the portfolio",
        checked: true,
    },
    {
        list: "Complete class notes",
        checked: false,
    },
    {
        list: "Make a github repo for lab",
        checked: false,
    },
    {
        list: "Complete the project",
        checked: false,
    },
  ];
  const list = arr.map((e, i) => {
    return (
      <div className="flex mt-2">
        <input checked={e.checked} type="checkbox" name={i} id={i} className="w-6"/>
        <label htmlFor={i} className="ml-3 text-xl" style={{
          textDecoration : `${e.checked?"line-through":""}`,
        }}>
          {e.list}
        </label>
        <br />
      </div>
    );
  });

  return (
    <div className="bg-white w-[90vw] shadow-md rounded-lg p-4 mt-4">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span className="text-2xl">Today's Work</span>
          <nav className="flex justify-evenly children:pl-4 children:text-2xl">
            <button type="button">
              <GiConfirmed />
            </button>
            <button type="button">
              <RiImageAddFill />
            </button>
            <button type="button">
              <MdOutlineAddBox />
            </button>
          </nav>
        </div>
        <form className="mt-4">{list}</form>
      </div>
    </div>
  );
};

export default Card;
