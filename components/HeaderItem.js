import React from "react";

function HeaderItem({ title }) {
  return (
    <div className={`${title === "Contact" ? "hover:text-white hover:font-normal" : "hover:text-[#007afd]"} ${title === "Home" && "border-b-[2px] border-[#007afd]" } font-normal cursor-pointer text-[#ffffff]`}>
      {title}
    </div>
  );
}

export default HeaderItem;
