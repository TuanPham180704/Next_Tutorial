import React from "react";

export default function Main() {
  return (
    <div className="w-full shadow-sm">
      <div className="bg-gradient-to-b from-[#E2E8F0] via-[#F1F5F9] to-[#F8FAFC] w-full flex flex-col items-center h-[600px]">
        <div className="bg-blue-500 text-white rounded-full flex w-[150px] h-[150px] items-center justify-center text-center mt-20 border-2 border-transparent hover:border-white cursor-pointer">
          <span className="uppercase text-[50px]">PT</span>
        </div>
        <div className="mt-5">
          <span className="font-bold text-[40px]">Hi, I'm Phạm Tuấn</span>
        </div>
        <div className="mt-4">
          <span className="text-blue-500 font-medium text-[26px]">
            Full Stack Developer
          </span>
        </div>
        <div className="mt-4">
          <span className="text- font-medium text-[18px] prose mx-auto">
            I build robust, scalable, and responsive web applications from front
            to back. Skilled in modern frontend frameworks, backend development,
            and database management. Passionate about clean code, seamless user
            experiences, and transforming creative ideas into powerful,
            production-ready solutions.
          </span>
        </div>
        <div className="mt-4 ml-0.5 flex space-x-4">
          <button className="bg-blue-500 border border-black text-white hover:bg-blue-700 px-6 py-2">
            Download CV
          </button>
          <button className="text-blue-300 border border-blue-500 px-6 py-2 hover:bg-blue-400 hover:text-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
