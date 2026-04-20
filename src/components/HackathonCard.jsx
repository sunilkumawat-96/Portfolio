import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaCode, FaMedal, FaGithub } from 'react-icons/fa6'

const HackathonCard = ({ item, index }) => {
  const isGitHubUrl = item.credentialUrl?.includes('github.com')

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="relative rounded-2xl border border-cyan-400/20 bg-slate-900/75 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.07),0_20px_45px_-24px_rgba(34,211,238,0.4)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/45"
    >
      <div className="absolute -left-[33px] top-10 hidden h-3.5 w-3.5 rounded-full border-2 border-cyan-300 bg-slate-950 md:block" />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-heading text-2xl font-semibold text-slate-100">{item.name}</h3>
        <span className="inline-flex items-center gap-2.5 rounded-full border-2 border-cyan-300/60 bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 px-5 py-2.5 text-sm font-bold text-cyan-50 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
          <FaMedal aria-hidden="true" className="text-lg" />
          {item.result}
        </span>
      </div>

      <p className="mt-3 text-sm font-medium text-slate-300">Role: {item.role}</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-400">{item.description}</p>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {item.techStack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/85 px-3 py-1.5 text-xs font-medium text-slate-200"
          >
            <FaCode className="text-cyan-300" aria-hidden="true" />
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        {item.credentialUrl && (
          <a
            href={item.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg border-2 border-transparent bg-gradient-to-r from-cyan-500/40 to-cyan-600/30 px-5 py-2.5 text-sm font-semibold text-cyan-50 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition duration-300 hover:from-cyan-500/60 hover:to-cyan-600/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
          >
            {isGitHubUrl ? (
              <>
                <FaGithub aria-hidden="true" className="text-lg" />
                View Project on GitHub
              </>
            ) : (
              <>
                View Credential
                <FaArrowUpRightFromSquare aria-hidden="true" />
              </>
            )}
          </a>
        )}

        {item.certificateImage && (
          <a
            href={item.certificateImage}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-2.5 rounded-lg border-2 border-transparent bg-gradient-to-r from-amber-500/40 to-orange-500/30 px-5 py-2.5 text-sm font-semibold text-amber-50 shadow-[0_0_15px_rgba(251,146,60,0.2)] transition duration-300 hover:from-amber-500/60 hover:to-orange-500/50 hover:shadow-[0_0_25px_rgba(251,146,60,0.4)]"
          >
            View Certificate
            <FaArrowUpRightFromSquare aria-hidden="true" className="text-lg" />
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default HackathonCard
