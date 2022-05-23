import React,{useRef} from "react";
import emailjs from 'emailjs-com';
import Zoom from "react-reveal/Zoom";


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_27otgd3', 'template_nu3nlna', form.current, 'wRGAYlk4r9LSqyEFS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };

  return (
    <Zoom>
    <div className="container mx-auto p-2  my-6  rounded-lg shadow-lg">
      <div className="flex flex-col p-4">
        {" "}
        <h1 className="text-3xl bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-green-700">
          Hire me
        </h1>
        <span className="rounded-full border-2 w-6 border-gray-400  "></span>
      </div>

<div className="flex flex-col lg:flex-row w-full lg:w-5/6 justify-between mx-auto">
      <h1 className="text-gray-200 text-2xl lg:p-6 mt-6 lg:w-7/12">Have any questions? Reach out to us from our contact form and we will get back to you shortly.

</h1>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center text-green-500 items-center mx-auto space-y-2 ">
        <label className="block w-full text-center">
          <span className="block text-lg font-medium text-slate-500 p-1 text-left">
            Name*
          </span>

          <input
            type="text"
            name="name"
            id="name"
            className="p-[0.5rem] bg-[#9d959514] w-full md:w-[26rem] focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
       border-2 border-gray-600 rounded-lg"
          />
        </label>
        <label className="block w-full text-center">
          <span className="block text-lg font-medium text-slate-500 p-1 text-left">
            Email*
          </span>
          <input
            type="email"
            name="email"
            id="email"
            className="p-[0.5rem] bg-[#9d959514] w-full md:w-[26rem] focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
             border-2 border-gray-600 rounded-lg"
            required
          />
        </label>
        <label className="block w-full text-center">
          <span className="block text-lg font-medium text-slate-500 p-1 text-left">
            Message*
          </span>

          <textarea
            name="message"
            id="message"
            cols="36"
            rows="10"
            className="p-[0.4rem] bg-[#9d959514] w-full md:w-[26rem] focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
       border-2 border-gray-600 rounded-lg"
          ></textarea>
        </label>
        <button type="submit" className="bg-green-600 text-gray-200 p-3 my-2 text-center mx-auto hover:translate-y-[-0.1rem] transition-all ease-in-out duration-300 hover:shadow-2xl w-[9rem] bold text-lg hover:bg-green-700 hover:text-white">
          SEND
        </button>
      </form>
      </div>
    </div>
    </Zoom>
  );
}

export default Contact;
