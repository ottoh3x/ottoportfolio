import React from "react";

function HeaderItem({ title }) {
  return (
    <div className={`${title === "Contact" ? "hover:text-white hover:font-normal" : "hover:text-green-500"} font-normal cursor-pointer text-[#ffffff]`}>
      {title}
    </div>
  );
}

export default HeaderItem;
