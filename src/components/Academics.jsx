import { motion } from 'framer-motion'
import { FaGraduationCap, FaBuildingColumns, FaCalendarDays, FaBook, FaTrophy } from 'react-icons/fa6'

const Academics = () => {
  return (
    <div className="mt-8 md:mt-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h3 className="font-heading text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">Academics</h3>
        <p className="mt-2 text-sm text-slate-400">My educational background and academic journey.</p>
      </motion.div>

      <div className="space-y-5">
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-glow transition duration-300 hover:border-cyan-300/45 hover:bg-slate-900/80 md:flex-row md:items-center md:gap-10 md:p-8"
        >
          <div className="flex shrink-0 flex-col items-start gap-4 md:w-1/4">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20 group-hover:text-cyan-200">
              <FaGraduationCap className="text-3xl" aria-hidden="true" />
            </div>
            <div className="flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-100">
              <FaCalendarDays aria-hidden="true" />
              <span>2024 – 2028</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:w-3/4">
            <div>
              <h4 className="font-heading text-xl font-bold text-slate-100 transition duration-300 group-hover:text-cyan-100">
                B.Tech (Bachelor of Technology)
              </h4>
              <p className="mt-1 text-sm font-medium text-cyan-300 md:text-base">
                Computer Science Engineering (CSE)
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-gradient-to-r from-amber-400/20 via-yellow-300/10 to-amber-400/20 px-4 py-2 text-sm font-semibold text-amber-100 shadow-[0_0_24px_-12px_rgba(251,191,36,0.95)] transition duration-300 group-hover:border-amber-200/55 group-hover:text-amber-50">
                <FaTrophy className="text-amber-300" aria-hidden="true" />
                <span>1st Rank in CSE Batch</span>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <FaBuildingColumns className="mt-1 shrink-0 text-slate-400 transition duration-300 group-hover:text-cyan-300/70" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-slate-300">
                  <strong className="font-medium text-slate-200">College:</strong> Government Engineering College, Jaipur
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FaBook className="mt-1 shrink-0 text-slate-400 transition duration-300 group-hover:text-cyan-300/70" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-slate-300">
                  <strong className="font-medium text-slate-200">University:</strong> Rajasthan Technical University
                </span>
              </div>

              <div className="mt-1 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/8 px-4 py-2 text-sm text-slate-200 transition duration-300 group-hover:border-cyan-200/35">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">CGPA</span>
                <span className="font-semibold text-slate-100">9.07</span>
                <span className="text-slate-400">/ 10</span>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="group relative flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-glow transition duration-300 hover:border-cyan-300/45 hover:bg-slate-900/80 md:flex-row md:items-center md:gap-10 md:p-8"
        >
          <div className="flex shrink-0 flex-col items-start gap-4 md:w-1/4">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20 group-hover:text-cyan-200">
              <FaGraduationCap className="text-3xl" aria-hidden="true" />
            </div>
            <div className="flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-100">
              <FaCalendarDays aria-hidden="true" />
              <span>Pass Out - 2023</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:w-3/4">
            <div>
              <h4 className="font-heading text-xl font-bold text-slate-100 transition duration-300 group-hover:text-cyan-100">
                Class 12th (Senior Secondary)
              </h4>
              <p className="mt-1 text-sm font-medium text-cyan-300 md:text-base">Percentage: 80.40%</p>
            </div>

            <div className="mt-2 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <FaBuildingColumns className="mt-1 shrink-0 text-slate-400 transition duration-300 group-hover:text-cyan-300/70" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-slate-300">
                  <strong className="font-medium text-slate-200">School:</strong> Rose Academic Sr. Sec. School
                </span>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  )
}

export default Academics