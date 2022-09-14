import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";

function Footer() {
  const SocialShare = [
    { Social: <FaFacebookF size={18}/>, link: "https://www.facebook.com/" },
    { Social: <FaLinkedinIn size={18}/>, link: "https://www.linkedin.com/" },
    { Social: <FaInstagram size={18}/>, link: "https://www.instagram.com/" },
    { Social: <FaTwitter size={18}/>, link: "https://twitter.com/" },
    {Social: <FaGithub size={18}/>, link: "https://github.com/ottoh3x"}
  ];
  return (
    <div className="px-10 py-7 w-full flex flex-col lg:flex-row gap-4 justify-between items-center text-center text-[#979090] bg-[#ffffff05]">
      <div>
        OTTO PROGRAMMER
      </div>

      <div className="flex gap-2">
      {SocialShare.map((val, i) => (
        <span className="rounded-full border-[2px] cursor-pointer border-[#979090] p-2 hover:bg-[#008bff] transition-all ease-in-out duration-500 hover:-translate-y-1 text-[#ffffff]" key={i}>
          <a className="" href={`${val.link}`}>{val.Social}</a>
        </span>
      ))}</div>

      <p>Copyright © 2022 Otto Programmer. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
