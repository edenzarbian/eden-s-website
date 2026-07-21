'use client';
import MyTechStack from './components/MyTechStack';
import { MyExperienceSection } from './components/ExperienceCard';
import ITExpertise from './components/ITExpertise';

export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto space-y-10">
      {/* Header Section with Both Buttons */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Eden Zarbian
          </h1>
          <h2 className="text-xl text-gray-600">
            Computer Science Honors Student & Software Developer
          </h2>
        </div>

        {/* Button Container */}
        <div className="flex gap-4">
          {/* The New GitHub Button */}
          <a
            href="https://github.com/edenzarbian"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors"
          >
            GitHub Profile
          </a>

          {/* The LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/eden-zarbian-85a358344/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-[#0A66C2] text-white font-semibold rounded-md hover:bg-[#004182] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Your Custom Components */}
      <MyTechStack />
      <ITExpertise />
      <MyExperienceSection />
    </main>
  );
}
