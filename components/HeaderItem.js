import React from "react";

function HeaderItem({ title }) {
  return (
    <div className="hover:text-green-300 font-semibold cursor-pointer text-gray-300 p-2">
      {title}
    </div>
  );
}

export default HeaderItem;
