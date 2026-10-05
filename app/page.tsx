'use client';
import MyTechStack from './components/MyTechStack';
import { MyExperienceSection } from './components/ExperienceCard';
import Chatbot from './components/Chatbot';
import ITExpertise from './components/ITExpertise';
import APTSProject from './components/APTSProject';

export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto space-y-10">
      {/* Header Section with Both Buttons */}
      <div className="mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Eden Zarbian
          </h1>
          <h2 className="text-xl text-gray-600">
            Computer Science Honors Student & Software Developer
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://github.com/edenzarbian"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#004182]"
            >
              GitHub Profile
            </a>

            <a
              href="https://www.linkedin.com/in/eden-zarbian-85a358344/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#004182]"
            >
              LinkedIn
            </a>

            <a
              href="/Eden_Zarbian_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#004182]"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Your Custom Components */}
      <MyTechStack />
      <ITExpertise />
      <MyExperienceSection />
      <APTSProject />
      <Chatbot />
    </main>
  );
}
