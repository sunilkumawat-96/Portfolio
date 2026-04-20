import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

import ProjectDetails from './ProjectDetails'

const ProjectCard = ({ project, index }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('features')
  const [openSection, setOpenSection] = useState('')
  const hasDetails = Boolean(project.details)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20 transition duration-300 hover:border-cyan-300/45 hover:bg-slate-900 hover:shadow-cyan-500/20"
    >
      {project.thumbnail && (
        <img
          src={project.thumbnail}
          alt={`${project.title} preview`}
          className="mb-4 h-44 w-full rounded-xl object-cover"
          loading="lazy"
        />
      )}

      <h3 className="font-heading text-2xl font-semibold text-slate-100">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
        >
          GitHub
        </a>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
        >
          Live Demo
        </a>

        {hasDetails && (
          <button
            type="button"
            onClick={() => setIsDetailsOpen((current) => !current)}
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20"
          >
            {isDetailsOpen ? 'Hide Details' : 'View Details'}
            <motion.span animate={{ rotate: isDetailsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <FaChevronDown className="text-xs" />
            </motion.span>
          </button>
        )}
      </div>

      <AnimatePresence initial={false}>
        {hasDetails && isDetailsOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <ProjectDetails
              details={project.details}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              openSection={openSection}
              setOpenSection={setOpenSection}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export default ProjectCard
