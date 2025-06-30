import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto pt-24 pb-16">
      {/* social links  */}
      <div className="flex justify-center">
        <div className="w-full md:w-4/5 border-y border-[#DEE2E6BF] px-4 py-2">
          <ul className="flex gap-10 justify-center items-center py-3">
            <li>
              <a
                href="https://www.linkedin.com/in/armejbha/"
                className="text-2xl font-semibold text-[#DEE2E6BF] hover:text-[#ffc107] hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/armejbha"
                className="text-2xl font-semibold text-[#DEE2E6BF] hover:text-[#ffc107] hover:underline "
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@armejbha"
                className="text-2xl font-semibold text-[#DEE2E6BF] hover:text-[#ffc107] hover:underline"
              >
                Medium
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/armejbha"
                className="text-2xl font-semibold text-[#DEE2E6BF] hover:text-[#ffc107] hover:underline"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex  justify-center mt-10">
        <div className="space-y-5 text-[#6c757d]">
          <h3 className="text-center text-xl">
            Copyright © 2025{" "}
            <span className="text-[#ffc107] font-bold">Abdur Rahim</span>. All
            Rights Reserved.
          </h3>
          <p className="text-center text-xl">
            Designed by{" "}
            <span className="text-[#ffc107] font-bold">Abdur Rahim</span>
          </p>
          <ul className="flex flex-wrap justify-center items-center gap-7">
            <li>
              <a href="" className=" text-lg hover:text-[#ffc107]">
                Privacy
              </a>
            </li>
            <li>
              <a href="" className=" text-lg hover:text-[#ffc107]">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
