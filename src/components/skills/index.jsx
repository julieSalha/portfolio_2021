import Integration from '../skill-integration'
import Front from '../skill-front/'
import Responsive from '../skill-responsive/'
import Accessibility from '../skill-accessibility/'
import Seo from '../skill-seo/'
import Cms from '../skill-cms/'
import Version from '../skill-version/'
import Basics from '../skill-basics/'

const Skills = () => (
    <section className="skills" id="skills">
        <h2>Compétences</h2>
        <div className="skills__content">
            <Integration />
            <Front />
            <Responsive />
            <Accessibility />
            <Seo />
            <Cms />
            <Version />
            <Basics />
        </div>
    </section>
)

export default Skills;