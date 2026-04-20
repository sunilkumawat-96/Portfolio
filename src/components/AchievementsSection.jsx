import { motion } from 'framer-motion'
import { FaBolt, FaGraduationCap, FaLaptopCode } from 'react-icons/fa6'
import SectionHeading from './SectionHeading'
import HackathonCard from './HackathonCard'
import CertificateCard from './CertificateCard'

const AchievementsSection = ({ hackathons, certifications, workshops }) => {
  const hasHackathons = hackathons.length > 0
  const hasCertifications = certifications.length > 0
  const hasWorkshops = workshops.length > 0

  return (
    <section className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Hackathon and Certification Highlights"
          description="Selected achievements from competitive hackathons and certifications."
        />

        {hasHackathons && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100"
            >
              <FaBolt aria-hidden="true" />
              Hackathon Experience
            </motion.div>

            <div className="relative mb-16 space-y-5 md:ml-8 md:border-l md:border-cyan-400/20 md:pl-8">
              {hackathons.map((item, index) => (
                <HackathonCard key={item.name} item={item} index={index} />
              ))}
            </div>
          </>
        )}

        {hasCertifications && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-100"
            >
              <FaGraduationCap aria-hidden="true" />
              Certifications
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((item, index) => (
                <CertificateCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </>
        )}

        {hasWorkshops && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="mb-8 mt-16 inline-flex items-center gap-3 rounded-full border border-purple-300/30 bg-purple-300/10 px-4 py-2 text-sm font-semibold text-purple-100"
            >
              <FaLaptopCode aria-hidden="true" />
              Workshops & Training
            </motion.div>

            <div className="relative space-y-5 md:ml-8 md:border-l md:border-purple-400/20 md:pl-8">
              {workshops.map((item, index) => (
                <HackathonCard key={item.name} item={item} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default AchievementsSection
