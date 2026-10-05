'use client';

const technologies: readonly string[] = [
  'Python 3.11',
  'Docker Compose',
  'PostgreSQL',
  'FastAPI',
  'Secure MCP',
];

export default function APTSProject() {
  return (
    <section
      aria-labelledby="apts-title"
      className="rounded-2xl bg-blue-50 p-6 shadow-lg transition-shadow hover:shadow-xl sm:p-8 dark:bg-slate-900"
    >
      <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800 dark:bg-blue-950 dark:text-blue-200">
        My Featured Project
      </p>

      <div className="mt-5 max-w-3xl">
        <h2
          id="apts-title"
          className="text-2xl font-bold tracking-tight text-blue-900 sm:text-3xl dark:text-blue-100"
        >
          APTS
          <span className="mt-1 block text-lg font-medium text-blue-600 sm:ml-3 sm:inline">
            Agentic Penetration Testing System
          </span>
        </h2>
        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
          An automated penetration testing system I developed, where six
          autonomous AI agents map attack surfaces, propose weaknesses, attempt
          exploitation, and generate reports.
        </p>
      </div>

      <blockquote className="mt-6 border-l-2 border-blue-400 pl-4 text-lg font-medium italic text-blue-900 dark:text-blue-100">
        &ldquo;The model judges, code decides.&rdquo;
      </blockquote>

      <div className="mt-7">
        <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100">
          Built with
        </h3>
        <ul
          className="mt-3 flex flex-wrap gap-2"
          aria-label="APTS technology stack"
        >
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-200"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
