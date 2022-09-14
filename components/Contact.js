import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Zoom from "react-reveal/Zoom";
import Image from "next/image";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_27otgd3",
        "template_nu3nlna",
        form.current,
        "wRGAYlk4r9LSqyEFS",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    form.current.reset();
  };

  return (
    <Zoom>
      <div className="container mx-auto p-2  my-6  rounded-lg shadow-lg">
        <div className="flex flex-col items-center p-4">
          {" "}
          <h1 className="text-5xl font-black text-white">Contact</h1>
        </div>

        <div className="flex flex-col w-full  justify-between mx-auto ">
          <div className="p-2 ">
            <h1 className="text-gray-400 mx-auto text-2xl mt-6 lg:w-7/12">
              I am available for full time, part time and freelance work.
              Connect with me via email:{" "}
              <span className="text-gray-200">ottoprogrammer@gmail.com</span>.
            </h1>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col justify-center text-[#008bff] items-center mx-auto space-y-2 w-full md:w-auto"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name*"
              className="py-3 px-5 bg-[#9d959514] w-full md:w-[26rem] focus:outline-none focus:border-[#008bff] focus:ring-1 focus:ring-[#008bff]
       border-2 border-gray-600 rounded-sm"
            />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email*"
              className="py-3 px-5 bg-[#9d959514] w-full md:w-[26rem] focus:outline-none focus:border-[#008bff] focus:ring-1 focus:ring-[#008bff]
             border-2 border-gray-600 rounded-sm"
              required
            />

            <textarea
              name="message"
              id="message"
              placeholder="Your Message*"
              cols="20"
              rows="10"
              className="py-3 px-5 bg-[#9d959514] w-full md:w-[26rem] focus:outline-none focus:border-[#008bff] focus:ring-1 focus:ring-[#008bff]
       border-2 border-gray-600 rounded-lmd"
            ></textarea>

            <button
              type="submit"
              className=" text-gray-200 p-3  border-[2px] hover:-translate-y-1 border-[#008bff] text-center mx-auto  transition-all ease-in-out duration-300 hover:shadow-2xl w-[9rem] bold text-lg hover:bg-[#008bff] hover:text-white"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </Zoom>
  );
}

export default Contact;
