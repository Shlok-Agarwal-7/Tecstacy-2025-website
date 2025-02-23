import React from "react";
import ProjectCard from "../lib/EventCard";

const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4" id="events">
      <h1 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
        Our Events !!!
      </h1>
      
      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 w-full max-w-6xl">
        <ProjectCard src="/events/poster1.jpeg" />
        <ProjectCard src="/events/poster2.jpeg" />
        <ProjectCard src="/events/poster3.jpeg" />
      </div>
      
      {/* Register Button */}
      <div className="mt-8">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSddT-cmUEd8I4Q7N2RbSLIpFzlhi4VF2V9ZzKmIaQwtq4QweA/viewform">
          <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-lg md:text-xl px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform">
            Register Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Events;

