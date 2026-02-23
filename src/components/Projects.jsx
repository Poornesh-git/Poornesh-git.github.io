import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'

const projects = [
  {
    title: 'Expense Sharing Backend System',
    description:
      'A robust RESTful backend for splitting expenses with equal, exact, and percentage-based split logic. Includes automatic balance simplification to minimize transactions.',
    tech: ['Flask', 'MySQL', 'Python', 'REST APIs'],
    features: [
      'Equal / Exact / Percentage split logic',
      'Automatic balance simplification',
      'RESTful API design',
      'Group expense management',
    ],
    github: '#',
    demo: '#',
    color: 'from-blue-500/10 to-cyan-500/10',
    border: 'border-blue-500/30',
    tag: 'Backend',
  },
  {
    title: 'Inventory Management with Demand Forecasting',
    description:
      'End-to-end inventory analytics platform integrating Azure SQL with Power BI dashboards, using ARIMA and LSTM models for accurate demand forecasting.',
    tech: ['Python', 'Azure SQL', 'Power BI', 'ARIMA', 'LSTM', 'Azure Data Factory'],
    features: [
      'ARIMA + LSTM demand forecasting',
      'Azure Data Factory pipeline',
      'Power BI real-time dashboards',
      'Automated reorder alerts',
    ],
    github: '#',
    demo: '#',
    color: 'from-green-500/10 to-emerald-500/10',
    border: 'border-green-500/30',
    tag: 'Cloud/ML',
  },
  {
    title: 'Human Activity Recognition (Transformers)',
    description:
      'Research-grade HAR system using Vision Transformer (ViT) and STAR Transformer architectures on HOJ3D and NTU RGB+D 120 datasets with attention-based skeletal modeling.',
    tech: ['Python', 'ViT', 'STAR Transformer', 'PyTorch', 'HOJ3D', 'NTU120'],
    features: [
      'Vision Transformer (ViT) implementation',
      'STAR Transformer architecture',
      'HOJ3D & NTU120 datasets',
      'Attention-based skeletal modeling',
    ],
    github: '#',
    demo: '#',
    color: 'from-purple-500/10 to-violet-500/10',
    border: 'border-purple-500/30',
    tag: 'ML Research',
  },
]

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-secondary border border-slate-700 rounded-2xl p-8 max-w-lg w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded-full mb-2 inline-block">
                {project.tag}
              </span>
              <h3 className="text-xl font-bold text-textPrimary">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-textSecondary hover:text-accent p-1 transition-colors"
              aria-label="Close"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          <p className="text-textSecondary text-sm leading-relaxed mb-6">{project.description}</p>
          <div className="mb-6">
            <h4 className="text-textPrimary font-semibold mb-3 text-sm">Key Features</h4>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-textSecondary text-sm">
                  <span className="text-accent mt-1">▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-textPrimary font-semibold mb-3 text-sm">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 bg-primary text-accent text-xs rounded-md font-mono border border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-slate-600 text-textSecondary text-sm rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              <FiGithub className="w-4 h-4" /> GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-primary text-sm font-semibold rounded-lg hover:bg-accentDark transition-colors"
            >
              <FiExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">What I've built</p>
          <h2 className="text-4xl font-bold text-textPrimary">Featured Projects</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-gradient-to-br ${project.color} border ${project.border} rounded-xl p-6 flex flex-col hover:scale-[1.02] transition-transform duration-300 cursor-pointer`}
              onClick={() => setSelected(project)}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded-full">
                  {project.tag}
                </span>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-textSecondary hover:text-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-textSecondary hover:text-accent transition-colors"
                    aria-label="Live demo"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <h3 className="text-textPrimary font-bold text-lg mb-3">{project.title}</h3>
              <p className="text-textSecondary text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-primary/60 text-textSecondary text-xs rounded font-mono border border-slate-700/50">
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-0.5 bg-primary/60 text-accent text-xs rounded font-mono border border-accent/30">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
