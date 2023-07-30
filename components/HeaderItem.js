import React from "react";

function HeaderItem({ title }) {
  return (
    <div className={`${title === "Contact" ? "hover:text-white hover:font-light" : "hover:text-[#007afd]"} ${title === "Home" && "border-b-[3px] border-[#007afd] text-[#007afd]" }  navitem cursor-pointer text-[#ffffff]`}>
      {title}
    </div>
  );
}

export default HeaderItem;
