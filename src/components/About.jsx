import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBook, FiTarget, FiCode, FiCloud } from 'react-icons/fi'

const highlights = [
  {
    icon: <FiBook className="w-6 h-6" />,
    title: 'Education',
    desc: 'B.Tech ECE (Data Science & Big Data Analytics) from KL University — 88% aggregate',
  },
  {
    icon: <FiCode className="w-6 h-6" />,
    title: 'Core Stack',
    desc: 'Java, Python, SQL, React — building robust full-stack applications with modern frameworks',
  },
  {
    icon: <FiCloud className="w-6 h-6" />,
    title: 'Cloud Expertise',
    desc: 'Microsoft Azure, Azure SQL, Azure Data Factory — designing scalable cloud architectures',
  },
  {
    icon: <FiTarget className="w-6 h-6" />,
    title: 'Career Goal',
    desc: 'Secure an impactful IT role while building scalable tech products that solve real-world problems',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">Get to know me</p>
          <h2 className="text-4xl font-bold text-textPrimary">About Me</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-textPrimary mb-4">
              Building Scalable Systems at the{' '}
              <span className="text-accent">Intersection of Cloud & Code</span>
            </h3>
            <p className="text-textSecondary leading-relaxed mb-4">
              I'm Allam Poornesh, a Cloud-Focused Full Stack Developer and Data Science enthusiast with a
              strong foundation in building scalable, data-driven applications. My academic journey in
              Electronics & Communication Engineering with a specialization in Data Science and Big Data
              Analytics has given me a unique blend of hardware intuition and software depth.
            </p>
            <p className="text-textSecondary leading-relaxed mb-4">
              With hands-on experience across Java Spring Boot microservices, Python Flask APIs, Azure cloud
              infrastructure, and Machine Learning models (ARIMA, LSTM, Vision Transformers), I bring both
              breadth and depth to every project I tackle.
            </p>
            <p className="text-textSecondary leading-relaxed">
              I'm driven by a passion for clean architecture, meaningful data insights, and building products
              that scale. My goal is to contribute to impactful engineering teams while growing towards
              founding a technology startup.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="bg-secondary border border-slate-700/50 rounded-xl p-5 hover:border-accent/40 transition-colors duration-300"
              >
                <div className="text-accent mb-3">{item.icon}</div>
                <h4 className="text-textPrimary font-semibold mb-2">{item.title}</h4>
                <p className="text-textSecondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
