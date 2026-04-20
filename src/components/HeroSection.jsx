import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SocialLinks from './SocialLinks'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-16 md:px-8 md:pt-24">
      <div className="absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_40%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0))]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Hello, I am</p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Sunil Kumawat
          </h1>
          <p className="mt-4 font-heading text-xl font-medium text-cyan-200 md:text-2xl">
            Full Stack Web Developer / AI/ML Engineer
          </p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 md:text-lg">
            I build elegant, fast, and scalable web experiences that connect clean interface design with strong backend architecture.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_20px_40px_-20px_rgba(34,211,238,0.55)]"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 px-8 py-3 text-sm font-semibold text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-300/15"
            >
              Contact Me
            </Link>
          </div>

          <SocialLinks />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md lg:ml-auto"
        >
          <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.24),transparent_55%)]" />
          <div className="absolute inset-3 rounded-full border border-cyan-100/15" />
          <div className="absolute -right-8 -top-10 hidden h-40 w-40 rounded-full bg-cyan-300/20 blur-2xl md:block" />
          <div className="absolute -left-6 bottom-10 hidden h-20 w-20 rounded-full border border-cyan-200/25 bg-cyan-300/10 backdrop-blur-sm md:block" />
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full border border-cyan-300/25 bg-slate-900/85 p-2 shadow-[0_35px_85px_-30px_rgba(34,211,238,0.72)] backdrop-blur-sm">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <img
                src="/profile-photo.jpeg"
                alt="Sunil Kumawat profile"
                className="h-full w-full scale-[1.04] object-cover object-[50%_14%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-100/15 to-transparent" />
            </div>
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-cyan-200/30 bg-slate-900/90 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-100 shadow-[0_12px_30px_-18px_rgba(34,211,238,0.8)] backdrop-blur-sm">
            Full Stack + AI/ML
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
