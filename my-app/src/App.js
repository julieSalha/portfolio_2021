import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.scss';
import Logo from './components/logo'
import Home from './pages/home'

const App = () => (
  <Router>
  <div>
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
                    <Link to="/formation">Parcours</Link>
                </li>
                <li>
                    <Link to="/">Compétences</Link>
                </li>
                <li>
                    <Link to="/projects">Projets</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
      </div>
    </header>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
    <footer>
      Footer
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

export default App;