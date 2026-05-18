
import SkillsSection from '../components/SkillsSection'
import { aiMlSkillGroups, skillGroups, tools } from '../data/portfolioData'

const SkillsPage = () => (
	<SkillsSection skillGroups={skillGroups} aiMlSkillGroups={aiMlSkillGroups} tools={tools} />
)

export default SkillsPage
