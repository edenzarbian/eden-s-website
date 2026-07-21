import React from 'react';

// 1. Define the data structure for your experience
interface ExperienceCardProps {
  role: string;
  organization: string;
  years: string;
  description: string;
  githubUrl?: string; // Optional, in case a role doesn't have a related link
}

// 2. The Polished Component
export default function ExperienceCard({
  role,
  organization,
  years,
  description,
  githubUrl,
}: ExperienceCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md max-w-2xl">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{role}</h3>
          <p className="text-md font-semibold text-gray-600">{organization}</p>
        </div>
        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {years}
        </span>
      </div>

      <p className="text-gray-700 mt-4 leading-relaxed">{description}</p>

      {/* Conditionally render the GitHub link securely if it exists */}
      {githubUrl && (
        <div className="mt-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline font-medium"
          >
            View My GitHub Profile &rarr;
          </a>
        </div>
      )}
    </div>
  );
}

// 3. How to use it in your page with your actual CV data
export function MyExperienceSection() {
  return (
    <ExperienceCard
      role="NOC Operations"
      organization="IDF, Division 91"
      years="2022 – 2023"
      description="Monitored mission-critical servers, communication systems, and classified operational technologies. Performed real-time monitoring, incident detection, and rapid response to system failures."
      githubUrl="https://github.com/edenzarbian"
    />
  );
}
