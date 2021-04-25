/* import React from 'react'

export const DataNature = {
    title : "Nature &amp; Découvertes",
    classNameBlock : "block-demo block-demo--nature",
    link : "/project-nature",
    client : "Nature &amp; Découvertes CE",
    works : [ "Landing page", "Responsive Design", "Actualisation de contenu", "Charte graphique" ],
    date : "2019",
    technologies : [ "HTML5", "CSS3", "LESS", "JQUERY" ],
    software : [ "Brackets", "Filezilla", "Photoshop CS6", "CMS interne" ],
    description : "Nature et Découvertes est une enseigne française de magasins fondée en 1990 par François Lemarchand. La chaîne de magasins est inspirée de l'ancienne entreprise californienne The Nature Company.Le comité d'entreprise est, en France (en Belgique on parle de conseil d'entreprise), l'une des institutions représentatives du personnel au sein d'une entreprise. Elle a été progressivement remplacée par le comité social et économique (CSE) depuis le 1er janvier 2018 et a cessé d'exister légalement le 1er janvier 2020. En France, le comité d'entreprise et les comités d'établissement ont été institués par l'ordonnance du 22 février 1945 et la loi du 16 mai 1946 dans toutes les entreprises de cinquante salariés et plus ; il détient des attributions à la fois sociales et économiques. Les textes législatifs relatifs au comité d'entreprise débutent à l'article L2321-11 du code du travail, dans sa nouvelle numérotation. Le chef d'entreprise est tenu d'organiser la mise en place d'un comité d'entreprise (CE) dans les entreprises de 50 salariés et plus. En dessous de cet effectif, le CE n'est pas obligatoire. Les attributions économiques et sociales du CE seront alors exercées par les délégués du personnel dont l'élection est obligatoire pour les entreprises de 11 salariés et plus. Dans les entreprises de moins de 300 salariés, l'employeur peut opter pour une délégation unique du personnel. Les élus exercent alors les fonctions de membres du comité d'entreprise conjointement à celles de délégués du personnel. Le crédit d'heures des délégués était alors augmenté de 15 heures à 20 heures. Cette décision, prise par l'employeur, ne pouvait se faire qu'après consultation des délégués du personnel et s'il existait, du comité d'entreprise. Le comité d'entreprise (CE) est remplacé, dans les entreprises possédant plusieurs établissements, par des comités d'établissement (CE) et un comité central d'entreprise (CCE).",
    website : "private",
    logo : '',
    image : '' 
}

export default class ProjectView extends React.Component {
    render(){
        return (
            <div className="wrapper">
                <div className="project-view">
                    <HeaderProject />
                    <Description />
                    <Technologies />
                </div>
            </div>
        );
    }
} */

/* export class HeaderProject extends React.Component {
    render(){
        return (
            <div className="project-view__header">
                <img src={this.props.image} alt={this.props.title} />
                <h2>{this.props.title}</h2>
            </div>
        );
    }
} */

/* function HeaderProject(props) {
    return (
        <div className="project-view__header">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
        </div>
    );
  } */

/*  export class Description extends React.Component {
    render(){
		 // Project object destructuring
		 const {client, works, date, description, website, logo} = this.props.DataNature;
		 
        return (
            <div className="project-view__content">
                <div className="project-view__specificities">
                    <div className="project-view__logo">{logo}</div>
                    <div><h3>Client</h3></div>
                    <div className="project-view__client">{client}</div>
                    <div><h3>Missions</h3></div>
                    <div className="project-view__works">{works}</div>
                    <div><h3>Année</h3></div>
                    <div className="project-view__date">{date}</div>
                    <div><h3>Site web</h3></div>
                    <div className="project-view__site"><a href={website}>Site web</a></div>
                </div>
                <div className="project-view__description">
                    {description}
                </div>
            </div>
        );
    }
} */
/* 
function Description(props) {
    return (
        <div className="project-view__content">
            <div className="project-view__specificities">
                <div className="project-view__logo">{props.logo}</div>
                <div><h3>Client</h3></div>
                <div className="project-view__client">{props.client}</div>
                <div><h3>Missions</h3></div>
                <div className="project-view__works">{props.works}</div>
                <div><h3>Année</h3></div>
                <div className="project-view__date">{props.date}</div>
                <div><h3>Site web</h3></div>
                <div className="project-view__site"><a href={props.website}>Site web</a></div>
            </div>
            <div className="project-view__description">
                {props.description}
            </div>
        </div>
    );
  } */

/* export class Technologies extends React.Component {
    render(){
		 const {technologies, software} = this.props;
        return (
            <div className="project-view__technologies">
                <div><h3>Technologies</h3></div>
                <div className="project-view__techno">{technologies}</div>
                <div><h3>Logiciels</h3></div>
                <div className="project-view__software">{software}</div>
            </div>
        );
    }
} */

/* function Technologies(props) {
    return (
        <div className="project-view__technologies">
            <div><h3>Technologies</h3></div>
            <div className="project-view__techno">{props.technologies}</div>
            <div><h3>Logiciels</h3></div>
            <div className="project-view__software">{props.software}</div>
        </div>
    );
  } */