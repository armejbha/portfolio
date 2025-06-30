import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="max-w-[1300px] mx-auto my-24 px-2 md:px-0">
      <div className="text-center">
        <span className="text-[#ffc107] text-xl">Know me more</span>
        <h3 className="text-4xl font-bold mt-2">ABOUT ME</h3>
      </div>
      <div className="flex justify-center py-10">
        <div className="w-px h-10 bg-gray-300 opacity-50"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="text-center md:text-left">
          <h3 className="text-4xl font-bold leading-normal tracking-wide">
            Hi, I’m <span className="text-[#ffc107]">Abdur Rahim</span> — a
            Front-End Developer{" "}
            <span className="text-[#DEE2E6BF]">
              passionate about creating responsive and user-focused experiences.
            </span>
          </h3>
          <p className="text-2xl mt-10">
            “Discipline, time management, and a love for innovation guide my
            journey.”
          </p>
        </div>
        <div>
          <p className="text-3xl text-center md:text-left tracking-wide">
            Web development isn’t just my career — it’s where I find joy and
            purpose. I love turning ideas into clean, interactive user
            experiences using HTML, CSS, JavaScript, and modern frameworks.
            Always curious, I explore new tech, read, watch tech content on
            YouTube, and stay disciplined in my craft. My goal? To grow every
            day and deliver quality work on time.
          </p>
        </div>
      </div>
    </div>
  );
});

export default About;
