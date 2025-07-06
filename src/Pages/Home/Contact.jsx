import React from "react";
import pic from "../../assets/abdur_rahim.png";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="contact" className="max-w-[1300px] mx-auto my-24 px-2 md:px-0">
      <div className="text-center">
        <span className="text-[#ffc107] text-xl">Get In Touch</span>
        <h3 className="text-4xl font-bold mt-2">CONTACT</h3>
      </div>
      <div className="flex justify-center py-10">
        <div className="w-px h-10 bg-gray-600 opacity-50"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* left content  */}
        <div>
          <div className="">
            <h3 className=" text-center md:text-left text-4xl text-[#ffc107] font-bold leading-normal tracking-wide">
              I enjoy discussing new projects challenges.
              <span className="text-[#8A8C8E]  ">
                Please share as much info, as possible so i can get the most out
                of our first catch-up.
              </span>
            </h3>
          </div>

          <div className="mt-8 text-center md:text-left">
            <h5 className="text-2xl font-semibold">Living In:</h5>
            <p className="text-[22px] text-[#8A8C8E]  ">
              Nikunjo-2,Dhaka,Bangladesh.
            </p>
          </div>
          <div className="mt-5 text-center md:text-left">
            <h5 className="text-2xl font-semibold">Call In:</h5>
            <p className="text-[22px] text-[#8A8C8E]  ">(+880)1878605156</p>
          </div>
          <div className="mt-5 text-center md:text-left">
            <h5 className="text-2xl font-semibold">Email:</h5>
            <p className="text-[22px] text-[#8A8C8E]  ">armejbha@gmail.com</p>
          </div>
        </div>
        {/* right form  */}
        <div>
          <form onSubmit={handleSubmit}>
            <h3 className="text-[40px] font-bold">Send me a note</h3>
            <div className="mt-12">
              <label className="text-xl text-[#8A8C8E]  "> Your Name:</label>
              <br />
              <input
                className="w-full border-0 border-b text-[#8A8C8E]  focus:outline-none focus:border-b-[#8A8C8E]   transition duration-300 text-2xl mt-2"
                type="text"
                name="userName"
              />
            </div>
            <div className="my-6">
              <label className="text-xl text-[#8A8C8E]  "> Your Email:</label>
              <input
                className="w-full border-0 border-b text-[#8A8C8E]   focus:outline-none focus:border-b-[#8A8C8E]   transition duration-300 text-2xl mt-2"
                type="email"
                name="userEmail"
              />
              <br />
            </div>
            <div className="mb-6">
              <label className="text-xl text-[#8A8C8E] ">
                Describe what you need:
              </label>
              <br />
              <textarea
                rows="3"
                className="w-full border-0 border-b text-[#8A8C8E]  focus:outline-none focus:border-b-[#8A8C8E]   transition duration-300 text-2xl mt-2"
              ></textarea>
            </div>
            <button className="px-10 py-4 bg-[#ffc107] text-xl text-black font-semibold rounded-2xl block mx-auto md:mx-0 hover:cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
