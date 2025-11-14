"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white border-b">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="ClixBio"
            width={48}
            height={48}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-16">
          <a href="#" className="text-black font-medium hover:opacity-70">
            Home
          </a>
          <a href="#" className="text-black font-medium hover:opacity-70">
            Library
          </a>
          <a href="#" className="text-black font-medium hover:opacity-70">
            Courses
          </a>
          <a href="#" className="text-black font-medium hover:opacity-70">
            Test
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-black font-medium hover:opacity-70">
            Войти
          </button>
          <button className="px-6 py-2 bg-black text-white rounded-full font-medium hover:opacity-90">
            Регистрация
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col items-center gap-4 py-4">
            <a href="#" className="text-black font-medium hover:opacity-70">
              Home
            </a>
            <a href="#" className="text-black font-medium hover:opacity-70">
              Library
            </a>
            <a href="#" className="text-black font-medium hover:opacity-70">
              Courses
            </a>
            <a href="#" className="text-black font-medium hover:opacity-70">
              Test
            </a>
            <button className="text-black font-medium hover:opacity-70">
              Войти
            </button>
            <button className="w-full max-w-xs px-6 py-2 bg-black text-white rounded-full font-medium hover:opacity-90">
              Регистрация
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
