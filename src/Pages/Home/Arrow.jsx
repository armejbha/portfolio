// Home.jsx (or your Landing component)

import React, { useRef } from "react";

const Home = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Scroll Down Arrow Button */}
      <button
        onClick={scrollToAbout}
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 animate-bounce"
      >
        <span className="text-3xl text-[#ffc107] opacity-70">↓</span>
      </button>

      {/* Other sections... */}

      {/* Target Section */}
      <section ref={aboutRef} className="min-h-screen bg-white pt-20">
        <h2 className="text-4xl font-bold">About Section</h2>
        {/* Your About Content */}
      </section>
    </div>
  );
};

export default Home;
