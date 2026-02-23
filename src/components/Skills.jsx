import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    category: 'Frontend',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  {
    category: 'Backend',
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/30',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'JPA/JDBC', 'Python', 'Flask'],
  },
  {
    category: 'Databases',
    color: 'from-orange-500/20 to-amber-500/20',
    border: 'border-orange-500/30',
    skills: ['MySQL', 'PostgreSQL', 'Oracle', 'Azure SQL'],
  },
  {
    category: 'Cloud & DevOps',
    color: 'from-sky-500/20 to-blue-500/20',
    border: 'border-sky-500/30',
    skills: ['Microsoft Azure', 'Azure Data Factory', 'Azure SQL', 'CI/CD Basics'],
  },
  {
    category: 'Data Science & ML',
    color: 'from-purple-500/20 to-violet-500/20',
    border: 'border-purple-500/30',
    skills: ['ARIMA', 'LSTM', 'Vision Transformers', 'Predictive Analytics', 'SVM', 'Clustering'],
  },
  {
    category: 'Tools',
    color: 'from-rose-500/20 to-pink-500/20',
    border: 'border-rose-500/30',
    skills: ['Git/GitHub', 'VS Code', 'Power BI', 'Tableau'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">What I work with</p>
          <h2 className="text-4xl font-bold text-textPrimary">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bg-gradient-to-br ${cat.color} border ${cat.border} rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300`}
            >
              <h3 className="text-textPrimary font-bold text-lg mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/60 text-textSecondary text-xs rounded-full border border-slate-700/50 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
