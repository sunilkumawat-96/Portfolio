import AchievementsSection from '../components/AchievementsSection'
import { certifications, hackathons, workshops } from '../data/portfolioData'

const AchievementsPage = () => {
  return <AchievementsSection hackathons={hackathons} certifications={certifications} workshops={workshops} />
}

export default AchievementsPage
