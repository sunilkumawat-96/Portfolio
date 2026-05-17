import { motion } from 'framer-motion'
import { FaFileLines, FaGithub, FaLinkedinIn } from 'react-icons/fa6'

const socialLinks = [
  {
    label: 'Resume',
    href: '/Sunil_Resume1705.pdf',
    icon: FaFileLines,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sunil-kumawat-544596375',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/sunilkumawat-96',
    icon: FaGithub,
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
          whileHover={{ y: -2 }}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-3 text-sm font-semibold text-cyan-50 shadow-[0_0_0_1px_rgba(34,211,238,0.3),0_22px_40px_-20px_rgba(34,211,238,0.58)] transition duration-300 hover:text-white hover:shadow-[0_0_0_1px_rgba(34,211,238,0.5),0_28px_50px_-18px_rgba(34,211,238,0.82)]"
        >
          <span
            className="pointer-events-none absolute -inset-[2.5px] rounded-full bg-[conic-gradient(from_0deg,rgba(34,211,238,0),rgba(34,211,238,0)_70%,rgba(34,211,238,1)_84%,rgba(186,230,253,1)_91%,rgba(34,211,238,0)_100%)] opacity-100 blur-[0.4px] [will-change:transform] animate-[spin_2.2s_linear_infinite] group-hover:animate-[spin_1.1s_linear_infinite]"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute -inset-[5px] rounded-full bg-[conic-gradient(from_180deg,rgba(34,211,238,0),rgba(125,211,252,0.82),rgba(34,211,238,0))] opacity-80 blur-[3px] [animation-direction:reverse] [will-change:transform] animate-[spin_5.2s_linear_infinite] group-hover:animate-[spin_2.8s_linear_infinite]"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute inset-[2.2px] rounded-full bg-slate-950/95"
            aria-hidden="true"
          />
          <span className="relative z-10 inline-flex items-center gap-3">
            <Icon
              className="text-[30px] text-cyan-200 transition duration-300 group-hover:scale-110 group-hover:text-cyan-100"
              aria-hidden="true"
            />
            <span>{label}</span>
          </span>
        </motion.a>
      ))}
    </div>
  )
}

export default SocialLinks
