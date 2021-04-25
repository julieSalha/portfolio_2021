import React from 'react'
import Nature from '../project-demo-nature/Nature.js'
import SNCF from '../project-demo-sncf/SNCF.js'
import Monoprix from '../project-demo-monoprix/Monoprix.js'
import Dinh from '../project-demo-dinh/'
import Barbara from '../project-demo-barbara/index.jsx'
import Havea from '../../components/project-demo-havea/Havea.js'

const Projects = () => (
    <div>
        <h2>Projets</h2>
        <div className="projects__content">
            <Barbara />
            <Dinh />
            <Nature />
            <SNCF />
            <Havea />
            <Monoprix />
        </div>
    </div>
)

export default Projects;