import { useState } from "react";
import { MdOutlineAddBox,MdOutlineCheckBox, MdOutlineDelete } from "react-icons/md";

const Card = () => {
  const [myInput, setMyInput] = useState('')
  const [mylist, setMylist] = useState([]);

  let addItem = () =>{
      let temparr = [...mylist,{list:myInput, checked:false}];
      setMylist(temparr);
      setMyInput('')
  }

  let toggleCheck = (delitem) => {
    let temparr = mylist.map((item) => {
      if (item === delitem) {
        return { list: item.list, checked: !item.checked };
      } else {
        return item;
      }
    });
    setMylist(temparr);
  };

  const allChecked = () => {
    let temparr = mylist.map((item) => (
      { list: item.list, checked: true }
    ));
    setMylist(temparr);
  };

  const allDelete = () => {
    let temparr = mylist.filter((item)=>item.checked===false);
    setMylist(temparr)
  }

  const list = mylist.map((item, index) => {
    return (
      <div className="flex mt-2 items-center" key={index}>
        <input
          checked={item.checked}
          type="checkbox"
          name={index}
          id={index}
          className="w-6 h-6"
          onChange={() => toggleCheck(item)}
        />
        <label
          htmlFor={index}
          className="ml-3 text-xl"
          style={{
            textDecoration: `${item.checked ? "line-through" : ""}`,
          }}
        >
          {item.list}
        </label>
        <br />
      </div>
    );
  });

  return (
    <div className="bg-white max-w-xl shadow-md rounded-lg p-4 mt-4">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span className="text-2xl">Today's Work</span>
          <nav className="flex justify-evenly">
            <button
              type="button"
              onClick={allChecked}
              className="text-green-500 hover:text-green-700"
            >
              <MdOutlineCheckBox className="w-7 h-7" />
            </button>
            <button type="button" onClick={allDelete} className="text-red-500 hover:text-red-700 ml-4">
              <MdOutlineDelete className="w-7 h-7"/>
            </button>
           
          </nav>
        </div>
        <div className="mt-6 md:mt-2 flex items-center">
          <input type="text" value={myInput} onChange={(e)=>setMyInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addItem()}  className="p-1 border-2 border-[#e99191] outline-none rounded-lg align-bottom"/>
          <button className="ml-2" onClick={addItem}><MdOutlineAddBox className="w-8 h-8 text-blue-500 hover:text-blue-700"/></button>
        </div>
        <form className="mt-4">{list}</form>
      </div>
    </div>
  );
};

export default Card;
