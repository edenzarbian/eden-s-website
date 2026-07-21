'use client';
import MyTechStack from './components/MyTechStack';
import { MyExperienceSection } from './components/ExperienceCard';
import ITExpertise from './components/ITExpertise';

export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto space-y-10">
      {/* Header Section with LinkedIn Button */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Eden Zarbian
          </h1>
          <h2 className="text-xl text-gray-600">
            Computer Science Honors Student & Software Developer
          </h2>
        </div>

        {/* Your Secure LinkedIn Link */}
        <div>
          <a
            href="https://www.linkedin.com/in/eden-zarbian-85a358344/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-[#0A66C2] text-white font-semibold rounded-md hover:bg-[#004182] transition-colors"
          >
            Connect on LinkedIn &rarr;
          </a>
        </div>
      </div>

      {/* Your Custom Components */}
      <ITExpertise />
      <MyTechStack />
      <MyExperienceSection />
    </main>
  );
}
