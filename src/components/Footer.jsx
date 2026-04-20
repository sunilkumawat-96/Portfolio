const Footer = () => {
  return (
    <footer className="border-t border-slate-800 px-5 py-10 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
