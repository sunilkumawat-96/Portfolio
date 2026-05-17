const Footer = () => {
  return (
    <footer className="border-t border-slate-800 px-5 py-8 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p className="text-center md:text-left">2026 @ Sunil Kumawat</p>
        <div className="flex items-center justify-center gap-6 md:justify-end">
          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
