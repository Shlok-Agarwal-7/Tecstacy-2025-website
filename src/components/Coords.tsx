"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const coordinators = {
  Faculty: [
    { name: "DR N.Sudhakar Yadav", imageUrl: "/coordinators/sir1.jpeg" },
    { name: "DR S.R.M Krishna", imageUrl: "/coordinators/sir2.jpeg" },
  ],
  Senior: [
    { name: "Hareshwar", imageUrl: "/coordinators/Hari.jpeg" },
    { name: "Shlok Agarwal", imageUrl: "/coordinators/Shlok.jpeg" },
    { name: "Deepthi", imageUrl: "/coordinators/deepthi.jpeg" },
    { name: "Juweriah", imageUrl: "/coordinators/Juweriah.jpeg" },
    { name: "Manobhi", imageUrl: "/coordinators/Manobhi.jpg" },
    { name: "Tejaswi", imageUrl: "/coordinators/Tejaswi.jpeg" },
  ],
};

export default function CoordinatorsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-6 pt-16">
      <Section title="Faculty Coordinators" data={coordinators.Faculty} />
      <Section title="Senior Coordinators" data={coordinators.Senior} />
    </div>
  );
}

type SectionProps = {
  title: string;
  data: { name: string; imageUrl: string }[];
};

const Section = ({ title, data }: SectionProps) => (
  <div className="w-full text-center mb-8">
    <h2 className="text-3xl font-semibold mb-6 text-white/70">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full max-w-6xl mx-auto">
      {data.map((coordinator, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="flex items-center justify-center">
            <div className="hidden md:block">
              <DirectionAwareHover imageUrl={coordinator.imageUrl}>
                <p className="text-lg font-semibold whitespace-pre-line text-center">
                  {coordinator.name}
                </p>
              </DirectionAwareHover>
            </div>
            <div className="md:hidden flex flex-col items-center">
            <img src={coordinator.imageUrl} alt={coordinator.name} className="w-76 h-76 object-cover rounded-lg mb-2 aspect-square" />
              <p className="text-lg font-semibold whitespace-pre-line text-center text-white/70">
                {coordinator.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
