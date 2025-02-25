"use client"

import Image from "next/image";
import React from "react";
interface Props {
  src: string;
}

const EventCard = ({ src }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border-4 border-solid border-[#2A0E61] focus:scale-110 transition-transform duration-200">
      <Image
        src={src}
        alt=""
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
    </div>
  );
};

export default EventCard;
