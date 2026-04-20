import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { navLinks } from '../data/portfolioData'

const SiteLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar links={navLinks} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default SiteLayout
