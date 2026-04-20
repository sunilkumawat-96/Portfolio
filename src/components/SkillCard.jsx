import { motion } from 'framer-motion'

const SkillCard = ({ name, Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/85 px-3 py-2 shadow-[0_18px_30px_-24px_rgba(34,211,238,0.95)] hover:border-cyan-300/50 hover:bg-slate-900"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-100 transition duration-300 group-hover:scale-105 group-hover:border-cyan-200/60 group-hover:text-cyan-50">
        <Icon size={16} />
      </div>
      <p className="text-sm font-semibold text-slate-100">{name}</p>
    </motion.div>
  )
}

export default SkillCard