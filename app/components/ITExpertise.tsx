import React from 'react';

export default function ITExpertise() {
  return (
    <div className="p-6 bg-slate-50 rounded-lg border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        IT Infrastructure & Leadership
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Recognized for excellence and leadership in high-pressure military IT
        environments. I possess a strong foundation in software development,
        OOP, and mission-critical IT infrastructure.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Commanding Officer (Division 91):</strong> Led a tactical IT
          unit, coordinating technical activities and ensuring 24/7 operational
          readiness.
        </li>
        <li>
          <strong>NOC Operations:</strong> Monitored mission-critical servers,
          communication systems, and classified operational technologies.
        </li>
        <li>
          <strong>Technical Support:</strong> Delivered Tier-2/Tier-3 technical
          support for software, hardware, and administered Active Directory
          environments.
        </li>
      </ul>
    </div>
  );
}
