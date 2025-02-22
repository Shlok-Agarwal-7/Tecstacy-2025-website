"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { slideInFromTop } from "@/lib/motion";
export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      main
      <motion.div
        className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-10"
        variants={slideInFromTop(1)}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full h-full flex flex-row items-center justify-between m-auto">
          {/* Logo and Title */}
          <Link
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            <Image
              src="/logo.jpeg"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin rounded-full"
            />
            <span className="font-bold ml-[4px] hidden md:block text-gray-100">
              TECSTASY 2K25
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 justify-center">
            <div className="flex items-center justify-center w-500px h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 gap-8">
              <Link href="#about-me" className="cursor-pointer">
                TECSTASY
              </Link>
              <Link href="#skills" className="cursor-pointer">
                CLUBS
              </Link>
              <Link href="/Coordinators" className="cursor-pointer">
                COORDS
              </Link>
              <Link href="#projects" className="cursor-pointer">
                EVENTS
              </Link>
            </div>
          </div>
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              className="text-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "X" : "☰"}
            </button>
          </div>
        </div>
      </motion.div>
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-black absolute top-[65px] w-full z-50"
          variants={slideInFromTop(0.1)}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link href="#about-me" className="text-gray-100 block">
              TECSTASY
            </Link>
            <Link href="#skills" className="text-gray-100 block">
              CLUBS
            </Link>
            <Link href="#coords" className="text-gray-100 block">
              COORDS
            </Link>
            <Link href="#projects" className="text-gray-100 block">
              EVENTS
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};
