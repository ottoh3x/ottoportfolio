import React from "react";

function HeaderItem({ title }) {
  return (
    <div className="hover:text-green-500 hover:border-b-[2px] border-green-400 font-normal cursor-pointer text-gray-300 p-2  ">
      {title}
    </div>
  );
}

export default HeaderItem;
