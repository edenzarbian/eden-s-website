import React from 'react';

// 1. Define the type for our badge props
interface TechBadgeProps {
  techName: string;
}

// 2. The reusable Badge component
export function TechBadge({ techName }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
      {techName}
    </span>
  );
}

// 3. A component to display your specific CV skills
export default function MyTechStack() {
  // Array of your real skills from the CV
  const mySkills: string[] = [
    'C',
    'C++',
    'C#',
    'Python',
    'SQL',
    'Assembly',
    'HTML',
    'CSS',
    'JavaScript',
  ];

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Skills</h3>
      <div className="flex flex-wrap gap-2">
        {mySkills.map((skill) => (
          <TechBadge key={skill} techName={skill} />
        ))}
      </div>
    </div>
  );
}
