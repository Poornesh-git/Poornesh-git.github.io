import { motion } from 'framer-motion'
import { FiDownload, FiCode, FiMail } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-mono text-sm mb-4 tracking-widest uppercase">Hi, I'm</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-textPrimary mb-4 leading-tight">
            Allam <span className="text-accent">Poornesh</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-textSecondary font-medium mb-6">
            Cloud-Focused Full Stack Developer
            <span className="text-accent"> | </span>
            Azure
            <span className="text-accent"> | </span>
            SQL
            <span className="text-accent"> | </span>
            ML
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            B.Tech ECE (Data Science & Big Data Analytics) graduate from KL University.
            Building scalable cloud applications, intelligent data pipelines, and modern full-stack systems.
            Passionate about turning data into decisions and code into impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accentDark transition-colors duration-200 shadow-lg shadow-accent/20"
            >
              <FiDownload className="w-5 h-5" />
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 border border-accent/50 text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors duration-200"
            >
              <FiCode className="w-5 h-5" />
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border border-slate-600 text-textSecondary font-semibold rounded-lg hover:border-accent/50 hover:text-accent transition-colors duration-200"
            >
              <FiMail className="w-5 h-5" />
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-textSecondary/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
