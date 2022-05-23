import React from "react";
import LightSpeed from "react-reveal/LightSpeed";
import { MdImportantDevices } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { GoDeviceDesktop } from "react-icons/go";

function Services() {
  return (
    <LightSpeed right>
      <div className="container mx-auto p-6  my-6 0  rounded-lg shadow-lg">
        <div className="flex flex-col p-4">
          {" "}
          <h1 className="text-3xl bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-green-700">
            Services
          </h1>
          <span className="rounded-full border-2 w-6 border-gray-400  "></span>
        </div>
        <h1 className="text-gray-100 text-center text-3xl font-normal p-2 ">
          {" "}
           What can i do for you?{" "}
        </h1>
        <div className="grid md:grid-cols-3 gap-4 lg:w-2/3 items-center mx-auto mt-[2rem]">
          <div className="">
            <GoDeviceDesktop size={42} className="w-full text-green-500" />
            <h1 className="text-gray-100 p-2 font-bold text-3xl w-full mx-auto text-center">
              Web Development
            </h1>
            <p className="text-gray-400 p-2">
              We imagine, design, code and form your idea turning it real,
              everything is possible if you're passionate about it, and we lose
              track of time while doing our jobs.
            </p>
          </div>
          <div>
            <div>
              <FiDatabase size={42} className="w-full text-green-500" />
              <h1 className="text-gray-100 p-2 font-bold text-3xl w-full mx-auto text-center">
                Website Hosting
              </h1>
            </div>
            <p className="text-gray-400 p-2">
              Your website needs a space in the world of internet, you don't
              wanna put it on your desk and have to worry about slow internet
              and hot computer, let us worry about that for you.
            </p>
          </div>
          <div className="">
            <div>
              <MdImportantDevices size={42} className="w-full text-green-500" />
              <h1 className="text-gray-100 p-2 font-bold text-3xl w-full mx-auto text-center">
                Responsive Design
              </h1>
            </div>
            <p className="text-gray-400 p-2">
              Responsive web design or responsive design is an approach to web
              design that aims to make web pages render well on a variety of
              devices and window or screen sizes from minimum to maximum display
              size to ensure usability and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </LightSpeed>
  );
}

export default Services;
