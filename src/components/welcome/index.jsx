import beach2 from '../../assets/img/beach2.jpg'

const Welcome = () => (
    <section id="welcome" className="welcome">
        <img className="welcome__image" src={beach2} alt="ocean" />
        <div className="welcome__description">
            <h1 className="welcome__title">Bonjour !</h1>
            <p className="welcome__text">Julie, créatrice d'interfaces web basée à Paris,</p>
            <p className="welcome__text">sensible à l'accessibilité et l'éco-conception.</p>
            <p id="skills" className="welcome__text">Que puis-je pour vous ?</p>
        </div>
    </section>
)

export default Welcome;