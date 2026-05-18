import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FaAngleDown,
  FaBrain,
  FaChartSimple,
  FaCheck,
  FaFlask,
  FaLayerGroup,
  FaMagnifyingGlassChart,
} from 'react-icons/fa6'
import {
  SiCss,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiNodedotjs,
  SiPandas,
  SiPython,
  SiJupyter,
  SiReact,
  SiTailwindcss,
  SiVscodium,
} from 'react-icons/si'
import SectionHeading from './SectionHeading'
import SkillCard from './SkillCard'

const iconMap = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  react: SiReact,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  mysql: SiMysql,
  github: SiGithub,
  vscode: SiVscodium,
  brain: FaBrain,
  layer: FaLayerGroup,
  chart: FaChartSimple,
  check: FaCheck,
  magnify: FaMagnifyingGlassChart,
  flask: FaFlask,
  python: SiPython,
  numpy: SiNumpy,
  pandas: SiPandas,
  jupyter: SiJupyter,
}

const renderSkillPanel = (groups, isExpanded, setIsExpanded, title, buttonLabel) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.45 }}
    className="rounded-3xl border border-cyan-300/20 bg-[linear-gradient(120deg,rgba(8,47,73,0.72),rgba(15,23,42,0.88),rgba(12,74,110,0.5))] p-5 md:p-6"
  >
    <div className={`pb-4 ${isExpanded ? 'border-b border-cyan-200/15' : ''}`}>
      <div>
        <h3 className="font-heading text-2xl font-semibold text-slate-100 md:text-3xl">{title}</h3>

        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-[linear-gradient(120deg,rgba(34,211,238,0.22),rgba(14,165,233,0.08))] px-4 py-2 text-sm font-semibold text-cyan-50 shadow-[0_18px_40px_-20px_rgba(34,211,238,0.95)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_22px_50px_-20px_rgba(34,211,238,1)]"
          aria-label={isExpanded ? `Hide ${buttonLabel}` : `Show ${buttonLabel}`}
        >
          <span>{isExpanded ? 'Hide Skills' : 'Show Skills'}</span>
          <span
            className={`inline-flex h-5 w-5 items-center justify-center rounded-full border border-cyan-200/40 bg-slate-900/40 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          >
            <FaAngleDown size={14} />
          </span>
        </button>
      </div>
    </div>

    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          key={buttonLabel}
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          transition={{ duration: 0.28 }}
          className="overflow-hidden"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {groups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 shadow-[0_24px_45px_-34px_rgba(34,211,238,0.75)]"
              >
                <div className="inline-block rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-200">
                  Category
                </div>
                <h4 className="mt-2 font-heading text-xl font-semibold text-slate-100">{group.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{group.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillCard key={skill.name} name={skill.name} Icon={iconMap[skill.icon] ?? SiReact} />
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
)

const SkillsSection = ({ skillGroups, aiMlSkillGroups, tools = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isAiMlExpanded, setIsAiMlExpanded] = useState(false)

  return (
    <section id="skills" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I Use to Build End-to-End Applications"
          description="My stack combines modern frontend tooling, dependable backend patterns, and practical dev tools that accelerate development and deployment."
        />

        <div className="flex flex-col gap-6">
          {renderSkillPanel(skillGroups, isExpanded, setIsExpanded, 'Full Stack Skills', 'full stack skills')}
          {renderSkillPanel(aiMlSkillGroups, isAiMlExpanded, setIsAiMlExpanded, 'AI/ML Skills', 'ai/ml skills')}
        </div>
        {tools && tools.length > 0 && (
          <div className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl border border-cyan-300/20 bg-[linear-gradient(120deg,rgba(8,47,73,0.72),rgba(15,23,42,0.88),rgba(12,74,110,0.5))] p-5 md:p-6"
            >
              <div>
                <h3 className="font-heading text-2xl font-semibold text-slate-100 md:text-3xl">Tools</h3>
                <p className="mt-2 text-sm text-slate-400">Tools and platforms I commonly use.</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-2 text-sm font-medium text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default SkillsSection
