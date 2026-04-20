import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaLocationDot } from 'react-icons/fa6'
import Academics from './Academics'

const AboutSection = () => {
  return (
    <section id="about" className="px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-300/60" />
          <p className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200 shadow-[0_0_25px_-12px_rgba(34,211,238,0.9)]">
            About
          </p>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-300/60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-cyan-300/25 bg-[linear-gradient(120deg,rgba(8,47,73,0.8),rgba(15,23,42,0.88),rgba(12,74,110,0.45))] p-6 shadow-[0_25px_55px_-35px_rgba(34,211,238,0.95)] md:p-8"
        >
          <div className="max-w-4xl space-y-4 text-sm leading-relaxed text-slate-300 md:text-base">
            <p>
              I build modern, user-focused web applications that combine clean design with real functionality using technologies like React and Node.js.
            </p>
            <p>
              Alongside development, I explore Artificial Intelligence and Machine Learning, applying Python with libraries like NumPy and Pandas to analyze data and uncover insights.
            </p>
            <p>
              Driven by curiosity and continuous learning, I actively participate in hackathons and enjoy turning ideas into impactful, real-world solutions.
            </p>
          </div>
        </motion.div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/55 px-5 py-4 text-slate-200 shadow-glow"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
              <FaLocationDot aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Location</p>
              <p className="text-sm font-medium text-slate-100">Jaipur, Rajasthan, India</p>
            </div>
          </motion.div>

          <motion.a
            href="mailto:sunilk365736@gmail.com"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/55 px-5 py-4 text-slate-200 shadow-glow transition duration-300 hover:border-cyan-300/45 hover:bg-cyan-300/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
              <FaEnvelope aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Email</p>
              <p className="text-sm font-medium text-slate-100">sunilk365736@gmail.com</p>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/sunilkumawat-96"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/55 px-5 py-4 text-slate-200 shadow-glow transition duration-300 hover:border-cyan-300/45 hover:bg-cyan-300/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
              <FaGithub aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">GitHub</p>
              <p className="text-sm font-medium text-slate-100">sunilkumawat-96</p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sunil-kumawat-544596375"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/55 px-5 py-4 text-slate-200 shadow-glow transition duration-300 hover:border-cyan-300/45 hover:bg-cyan-300/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
              <FaLinkedinIn aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">LinkedIn</p>
              <p className="text-sm font-medium text-slate-100">Sunil Kumawat</p>
            </div>
          </motion.a>
        </div>

        <Academics />
      </div>
    </section>
  )
}

export default AboutSection
