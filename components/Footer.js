import Image from "next/image";
import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  const SocialShare = [
    { Social: <FaFacebookF size={18} />, link: "https://www.facebook.com/" },
    { Social: <FaLinkedinIn size={18} />, link: "https://www.linkedin.com/" },
    { Social: <FaInstagram size={18} />, link: "https://www.instagram.com/" },
    { Social: <FaTwitter size={18} />, link: "https://twitter.com/" },
    { Social: <FaGithub size={18} />, link: "https://github.com/ottoh3x" },
  ];
  return (
    <div className="py-3 lg:px-10 lg:py-5 w-full  text-center text-[#c0bbbb] bg-[#ffffff05]">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 justify-between items-center">
        <div>
          <Image src="/Ghost.svg" height={40} width={120} objectFit="contain" />
        </div>
        <p>Copyright © 2022 Otto Programmer. All Rights Reserved.</p>
        <div className="flex gap-2">
          {SocialShare.map((val, i) => (
            <span
              className="rounded-full border-[2px] cursor-pointer border-[#979090] p-2 hover:bg-[#008bff] transition-all ease-in-out duration-500 hover:-translate-y-1 text-[#ffffff]"
              key={i}
            >
              <a className="" href={`${val.link}`}>
                {val.Social}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
