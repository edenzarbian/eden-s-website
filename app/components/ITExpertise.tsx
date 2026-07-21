import React from 'react';
import ExperienceCard from './ExperienceCard'; // We import your card design here!

export default function ITExpertise() {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        IT Infrastructure & Leadership
      </h3>
      <ExperienceCard
        role="Commanding Officer & Technical Support"
        organization="IDF, Division 91"
        years="2021 – 2024"
        description="Led a tactical IT unit and delivered Tier-2/Tier-3 technical support for hardware, software, and Active Directory environments. Ensured 24/7 operational readiness for mission-critical infrastructure."
      />
    </div>
  );
}
