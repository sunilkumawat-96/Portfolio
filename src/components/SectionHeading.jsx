import { motion } from 'framer-motion'

const SectionHeading = ({ eyebrow, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.5 }}
    className="mx-auto mb-12 max-w-2xl text-center"
  >
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
    <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">{title}</h2>
    <p className="mt-4 text-sm leading-relaxed text-slate-400 md:text-base">{description}</p>
  </motion.div>
)

export default SectionHeading
