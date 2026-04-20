import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaCertificate } from 'react-icons/fa6'

const CertificateCard = ({ item, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:shadow-[0_16px_35px_-24px_rgba(34,211,238,0.45)]"
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/12 text-cyan-300">
        <FaCertificate className="text-lg" aria-hidden="true" />
      </div>

      <h3 className="font-heading text-lg font-semibold text-slate-100">{item.title}</h3>
      <p className="mt-2 text-sm text-slate-300">{item.platform}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">{item.date}</p>

      {item.certificateUrl && (
        <a
          href={item.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
        >
          View Certificate
          <FaArrowUpRightFromSquare aria-hidden="true" />
        </a>
      )}
    </motion.article>
  )
}

export default CertificateCard
