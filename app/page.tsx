'use client';
import MyTechStack from './components/MyTechStack';
import { MyExperienceSection } from './components/ExperienceCard';

export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto space-y-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Eden Zarbian</h1>
        <h2 className="text-xl text-gray-600">
          Computer Science Honors Student & Software Developer
        </h2>
      </div>

      {/* Your custom components */}
      <MyTechStack />
      <MyExperienceSection />
    </main>
  );
}
