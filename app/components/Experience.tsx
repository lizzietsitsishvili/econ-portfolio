const experiences = [
  {
    company: 'Fidelity Investments',
    role: 'Business Analyst Co-Op',
    period: 'Jan 2025 – Jul 2025',
    location: 'Boston, MA',
    bullets: [
      'Developed a Proof of Concept by transforming immersive research into an identity authentication and ML solution leveraging EEG technology, achieving 95–100% accuracy in brainwave identification across 30+ participants.',
      'Project managed a 4-member co-op team using Agile methodologies, driving innovation and ensuring seamless execution through progress tracking.',
      'Co-created a comprehensive 50-page project playbook outlining key processes, procedures, and best practices.',
      'Co-authored an internal article on consensus mechanisms in cryptocurrency with a Subject Matter Expert.',
    ],
  },
  {
    company: "Women's Interdisciplinary Society of Entrepreneurship",
    role: 'WeLearn Associate',
    period: 'Jan 2025 – May 2025',
    location: 'Boston, MA',
    bullets: [
      'Led 5+ dynamic workshops per semester, coordinating industry-leading speakers and fostering interactive discussions.',
      'Published in-depth articles on Medium synthesizing key takeaways from workshops and industry trends.',
      'Mentored students on networking strategies and career development within entrepreneurial fields.',
    ],
  },
  {
    company: 'PAAWS Study, Northeastern University',
    role: 'Research Assistant',
    period: 'Sep 2024 – Dec 2024',
    location: 'Boston, MA',
    bullets: [
      'Annotated 50+ videos using activity models to label physical, sedentary, and sleep-related behaviors of participants ages 18–85.',
      'Collaborated with interdisciplinary teams to enhance data accuracy and improve health intervention methodologies.',
    ],
  },
  {
    company: 'Center for Cognitive and Brain Health, NU',
    role: 'Research Assistant',
    period: 'Jan 2024 – May 2024',
    location: 'Boston, MA',
    bullets: [
      'Administered questionnaires and cognitive tests to assess memory and reaction time of participants ages 9–10.',
      'Efficiently prepared 64-channel EEG caps for data collection in under 30 minutes with precise accuracy.',
    ],
  },
  {
    company: 'Northeastern University',
    role: 'Educational Technology Assistant',
    period: 'Jan 2024 – Apr 2024',
    location: 'Boston, MA',
    bullets: [
      'Collaborated with professors to design comprehensive Canvas modules for academic courses.',
      'Curated syllabus templates to meet the objectives of different classes, enhancing academic effectiveness.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-zinc-50 dark:bg-zinc-900/40">
      <div className="section-padding">
        <p className="section-label">Background</p>
        <h2 className="section-title">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="md:w-44 flex-shrink-0">
                <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">
                  {exp.period}<br />{exp.location}
                </p>
              </div>

              <div className="flex-1 border-t border-zinc-200 dark:border-zinc-800 pt-0 md:border-t-0 md:pt-0">
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{exp.company}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{exp.role}</p>
                  </div>
                </div>
                <ul className="space-y-2 pl-4">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
