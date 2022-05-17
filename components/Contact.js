import React from "react";

function Contact() {
  return (
    <div className="container mx-auto p-6  my-6 bg-[#56565614] rounded-lg shadow-lg">
      <div className="flex flex-col p-4">
        {" "}
        <h1 className="text-3xl bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-green-700">
          Hire me
        </h1>
        <span className="rounded-full border-2 w-6 border-gray-400  "></span>
      </div>
    <div className="grid md:grid-cols-2 p-[2rem] overflow-hidden">
      <form className="grid justify-center text-green-500 items-center mx-auto space-y-2 ">
        <label className="block">
          <span className="block text-lg font-medium text-slate-500 p-1">
            Name
          </span>

          <input
            type="text"
            name="name"
            id="name"
            className="p-[0.4rem] bg-[#9d959514] w-[26rem] focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-green-500 invalid:text-green-600
      focus:invalid:border-green-500 focus:invalid:ring-green-500"
          />
        </label>
        <label className="block">
          <span className="block text-lg font-medium text-slate-500 p-1">
            Email
          </span>
          <input
            type="email"
            name="email"
            id="email"
            className="p-[0.4rem] bg-[#9d959514] w-[26rem] focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-green-500 invalid:text-green-600
      focus:invalid:border-green-500 focus:invalid:ring-green-500"
            required
          />
        </label>
        <label className="block">
          <span className="block text-lg font-medium text-slate-500 p-1">
            Message
          </span>

          <textarea
            name="message"
            id="message"
            cols="45"
            rows="10"
            className="p-[0.4rem] bg-[#9d959514] w-[26rem] focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-green-500 invalid:text-green-600
      focus:invalid:border-green-500 focus:invalid:ring-green-500"
          ></textarea>
        </label>
        <button className="bg-green-600 text-gray-200 p-3 my-2 text-center mx-auto hover:translate-y-[-0.1rem] transition-all ease-in-out duration-300 hover:shadow-2xl w-[9rem] bold text-lg hover:bg-green-700 hover:text-white">
          SEND
        </button>
      </form>
      <div className="flex items-center">
        <h1 className="text-white font-black text-4xl">OTTO PROGRAMMER</h1>
      </div></div>
    </div>
  );
}

export default Contact;
