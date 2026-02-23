import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward } from 'react-icons/fi'

const certs = [
  {
    title: 'Salesforce AI Associate',
    issuer: 'Salesforce',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30',
    icon: '☁️',
  },
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft (AZ-900)',
    color: 'from-sky-500/20 to-blue-600/20',
    border: 'border-sky-500/30',
    icon: '⚡',
  },
  {
    title: 'Wipro TalentNext JFSD',
    issuer: 'Wipro',
    color: 'from-purple-500/20 to-violet-500/20',
    border: 'border-purple-500/30',
    icon: '💻',
  },
  {
    title: 'AI & ML using Python — Level 1',
    issuer: 'Certified Program',
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/30',
    icon: '🤖',
  },
  {
    title: 'AI & ML using Python — Level 2',
    issuer: 'Certified Program',
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/30',
    icon: '🧠',
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">Credentials</p>
          <h2 className="text-4xl font-bold text-textPrimary">Certifications</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bg-gradient-to-br ${cert.color} border ${cert.border} rounded-xl p-6 hover:scale-[1.03] transition-transform duration-300`}
            >
              <div className="text-3xl mb-3">{cert.icon}</div>
              <div className="flex items-start gap-2">
                <FiAward className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-textPrimary font-bold text-sm leading-snug">{cert.title}</h3>
                  <p className="text-textSecondary text-xs mt-1">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
