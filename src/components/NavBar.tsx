"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { slideInFromTop } from "@/lib/motion";

export const Navbar = () => {
  return (
    <motion.div initial="hidden" animate="visible">
      <motion.div
        className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10"
        variants={slideInFromTop(1)}
      >
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
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

            <span className="font-bold ml-[10px] hidden md:block text-gray-100">
              TECSTASY 2K25
            </span>
          </Link>

          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <Link href="#about-me" className="cursor-pointer">
                TECSTASY
              </Link>
              <Link href="#skills" className="cursor-pointer">
                CLUBS
              </Link>
              <Link href="#coords" className="cursor-pointer">
                COORDS
              </Link>
              <Link href="#projects" className="cursor-pointer">
                EVENTS
              </Link>
            </div>
          </div>

          <div className="flex flex-row gap-5">
            {/* {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))} */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
