"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const coordinators = {
  Faculty: [
    { name: "John Doe\n1234567891", imageUrl: "/coordinator_images/dummy.png" },
    { name: "Jane Smith\n1234567891", imageUrl: "/coordinator_images/dummy.png" },
  ],
  Central: [
    { name: "Chris Brown\n1234567891", imageUrl: "/coordinator_images/dummy.png" },
    { name: "Sarah White\n1234567891", imageUrl: "/coordinator_images/dummy.png" },
  ],
  Senior: [
    { name: "Sophia Black\n1234567891", imageUrl: "/coordinator_images/dummy.png" },
    { name: "David Miller\n1234567891", imageUrl: "/coordinator_images/dummy.png" },
    { name: "James Wilson\n1234567891", imageUrl: "/coordinator_images/dummy.png" },
    { name: "Ella Adams\n1234567891", imageUrl: "/coordinator_images/dummy.png" },
  ],
};

export default function CoordinatorsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-6 pt-16">
      <Section title="Faculty Coordinators" data={coordinators.Faculty} />
      <Section title="Central Coordinators" data={coordinators.Central} />
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
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="flex flex-col items-center space-y-4">
      {data.reduce((rows, item, index) => {
        if (index % 2 === 0) rows.push([]);
        rows[rows.length - 1].push(item);
        return rows;
      }, [] as { name: string; imageUrl: string }[][]).map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-8">
          {row.map((coordinator, index) => (
            <DirectionAwareHover key={index} imageUrl={coordinator.imageUrl}>

              <p className="text-lg font-semibold whitespace-pre-line">{coordinator.name}</p>
            </DirectionAwareHover>
          ))}
        </div>
      ))}
    </div>
  </div>
);
