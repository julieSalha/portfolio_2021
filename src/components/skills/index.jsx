import Integration from '../skill-integration'
import Advice from '../skill-advice'
import Responsive from '../skill-responsive/'
import Tools from '../skill-tools/'
import Seo from '../skill-seo/'
import Cms from '../skill-cms/'
import Version from '../skill-version/'
import Basics from '../skill-basics/'

const Skills = () => (
    <section className="skills">
        <h2>Compétences</h2>
        <div className="skills__content">
            <Integration />
            <Responsive />
            <Advice />
            <Tools />
        </div>
    </section>
)

export default Skills;