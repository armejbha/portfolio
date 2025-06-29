import React from "react";
import pic from "../../assets/abdur_rahim.png";
const Banner = () => {
  return (
    <div className="max-w-[1350px] mx-auto mt-5">
      <div>
        <h4 className="text-center text-3xl font-semibold">Hello, I'm</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center mt-5">
          <div>
            <h3 className="text-4xl font-medium">Font-end Web Developer</h3>
            <p className="text-[#DEE2E6BF] text-xl">
              I craft responsive and innovative web interfaces using modern
              tools.
            </p>
          </div>
          <div className="col-span-2">
            <div className="max-w-fit rounded-full mx-auto border-[1px] border-[#ffc10740] border-opacity-20 p-[6px]">
              <div className="max-w-fit rounded-full mx-auto border-[1px] border-[#ffc10780] border-opacity-40 p-[6px]">
                <div className="max-w-fit mx-auto rounded-full border-[1px] border-[#ffc107bf]  p-[6px]">
                  <img
                    className="bg-amber-50 w-[316px] h-[316px] object-cover rounded-full border border-[#ffc107]"
                    src={pic}
                    alt="Profile"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-medium">
              Based in Dhaka, Bangladesh.
            </h3>
            <p className="text-[#DEE2E6BF] text-xl">
              Open to opportunities worldwide — available for work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
