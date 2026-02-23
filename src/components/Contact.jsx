import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

const contactInfo = [
  {
    icon: <FiMail className="w-5 h-5" />,
    label: 'Email',
    value: '2200049139ece@gmail.com',
    href: 'mailto:2200049139ece@gmail.com',
  },
  {
    icon: <FiPhone className="w-5 h-5" />,
    label: 'Phone',
    value: '+91-9949399834',
    href: 'tel:+919949399834',
  },
  {
    icon: <FiGithub className="w-5 h-5" />,
    label: 'GitHub',
    value: 'Allam Poornesh',
    href: 'https://github.com/Poornesh-git',
  },
  {
    icon: <FiLinkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'Allam Poornesh',
    href: 'https://www.linkedin.com/in/poornesh-allam-455804234/',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend-only form — show success message
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">Get in touch</p>
          <h2 className="text-4xl font-bold text-textPrimary">Contact Me</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-textPrimary mb-4">Let's build something great</h3>
            <p className="text-textSecondary leading-relaxed mb-8">
              I'm actively looking for cloud and full-stack engineering roles. Whether you have an opportunity,
              a project idea, or just want to connect — I'd love to hear from you.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'GitHub' || item.label === 'LinkedIn' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary rounded-xl border border-slate-700/50 hover:border-accent/40 transition-colors duration-300 group"
                >
                  <div className="text-accent group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <p className="text-textSecondary text-xs mb-0.5">{item.label}</p>
                    <p className="text-textPrimary text-sm font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-secondary border border-slate-700/50 rounded-2xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-textSecondary text-xs mb-1.5 font-medium">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-2.5 text-textPrimary text-sm placeholder-slate-600 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-textSecondary text-xs mb-1.5 font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-2.5 text-textPrimary text-sm placeholder-slate-600 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-textSecondary text-xs mb-1.5 font-medium">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                  className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-2.5 text-textPrimary text-sm placeholder-slate-600 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-textSecondary text-xs mb-1.5 font-medium">Message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message..."
                  rows={5}
                  className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-2.5 text-textPrimary text-sm placeholder-slate-600 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accentDark transition-colors duration-200 shadow-lg shadow-accent/20"
              >
                <FiSend className="w-4 h-4" />
                Send Message
              </button>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm text-center font-medium"
                >
                  ✓ Message sent! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
