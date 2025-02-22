"use client";
import { Highlight } from "@/components/ui/hero-highlight";
import { WavyBackground } from "@/components/ui/wavy-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "motion/react";
import Image from "next/image";
import {
  slideInFromLeft,
} from "@/lib/motion";

import { Zen_Dots} from "next/font/google";

const pressStart2P = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
});


export default function Hero() {
  const subtitle = `Welcome to SUDHEE-TECSTACY, where innovation meets celebration!`;
  const title = `TECSTACY 2025`;

  return (
    <WavyBackground className="w-full flex justify-center pb-40 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="flex flex-col items-center text-center space-y-6"
        initial="hidden"
        animate="visible"
      >
        {/* Logo Section */}
        <motion.div variants={slideInFromLeft(1)}>
          <Image src="/logo.png" alt="logo" width={300} height={300} />
        </motion.div>

        {/* Title Section */}
        <p
         className={`text-white ${pressStart2P.className} leading-tight text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}
        >
          <Highlight>{title}</Highlight>
        </p>

        {/* Subtitle Section */}
        <TextGenerateEffect words={subtitle} />
      </motion.div>
    </WavyBackground>
  );
}
