import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
          <span className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">
            TuanDev
          </span>
        </div>
        <nav className="flex space-x-8 text-[16px] font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/skills" className="hover:text-blue-600">
            Skills
          </Link>
          <Link href="/projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link href="/resume" className="hover:text-blue-600">
            Resume
          </Link>
          <Link href="/testimonials" className="hover:text-blue-600">
            Testimonials
          </Link>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>
        <div>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
}
