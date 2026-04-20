import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/sunilkumawat-96',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sunil-kumawat-544596375',
    icon: FaLinkedinIn,
  },
]

const SocialLinks = () => {
  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      {socialLinks.map(({ label, href, icon: Icon }, index) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 + index * 0.06 }}
          className="group inline-flex items-center justify-center gap-3 rounded-full border border-slate-700/80 bg-slate-900/70 px-5 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-100 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.2),0_18px_35px_-20px_rgba(34,211,238,0.45)]"
        >
          <Icon className="text-[30px] text-cyan-300 transition duration-300 group-hover:scale-110" aria-hidden="true" />
          <span>{label}</span>
        </motion.a>
      ))}
    </div>
  )
}

export default SocialLinks
