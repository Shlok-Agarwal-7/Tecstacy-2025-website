"use client";
import { Highlight } from "@/components/ui/hero-highlight";
import { WavyBackground } from "@/components/ui/wavy-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "motion/react";
import Image from "next/image";
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "@/lib/motion";

export default function Hero() {
  const subtitle = `Welcome to SUDHEE-TECSTACY, where innovation meets celebration!`;
  const title = `TECSTACY 2025`;

  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={slideInFromLeft(1)}>
          <Image src="/logo.png" alt="logo" width={200} height={200} />
        </motion.div>

        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          <Highlight>{title}</Highlight>
        </p>
        <TextGenerateEffect words={subtitle} />
      </motion.div>
    </WavyBackground>
  );
}
