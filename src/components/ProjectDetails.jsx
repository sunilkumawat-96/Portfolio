import { AnimatePresence, motion } from 'framer-motion'
import {
  FaBrain,
  FaChartLine,
  FaChevronDown,
  FaCodeBranch,
  FaLightbulb,
  FaPalette,
  FaPlayCircle,
  FaTrophy,
  FaUsers,
  FaBuilding,
} from 'react-icons/fa'

const sectionIcons = {
  brain: FaBrain,
  chart: FaChartLine,
  trophy: FaTrophy,
  palette: FaPalette,
  lightbulb: FaLightbulb,
}

const legacyGroupIcons = {
  citizen: FaUsers,
  admin: FaBuilding,
}

const SectionIcon = ({ iconKey, className }) => {
  const Icon = sectionIcons[iconKey] ?? FaLightbulb
  return <Icon className={className} />
}

const ProjectDetails = ({ details, activeTab, setActiveTab, openSection, setOpenSection, tabs = [] }) => {
  if (!details) {
    return null
  }

  if (details.mode === 'accordion') {
    return (
      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5">
        <div className="space-y-3">
          {details.sections.map((section) => {
            const isOpen = openSection === section.id

            return (
              <div
                key={section.id}
                className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 transition hover:border-cyan-400/35"
              >
                <button
                  type="button"
                  onClick={() => setOpenSection((current) => (current === section.id ? '' : section.id))}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-50 sm:text-base">
                    <SectionIcon iconKey={section.icon} className="text-cyan-300" />
                    {section.title}
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <FaChevronDown className="text-xs text-slate-400" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden border-t border-slate-800"
                    >
                      <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
                        {section.groups.map((group) => (
                          <div key={group.title} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                            <h4 className="text-sm font-semibold text-slate-100">{group.title}</h4>
                            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300">
                              {group.items.map((item) => (
                                <li key={item} className="flex gap-2">
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  if (details.featureGroups) {
    const legacyTabs = tabs.length > 0 ? tabs : details.tabs ?? [
      { id: 'features', label: 'Features' },
      { id: 'stack', label: 'Tech Stack' },
      { id: 'architecture', label: 'Architecture' },
      { id: 'local', label: 'Run Locally' },
      { id: 'vision', label: 'Vision' },
    ]

    return (
      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5">
        <div className="border-b border-slate-800 pb-3">
          <div className="flex flex-wrap gap-2">
            {legacyTabs.map((tab) => {
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                    isActive
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="space-y-4 pt-4">
          {activeTab === 'features' && (
            <div className="space-y-3">
              {details.featureGroups.map((group) => {
                const isOpen = openSection === group.id
                const Icon = legacyGroupIcons[group.id] ?? FaUsers

                return (
                  <div key={group.id} className="rounded-lg border border-slate-800 bg-slate-900/70">
                    <button
                      type="button"
                      onClick={() => setOpenSection((current) => (current === group.id ? '' : group.id))}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                    >
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
                        <Icon className="text-cyan-300" />
                        {group.title}
                      </span>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <FaChevronDown className="text-xs text-slate-400" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <ul className="grid gap-2 border-t border-slate-800 px-4 py-3 text-sm text-slate-300 sm:grid-cols-2">
                            {group.items.map((item) => (
                              <li key={item} className="rounded-md bg-slate-950/70 px-3 py-2">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          )}

          {activeTab === 'stack' && (
            <div className="space-y-3">
              {details.techStackSections.map((section) => (
                <div key={section.title} className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-200">{section.title}</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
              <h4 className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
                <FaCodeBranch className="text-cyan-300" />
                Project Architecture
              </h4>
              <pre className="mt-3 overflow-x-auto rounded-md bg-slate-950 p-3 text-xs leading-relaxed text-slate-300">
                {details.architecture}
              </pre>
            </div>
          )}

          {activeTab === 'local' && (
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
              <h4 className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
                <FaPlayCircle className="text-cyan-300" />
                How to Run Locally
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {details.runLocally.map((step) => (
                  <li key={step.title} className="rounded-md bg-slate-950/70 px-3 py-2">
                    <p className="font-medium text-slate-200">{step.title}</p>
                    <p className="mt-1 text-slate-400">{step.command}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'vision' && (
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
              <h4 className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
                <FaLightbulb className="text-cyan-300" />
                Hackathon Vision
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{details.vision}</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  return null
}

export default ProjectDetails