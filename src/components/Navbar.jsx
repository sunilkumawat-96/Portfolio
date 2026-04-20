import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = ({ links }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <NavLink to="/" className="font-heading text-lg font-semibold tracking-wide text-slate-100">
          DevPortfolio
        </NavLink>
        <ul className="flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/70 p-1">
          {links.map((link) => {
            return (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    [
                      'relative block rounded-full px-3 py-2 text-xs font-medium tracking-wide transition md:px-4 md:text-sm',
                      isActive ? 'text-cyan-100' : 'text-slate-300 hover:text-cyan-300',
                    ].join(' ')
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="active-pill"
                          className="absolute inset-0 rounded-full bg-cyan-400/15"
                          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
