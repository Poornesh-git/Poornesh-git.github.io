import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

export default function Internship() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="internship" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">Work Experience</p>
          <h2 className="text-4xl font-bold text-textPrimary">Internship</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-secondary border border-slate-700/50 rounded-2xl p-8 hover:border-accent/30 transition-colors duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <FiBriefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-textPrimary">AI & ML Intern</h3>
                <p className="text-accent font-semibold mt-1">Tessolve Semiconductor Pvt Ltd</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-sm text-textSecondary">
              <span className="flex items-center gap-1.5">
                <FiCalendar className="w-4 h-4" /> 2023
              </span>
              <span className="flex items-center gap-1.5">
                <FiMapPin className="w-4 h-4" /> India
              </span>
            </div>
          </div>

          <p className="text-textSecondary leading-relaxed mb-6">
            Worked on applied Machine Learning projects at Tessolve Semiconductor, focusing on practical
            implementations of supervised and unsupervised learning algorithms. Gained hands-on experience
            with industry-standard Python ML libraries and data preprocessing pipelines.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {['Support Vector Machines (SVM)', 'Regression Analysis', 'Clustering Algorithms'].map((item) => (
              <div
                key={item}
                className="bg-primary/50 rounded-lg p-4 border border-slate-700/50 text-center"
              >
                <p className="text-textPrimary text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-textPrimary font-semibold mb-3 text-sm">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'scikit-learn', 'NumPy', 'pandas', 'Matplotlib', 'Jupyter Notebook'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary text-accent text-xs rounded-full font-mono border border-accent/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
