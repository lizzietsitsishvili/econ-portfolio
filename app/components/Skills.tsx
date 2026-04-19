const categories = [
  {
    label: 'Statistics & Econometrics',
    skills: [
      { name: 'Regression Analysis',  level: 3 },
      { name: 'Causal Inference',     level: 2 },
      { name: 'Hypothesis Testing',   level: 3 },
    ],
  },
  {
    label: 'Machine Learning',
    skills: [
      { name: 'Random Forest',        level: 3 },
      { name: 'Logistic Regression',  level: 3 },
      { name: 'Clustering',           level: 2 },
      { name: 'Regularization',       level: 2 },
    ],
  },
  {
    label: 'Data & Programming',
    skills: [
      { name: 'Python',               level: 3 },
      { name: 'pandas / NumPy',       level: 3 },
      { name: 'SQL',                  level: 2 },
      { name: 'Git',                  level: 2 },
    ],
  },
  {
    label: 'Visualization & Tools',
    skills: [
      { name: 'Matplotlib',           level: 3 },
      { name: 'Plotly',               level: 2 },
      { name: 'Excel',                level: 3 },
      { name: 'Jupyter / Colab',      level: 3 },
    ],
  },
]

const LEVELS = ['Familiar', 'Proficient', 'Advanced']

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
      <span className="text-sm text-zinc-700 dark:text-zinc-300 font-light">{name}</span>
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-xs text-zinc-400 dark:text-zinc-500 w-16 text-right hidden sm:block">
          {LEVELS[level - 1]}
        </span>
        <div className="flex gap-1">
          {[1, 2, 3].map(i => (
            <span
              key={i}
              className={`block w-2 h-2 rounded-full transition-colors ${
                i <= level
                  ? 'bg-blue-500 dark:bg-blue-400'
                  : 'bg-zinc-200 dark:bg-zinc-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-zinc-950">
      <div className="section-padding">
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">Skills &amp; Tools</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-7"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-4">
                {cat.label}
              </h3>
              <div>
                {cat.skills.map(s => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-zinc-400 dark:text-zinc-600 text-right">
          ● Familiar &nbsp;●● Proficient &nbsp;●●● Advanced
        </p>
      </div>
    </section>
  )
}
