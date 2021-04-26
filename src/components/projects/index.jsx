import React from 'react'
import Nature from '../project-demo-nature/Nature.js'
import SNCF from '../project-demo-sncf/SNCF.js'
import Monoprix from '../project-demo-monoprix/Monoprix.js'
import Dinh from '../project-demo-dinh/'
import Lvn from '../project-demo-lvn/'
import Legramme from '../project-demo-legramme/'
import Barbara from '../project-demo-barbara/index.jsx'
import Havea from '../../components/project-demo-havea/Havea.js'

const Projects = () => (
    <section>
        <h2>Projets</h2>
        <div className="projects__content">
            <Barbara />
            <Dinh />
            <Lvn />
            <Legramme />
            <Nature />
            <SNCF />
            <Havea />
            <Monoprix />
            <div className="block-demo block-demo--perso">
                <h4><a className="link-content" href="" target="_blank">Piano & Co.</a></h4>
            </div>
        </div>
    </section>
)

export default Projects;