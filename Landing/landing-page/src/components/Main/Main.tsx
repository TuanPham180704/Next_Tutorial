import React from "react";
import avatar from '../../../public/avt.jpg'
export default function Main() {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-[#E2E8F0] via-[#F1F5F9] to-[#F8FAFC] w-full h-[600px] flex flex-col justify-center items-center text-center px-4">
        <div className="bg-blue-500 text-white rounded-full w-[150px] h-[150px] flex items-center justify-center border-4 border-white shadow-lg cursor-pointer hover:scale-105 transition-transform">
          <span className="uppercase text-[50px] font-bold">PT</span>
        </div>
        <h1 className="mt-6 font-bold text-[40px] text-gray-800">
          Hi, I'm Phạm Tuấn
        </h1>
        <h2 className="mt-2 text-blue-500 font-semibold text-[26px]">
          Full Stack Developer
        </h2>
        <p className="mt-4 max-w-2xl text-gray-700 text-lg leading-relaxed">
          I build robust, scalable, and responsive web applications from front
          to back. Skilled in modern frontend frameworks, backend development,
          and database management. Passionate about clean code, seamless user
          experiences, and transforming creative ideas into powerful,
          production-ready solutions.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 transition">
            Download CV
          </button>
          <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
            Contact Me
          </button>
        </div>
      </div>
      <section className="mt-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-bold text-[35px] text-gray-800">About Me</h2>
          <div className="mt-3 w-[100px] h-[3px] bg-blue-500 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* Left Column: Text */}
          <div className="flex flex-col justify-center space-y-6 text-gray-700 text-lg leading-relaxed border border-green-400 px-4 py-4">
            <p>
              I'm a passionate Full-Stack Developer with over 4 years of
              experience in creating modern, responsive web applications. I
              specialize in React, Next.js, Node.js, and cutting-edge
              technologies.
            </p>
            <p>
              My journey in web development started with curiosity about how
              websites work, and it has evolved into a deep passion for building
              seamless user experiences. I believe in writing clean, maintainable
              code and staying updated with the latest trends.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and sharing knowledge with
              the developer community.
            </p>
            <div className="grid grid-cols-2 gap-4 text-base">
              <div className="flex">
                <span className="font-semibold w-28">Name:</span>
                <span>Phạm Tuấn</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-28">Age:</span>
                <span>21 years</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-28">Email:</span>
                <span>phamtuan180704@gmail.com</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-28">Location:</span>
                <span>Ho Chi Minh City, VN</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-28">Freelance:</span>
                <span className="text-green-500">Available</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={avatar.src}
              alt="Profile"
              className="rounded-lg shadow-lg max-w-sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
