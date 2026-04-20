import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import SectionHeading from './SectionHeading'

const ContactSection = () => {
  return (
    <section id="contact" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Build Something Exceptional"
          description="Have an idea, role, or project in mind? Send me a message and I will get back to you soon."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:grid-cols-2 md:gap-8 md:p-8"
        >
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/35 p-5 md:p-6">
            <h3 className="font-heading text-2xl font-semibold text-slate-100">Get in Touch</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              I am open to internships, projects, and collaboration opportunities in Full Stack Development and AI/ML.
            </p>

            <div className="mt-5 grid gap-3">
              <a
                href="mailto:sunilk365736@gmail.com"
                className="group inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 transition duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                <FaEnvelope className="text-cyan-300" aria-hidden="true" />
                <span>sunilk365736@gmail.com</span>
              </a>
              <a
                href="https://github.com/sunilkumawat-96"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 transition duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                <FaGithub className="text-cyan-300" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sunil-kumawat-544596375"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 transition duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                <FaLinkedinIn className="text-cyan-300" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <form className="grid gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/35 p-5 md:p-6">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300"
            />
            <textarea
              rows="6"
              placeholder="Your Message"
              className="rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300"
            />
            <button
              type="button"
              className="mt-1 w-full rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300 md:w-fit"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
