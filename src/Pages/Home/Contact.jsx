import React from "react";
import pic from "../../assets/abdur_rahim.png";

const Contact = () => {
  return (
    <div className="max-w-[1300px] mx-auto py-24 px-2 md:px-0">
      <div className="text-center">
        <span className="text-[#ffc107] text-xl">Get In Touch</span>
        <h3 className="text-4xl font-bold mt-2">CONTACT</h3>
      </div>
      <div className="flex justify-center py-10">
        <div className="w-px h-10 bg-gray-300 opacity-50"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* left content  */}
        <div>
          <div className="flex items-center gap-1">
            {/* <div className="w-fit">
              <div className="relative w-10 h-10 rounded-full border border-[#ffc107bf] bg-white">
               
                <img
                  src={pic}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />

        
                <span className="absolute bottom-[2px] right-[2px]">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
                  </span>
                </span>
              </div>
            </div> */}
            <h3 className=" text-center md:text-left text-4xl text-[#ffc107] font-bold leading-normal tracking-wide">
              I enjoy discussing new projects challenges.
              <span className="text-[#DEE2E6BF]">
                Please share as much info, as possible so i can get the most out
                of our first catch-up.
              </span>
            </h3>
          </div>

          <div className="mt-8 text-center md:text-left">
            <h5 className="text-2xl font-semibold">Living In:</h5>
            <p className="text-[22px] text-[#DEE2E6]">
              Nikunjo-2,Dhaka,Bangladesh.
            </p>
          </div>
          <div className="mt-5 text-center md:text-left">
            <h5 className="text-2xl font-semibold">Call In:</h5>
            <p className="text-[22px] text-[#DEE2E6]">(+880)1878605156</p>
          </div>
          <div className="mt-5 text-center md:text-left">
            <h5 className="text-2xl font-semibold">Email:</h5>
            <p className="text-[22px] text-[#DEE2E6]">armejbha@gmail.com</p>
          </div>
        </div>
        {/* right form  */}
        <div>
          <form>
            <h3 className="text-[40px] font-bold">Send me a note</h3>
            <div className="mt-12">
              <label className="text-xl text-[#DEE2E6BF]"> Your Name:</label>
              <br />
              <input
                className="w-full border-0 border-b border-[#DEE2E6BF] focus:outline-none focus:border-b-[#DEE2E6] transition duration-300 text-2xl mt-2"
                type="text"
                name="userName"
              />
            </div>
            <div className="my-6">
              <label className="text-xl text-[#DEE2E6BF]"> Your Email:</label>
              <input
                className="w-full border-0 border-b border-[#DEE2E6BF] focus:outline-none focus:border-b-[#DEE2E6] transition duration-300 text-2xl mt-2"
                type="email"
                name="userEmail"
              />
              <br />
            </div>
            <div className="mb-6">
              <label className="text-xl text-[#DEE2E6BF]">
                Describe what you need:
              </label>
              <br />
              <textarea
                rows="3"
                className="w-full border-0 border-b border-[#DEE2E6BF] focus:outline-none focus:border-b-[#DEE2E6] transition duration-300 text-2xl mt-2"
              ></textarea>
            </div>
            <button className="px-10 py-4 bg-[#ffc107] text-xl text-black font-semibold rounded-2xl block mx-auto md:mx-0">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
