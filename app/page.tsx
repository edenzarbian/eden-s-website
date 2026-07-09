'use client';

export default function Home() {
  const experiences = [
    {
      title: 'Military IT Leadership',
      description:
        'Led a tactical IT unit, ensuring 24/7 operational continuity and managing secure server deployments.',
      type: 'military',
    },
    {
      title: 'Budget in Gadget',
      description:
        'A financial management system designed for families to share and track budgets.',
      github: 'https://github.com/edenzarbian/budget-in-gadget',
      type: 'project',
    },
    {
      title: 'Parallel Summation',
      description:
        'A C program implementing parallel computation of integer sums using multiple child processes, shared memory, and strict semaphore synchronization.',
      github: 'https://github.com/edenzarbian/parallel-summation',
      type: 'project',
    },
    {
      title: 'Word2Vec Research',
      description:
        'An academic analysis and presentation on efficient word representations in vector space based on the Mikolov architectures.',
      github: 'https://github.com/edenzarbian/word2vec-research',
      type: 'project',
    },
  ];

  const skillsCategories = [
    {
      name: 'Languages',
      skills: ['C', 'C++', 'C#', 'Python', 'Java', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'OS & Architecture',
      skills: ['Linux', 'Process Management', 'Synchronization', 'Semaphores', 'Shared Memory', 'IPC'],
    },
    {
      name: 'Data & AI',
      skills: ['Machine Learning', 'NLP', 'Word2Vec', 'CBOW', 'Skip-gram', 'Jupyter'],
    },
    {
      name: 'Infrastructure & Tools',
      skills: ['Git/GitHub', 'VS Code', 'Active Directory', 'Windows Server'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0A192F]">
      <header className="sticky top-0 z-50 border-b border-[#0A192F]/10 bg-[#FDFBF7]/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <div className="text-2xl font-semibold tracking-tight text-[#0A192F]">
            Eden Zarbian
          </div>
          <a
            href="https://github.com/edenzarbian"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-[#EAE0D5] px-4 py-2 text-[#0A192F] transition-colors duration-300 hover:bg-[#6B705C] hover:text-[#FDFBF7]"
            aria-label="GitHub Profile"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="hidden text-sm font-medium sm:inline">GitHub</span>
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <section className="mb-24 space-y-6">
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Hi, I'm Eden Zarbian.
          </h1>
          <h2 className="text-2xl font-semibold text-[#294A6E] md:text-3xl">
            Computer Science Honors Student & Software Developer
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-[#23395B]">
            I am a CS Honors Student (GPA: 95) in the Magnet Program at HIT. I also hold a Software
            Engineering Associate Degree with honors. Previously, I served as a Commanding Officer in the
            IDF's Tactical and IT Department (Division 91), managing mission-critical infrastructure and
            Active Directory environments. I have a strong passion for backend architecture, operating
            systems, and machine learning. Alongside my studies, I tutor junior Computer Science students,
            helping them master complex concepts and succeed in their degrees.
          </p>
        </section>

        <section className="mb-24">
          <h3 className="mb-12 text-3xl font-bold md:text-4xl">Experience & Projects</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {experiences.map((item, index) => (
              <article
                key={index}
                className="group rounded-lg border border-[#0A192F]/15 bg-[#EAE0D5] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-[#6B705C] hover:text-[#FDFBF7] hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="flex-1 text-xl font-semibold transition-colors duration-300 group-hover:text-[#FDFBF7]">
                      {item.title}
                    </h4>
                    {item.type === 'military' ? (
                      <span className="whitespace-nowrap rounded-full bg-[#FDFBF7]/80 px-3 py-1 text-xs font-semibold text-[#0A192F]">
                        Military
                      </span>
                    ) : (
                      <span className="whitespace-nowrap rounded-full bg-[#FDFBF7]/80 px-3 py-1 text-xs font-semibold text-[#0A192F]">
                        Project
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-[#23395B] transition-colors duration-300 group-hover:text-[#FDFBF7]">
                    {item.description}
                  </p>
                  {item.github && (
                    <div className="border-t border-[#0A192F]/10 pt-4">
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A192F] transition-colors duration-300 hover:text-[#FDFBF7]"
                      >
                        View on GitHub
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h3 className="mb-12 text-3xl font-bold md:text-4xl">Skills & Expertise</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillsCategories.map((category, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#0A192F]/15 bg-[#EAE0D5] p-6 transition-colors duration-300 hover:bg-[#6B705C]"
              >
                <h4 className="mb-4 text-lg font-semibold text-[#0A192F] transition-colors duration-300 hover:text-[#FDFBF7]">
                  {category.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-[#FDFBF7]/80 px-3 py-1 text-xs font-semibold text-[#0A192F] transition-colors duration-300 hover:bg-[#FDFBF7] hover:text-[#0A192F]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#0A192F]/10 px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold">Let's connect</h4>
            <p className="max-w-2xl text-lg text-[#23395B]">
              Interested in collaborating or just want to say hello? Feel free to reach out.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:EDEDNZARBIAN@GMAIL.COM"
              className="flex items-center gap-2 rounded-lg bg-[#EAE0D5] px-5 py-3 font-medium text-[#0A192F] transition-colors duration-300 hover:bg-[#6B705C] hover:text-[#FDFBF7]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/eden-zarbian-85a358344/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[#EAE0D5] px-5 py-3 font-medium text-[#0A192F] transition-colors duration-300 hover:bg-[#6B705C] hover:text-[#FDFBF7]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.949v5.418h-3.554s.048-8.789 0-9.704h3.554v1.374c.43-.664 1.199-1.61 2.922-1.61 2.135 0 3.731 1.39 3.731 4.384v5.556zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.954.77-1.71 1.963-1.71 1.192 0 1.924.756 1.95 1.71 0 .951-.758 1.71-1.998 1.71zm-1.6 11.597h3.219V9.648H3.737v10.804zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            <a
              href="https://github.com/edenzarbian"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[#EAE0D5] px-5 py-3 font-medium text-[#0A192F] transition-colors duration-300 hover:bg-[#6B705C] hover:text-[#FDFBF7]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          <div className="border-t border-[#0A192F]/10 pt-8 text-center text-sm text-[#23395B]">
            <p>© 2026 Eden Zarbian. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
