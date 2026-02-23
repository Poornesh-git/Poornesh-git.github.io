import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiStar } from 'react-icons/fi'

const achievements = [
  {
    title: 'Technical Trainee — AmarRaja Industries',
    description:
      'Selected as a Technical Trainee at AmarRaja Industries, a leading energy storage and automotive systems company in India. Recognized for technical aptitude and engineering fundamentals.',
    tag: 'Industry Selection',
    color: 'from-yellow-500/10 to-amber-500/10',
    border: 'border-yellow-500/30',
  },
  {
    title: 'Wipro WILP Selection',
    description:
      "Shortlisted for Wipro's Work Integrated Learning Program (WILP), a prestigious program that combines industry experience with advanced learning, reflecting strong academic and technical performance.",
    tag: 'Program Selection',
    color: 'from-purple-500/10 to-violet-500/10',
    border: 'border-purple-500/30',
  },
  {
    title: 'Internship + PPO — Blue Star',
    description:
      "Completed an internship at Blue Star, one of India's leading HVAC and commercial refrigeration companies, earning a Pre-Placement Offer (PPO) based on outstanding performance during the internship.",
    tag: 'Pre-Placement Offer',
    color: 'from-blue-500/10 to-cyan-500/10',
    border: 'border-blue-500/30',
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">Recognition</p>
          <h2 className="text-4xl font-bold text-textPrimary">Achievements</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center gap-2 mb-3">
                <FiStar className="w-5 h-5 text-accent" />
                <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-textPrimary font-bold mb-3 leading-snug">{item.title}</h3>
              <p className="text-textSecondary text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
