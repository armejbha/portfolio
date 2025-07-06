import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import pic from "../../assets/abdur_rahim.png";
import { FiChevronDown } from "react-icons/fi";

const Banner = ({ scrollToAbout }) => {
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = imageWrapperRef.current;

    const handleMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const maxMove = 20; // max movement in pixels

      const moveX = Math.max(
        -maxMove,
        Math.min(maxMove, ((x - centerX) / centerX) * maxMove)
      );
      const moveY = Math.max(
        -maxMove,
        Math.min(maxMove, ((y - centerY) / centerY) * maxMove)
      );

      gsap.to(wrapper, {
        x: moveX,
        y: moveY,
        scale: 1.03, // optional slight scale up on hover
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const resetPosition = () => {
      gsap.to(wrapper, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", resetPosition);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", resetPosition);
    };
  }, []);

  return (
    <div id="home" className="max-w-[1300px] mx-auto mt-5">
      <div>
        <h4 className="text-center text-3xl font-semibold">Hello, I'm</h4>
        <p className="md:hidden text-2xl text-[#ffc107] text-center font-bold mt-5">
          Abdur Rahim
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center mt-5">
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-medium">Front-end Web Developer</h3>
            <p className="text-[#8A8C8E] text-xl mt-4">
              I craft responsive and innovative web interfaces using modern
              tools.
            </p>
          </div>

          {/* GSAP Cursor Move Section */}
          <div className="col-span-2 gsap-items">
            <div className="mx-auto w-fit perspective-[1000px]">
              <div
                ref={imageWrapperRef}
                className="w-fit transition-transform"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="rounded-full border-[1px] border-[#ffc10740] p-[6px]">
                  <div className="rounded-full border-[1px] border-[#ffc10780] p-[6px]">
                    <div className="rounded-full border-[1px] border-[#ffc107bf] p-[6px]">
                      <img
                        className="bg-amber-50 w-[316px] h-[316px] object-cover rounded-full border border-[#ffc107]"
                        src={pic}
                        alt="Profile"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-4xl font-medium">
              Based in Dhaka, Bangladesh.
            </h3>
            <p className="text-[#8A8C8E]  text-xl mt-4">
              Open to opportunities worldwide — available for work.
            </p>
          </div>
        </div>
        <h3 className="hidden md:block text-2xl md:text-[208px] text-[#ffc107] text-center font-bold ">
          Abdur Rahim
        </h3>
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center mx-auto animate-bounce my-24"
        >
          <div className="w-px h-10 bg-gray-600 opacity-50"></div>

          <FiChevronDown
            size={24}
            className="text-4xl text-gray-600 opacity-50 -mt-3"
          />
        </button>
      </div>
    </div>
  );
};

export default Banner;
