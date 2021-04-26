import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.scss';
import Logo from './components/logo'

import icon_github from '../src/assets/img/picto/icon_github.svg'
import icon_instagram from '../src/assets/img/picto/icon_instagram.svg'
import icon_linkedin from '../src/assets/img/picto/icon_linkedin.svg'

import opquast from '../src/assets/img/picto/opquast.svg'
import green_it from '../src/assets/img/picto/green_it.jpeg'
import voltaire from '../src/assets/img/picto/voltaire.svg'

import animejs from "animejs/lib/anime.es.js";

import Home from './pages/home'

const App = () => (
  <Router>
  <div>
  <i className="cursor"></i>
    <header>
      <div className="header-visuals">
        <div className="header__burger-menu">
            <button type="button" className="header__burger-button" id="header__burger-button" onClick={toggleMenu}>
                <span className="header__burger-icon">
                    <span className="header__burger-line"></span>
                    <span className="header__burger-line"></span>
                </span>
                <span className="header__burger-icon__subtitle">menu</span>
            </button>
        </div>
        <div className="header__logo">
            <a className="go-home" href="/"><Logo /></a>
        </div>
      </div>
      <div className="header-navigation">
        <nav onClick={closeMenu}>
            <ul>
                <li>
                    <Link to="/#skills">Compétences</Link>
                </li>
                <li>
                    <Link href="/#studies">Parcours</Link>
                </li>
                <li>
                    <Link to="/#projects">Projets</Link>
                </li>
                <li>
                    <Link to="#contact">Contact</Link>
                </li>
            </ul>
        </nav>
      </div>
    </header>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
    <footer id="#contact">
    <div className="socials">
      <a className="socials__linkedin" href="https://www.linkedin.com/in/juliesalha/" target="_blank" rel="noopener noreferrer"><img src={icon_linkedin} alt="linkedin" /></a>
      <a className="socials__github" href="https://github.com/julieSalha" target="_blank" rel="noopener noreferrer"><img src={icon_github} alt="github" /></a>
      <a className="socials__instagram" href="https://www.instagram.com/julie_salha/" target="_blank" rel="noopener noreferrer"><img src={icon_instagram} alt="instagram" /></a>
    </div>
    <div className="footer-links">
      <a href="mailto:julie.salha@gmail.com">Contact</a>
    </div>
    <div className="footer-copyright">
      <p>© Copyright 2021 - Julie Salha</p>
      <div className="footer-certifications" >
        <a className="certi-logo certi-opquast link-content" href="https://certificates.opquast.com/certificate/4C6LY1" target="_blank" rel="noopener noreferrer"><img src={opquast} alt="opquast avancé" /></a>
        <a className="certi-logo certi-green link-content" href="https://www.greenit.fr/" target="_blank" rel="noopener noreferrer"><img src={green_it} alt="green-it.fr" /></a>
        <a className="certi-logo certi-voltaire link-content" href="https://www.certificat-voltaire.fr/" target="_blank" rel="noopener noreferrer"><img src={voltaire} alt="certification voltaire" /></a>

      </div> 
    </div>
    </footer>
  </div>
</Router>
);

let toggleMenu = (e) => {
  e.preventDefault();
  document.querySelector('#header__burger-button').classList.toggle('active');
  document.querySelector('header nav').classList.toggle('active');
}

const closeMenu = (e) => {
  e.preventDefault();
  document.querySelector('#header__burger-button').classList.remove('active');
  document.querySelector('header nav').classList.remove('active');
}


// function move({ clientX: x, clientY: y, target }) {
// 	let scale = 1;

// 	if (target && target.classList && target.classList.contains("link-content")) {
// 		scale = 1.75;
// 	}

// 	const cursorElement = animejs({
// 		targets: ".cursor",
// 		translateX: Math.floor(x),
// 		translateY: Math.floor(y),
// 		rotate: x / -8 + 135,
// 		scale,
// 		easing: "easeOutElastic(1, 1)"
// 	});
// }

// window.addEventListener("mousemove", move);

// window.onload = () =>
// 	animejs({
// 		targets: ".cursor",
// 		opacity: 1
// 	});

export default App;