import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = ({ links }) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <NavLink to="/" className="font-heading text-lg font-semibold tracking-wide text-slate-100">
          DevPortfolio
        </NavLink>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 rounded-full border border-slate-800 bg-slate-900/70 p-1 md:flex">
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

          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-md p-2 text-slate-200 hover:bg-slate-900/60 md:hidden"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        <div
          className={`absolute right-5 top-full mt-3 w-48 rounded-lg bg-slate-900/95 border border-slate-800 p-2 shadow-lg md:hidden ${
            open ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      'block rounded-md px-3 py-2 text-sm font-medium transition',
                      isActive ? 'text-cyan-100' : 'text-slate-300 hover:text-cyan-300',
                    ].join(' ')
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
