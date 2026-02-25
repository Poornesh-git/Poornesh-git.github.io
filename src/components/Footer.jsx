import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-secondary border-t border-slate-700/50 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <p className="text-accent font-mono font-bold text-lg">AP.</p>
          <p className="text-textSecondary text-xs mt-0.5">
            Cloud-Focused Full Stack Developer
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Poornesh-git"
            target="_blank"
            rel="noreferrer"
            className="text-textSecondary hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/poornesh-allam/"
            target="_blank"
            rel="noreferrer"
            className="text-textSecondary hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:2200049139ece@gmail.com"
            className="text-textSecondary hover:text-accent transition-colors"
            aria-label="Email"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-textSecondary text-xs flex items-center gap-1">
          © {year} Allam Poornesh. Built with{' '}
          <FiHeart className="w-3 h-3 text-accent" /> React + Vite
        </p>
      </div>
    </footer>
  )
}
