const projects = [
  {
    title: 'Tree-Based Models: Random Forest vs. OLS',
    course: 'ECON3916 – Statistical Machine Learning',
    description:
      'Compared Decision Tree, Ridge, and Random Forest on 20,640 California housing observations. RF achieved R² = 0.83, beating Ridge by 24 points. Extracted MDI and permutation feature importance.',
    tags: ['Python', 'scikit-learn', 'matplotlib'],
    link: 'https://github.com/lizzietsitsishvili/ECON3916-Statistical-Machine-Learning/tree/main/Lab%2019',
  },
  {
    title: 'NLP for Economists: Sentiment in FOMC Minutes',
    course: 'ECON3916 – Statistical Machine Learning',
    description:
      'Built a TF-IDF pipeline to analyze Federal Reserve meeting minutes. Classified hawkish vs. dovish language with 87% accuracy using logistic regression.',
    tags: ['Python', 'scikit-learn', 'NLTK', 'Plotly'],
    link: 'https://github.com/lizzietsitsishvili/ECON3916-Statistical-Machine-Learning/tree/main/Lab%2023',
  },
  {
    title: 'Time Series Forecasting: CPI with Prophet',
    course: 'ECON3916 – Statistical Machine Learning',
    description:
      'Forecasted CPI inflation using Prophet and ARIMA. Prophet captured the COVID structural break that ARIMA missed. MASE = 0.72, beating the naïve benchmark.',
    tags: ['Python', 'Prophet', 'statsmodels', 'pandas'],
    link: 'https://github.com/lizzietsitsishvili/ECON3916-Statistical-Machine-Learning/tree/main/Lab%2021',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-zinc-950">
      <div className="section-padding">
        <p className="section-label">Work</p>
        <h2 className="section-title">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i}
              className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-7 flex flex-col gap-5 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-[0_4px_24px_rgba(37,99,235,0.07)] transition-all duration-200">

              <div>
                <p className="text-xs text-blue-500 dark:text-blue-400 font-medium uppercase tracking-wide mb-2">
                  {p.course}
                </p>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                  {p.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed flex-1 text-zinc-500 dark:text-zinc-400 font-light">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <span key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <a href={p.link} target="_blank" rel="noopener noreferrer"
                className="text-sm text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-medium transition-colors flex items-center gap-1">
                View on GitHub
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
