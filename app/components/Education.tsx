export default function Education() {
  return (
    <section id="education" className="bg-white dark:bg-zinc-950">
      <div className="section-padding">
        <p className="section-label">Academic</p>
        <h2 className="section-title">Education</h2>

        <div className="space-y-6">
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-6">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">Northeastern University</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-1">
                  B.S. Economics & Business Administration
                </p>
                <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-0.5">
                  Concentration: Business Analytics &nbsp;·&nbsp; Minor: Psychology
                </p>
              </div>
              <div className="text-sm text-zinc-400 dark:text-zinc-500 sm:text-right flex-shrink-0">
                <p>Expected May 2027</p>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">GPA: 3.8</p>
                <p>Boston, MA</p>
              </div>
            </div>

            <div className="border-t border-zinc-100 dark:border-zinc-800 pt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Statistical & Machine Learning for Economics',
                  'Financial Accounting',
                  'Financial Management',
                  'Managerial Accounting',
                  'Microeconomic Theory',
                  'Data Wrangling for Business Analytics',
                ].map(c => (
                  <span key={c}
                    className="text-xs px-3 py-1 rounded-md bg-zinc-50 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-700">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Dialogue of Civilizations: China&apos;s Economic Rise</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-1">
                  Beijing · Shanghai · Shenzhen · Yantai
                </p>
                <p className="text-sm text-zinc-400 dark:text-zinc-500 font-light mt-2">
                  Immersive global program analyzing firm strategy and innovation across China&apos;s leading economic centers.
                </p>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500 sm:text-right flex-shrink-0">May – Jun 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
