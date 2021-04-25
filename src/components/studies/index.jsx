import health from '../../assets/img/picto/health.svg'
import camera from '../../assets/img/picto/camera.svg'
import www from '../../assets/img/picto/www.svg'

import rouge_mini from '../../assets/img/photo/dame_en_rouge_mobile.jpg'
import rouge from '../../assets/img/photo/dame_en_rouge.jpg'
import champagne_mini from '../../assets/img/photo/champagne_mobile.jpg'
import champagne from '../../assets/img/photo/champagne.jpg'
import archi_mini from '../../assets/img/photo/archi_mobile.jpg'
import archi from '../../assets/img/photo/archi.jpg'
import julien_mini from '../../assets/img/photo/julien_mobile.jpg'
import julien from '../../assets/img/photo/julien.jpg'
import lucie_mini from '../../assets/img/photo/lucie_mobile.jpg'
import lucie from '../../assets/img/photo/lucie.jpg'
import ocean_mini from '../../assets/img/photo/ocean_mobile.jpg'
import ocean from '../../assets/img/photo/ocean.jpg'
import reportage_mini from '../../assets/img/photo/reportage_mobile.jpg'
import reportage from '../../assets/img/photo/reportage.jpg'

const Studies = () => (
    <section id="studies" className="studies">
        <h2>Parcours</h2>
        <div className="studies-content">
            <div className="block-study">
                <img className="picto-study picto-study--health" src={health} alt="health" />
                <p>2006- 2009</p>
                <p>Santé</p>
            </div>
            <div className="block-study">
                <img className="picto-study picto-study--photo" src={camera} alt="camera" />
                <p>2011- 2013</p>
                <p><a className="link-content" href="/" onClick={openPortfolio}>Photographie</a></p>
                <div id="portfolio-photo" className="portfolio-photo">
                    <div className="photo-modal-container">
                        <span className="portfolio-photo__close link-content" onClick={closePortfolio}>close</span>
                        <div className="portfolio-photo__container">
                            <picture>
                                <source media="(max-width: 768px)" srcSet={rouge_mini} />
                                <source media="(min-width: 769px)" srcSet={rouge} />
                                <img src={rouge} alt="la dame en rouge"/>
                            </picture>
                            <picture>
                                <source media="(max-width: 768px)" srcSet={champagne_mini} />
                                <source media="(min-width: 769px)" srcSet={champagne} />
                                <img src={champagne} alt="nature morte - champagne"/>
                            </picture>
                            <picture>
                                <source media="(max-width: 768px)" srcSet={archi_mini} />
                                <source media="(min-width: 769px)" srcSet={archi} />
                                <img src={archi} alt="architecture - bordeaux"/>
                            </picture>
                            <picture>
                                <source media="(max-width: 768px)" srcSet={julien_mini} />
                                <source media="(min-width: 769px)" srcSet={julien} />
                                <img src={julien} alt="portrait danseur"/>
                            </picture>
                            <picture>
                                <source media="(max-width: 768px)" srcSet={ocean_mini} />
                                <source media="(min-width: 769px)" srcSet={ocean} />
                                <img src={ocean} alt="ocean pays basque"/>
                            </picture>
                            <picture>
                                <source media="(max-width: 768px)" srcSet={lucie_mini} />
                                <source media="(min-width: 769px)" srcSet={lucie} />
                                <img src={lucie} alt="lucie et cookie"/>
                            </picture>
                            <picture>
                                <source media="(max-width: 799px)" srcSet={reportage_mini} />
                                <source media="(min-width: 800px)" srcSet={reportage} />
                                <img src={reportage} alt="reportage pays basque"/>
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block-study">
                <img className="picto-study picto-study--photo" src={www} alt="camera" />
                <p>2018- 2021</p>
                <p>Développement web</p>
            </div>
        </div>
    </section>
)

//console.log('test', );


function openPortfolio(e) {
    e.preventDefault();
    const openModal = document.querySelector('#portfolio-photo');
    openModal.classList.add('active');
    document.querySelector('body').classList.add('hide-scrollbar');
}

function closePortfolio(e) {
    e.preventDefault();
    const openModal = document.querySelector('#portfolio-photo');
    openModal.classList.remove('active');
    document.querySelector('body').classList.remove('hide-scrollbar');
}


//hide-scrollbar

export default Studies;