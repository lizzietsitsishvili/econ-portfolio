export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16 bg-white dark:bg-zinc-950">
      <div className="section-padding w-full">
        <div className="flex flex-col md:flex-row items-start gap-16">

          <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-700 flex items-center justify-center text-blue-700 dark:text-blue-200 text-2xl font-semibold shadow-sm">
              ET
            </div>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/lizzietsitsishvili/" target="_blank" rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://github.com/lizzietsitsishvili" target="_blank" rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex-1 max-w-2xl">
            <p className="section-label">Economics & Business Analytics</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 leading-tight">
              Elizabeth<br />Tsitsishvili
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed font-light mb-10">
              Third-year Economics & Business Administration student at Northeastern University,
              concentrating in Business Analytics with a minor in Psychology. Interested in the
              intersection of technology and financial products — from brainwave biometrics to
              NLP for economic research. Currently exploring fintech and data-driven innovation.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#experience"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                View Experience
              </a>
              <a href="#contact"
                className="px-5 py-2.5 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-blue-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium rounded-lg transition-colors">
                Get in Touch
              </a>
            </div>

            <div className="mt-14 pt-10 border-t border-zinc-100 dark:border-zinc-800 grid grid-cols-3 gap-6">
              {[
                { value: '3.8', label: 'GPA' },
                { value: '5+', label: 'Roles' },
                { value: '3+', label: 'Projects' },
              ].map(s => (
                <div key={s.label}>
                  <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{s.value}</p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
