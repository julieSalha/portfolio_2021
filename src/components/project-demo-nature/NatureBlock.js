import React from 'react'
//import Button from '../../components/button/Button.js'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Data_nature from './/Data_nature.js'

export default class NatureBlock extends React.Component {
    render() {
        this.props = Data_nature;
        return(
            <div className={this.props.classNameBlock}>
                <h4>{this.props.title}</h4>
                <Router>
                    <Link to={this.props.link} component={this.props.view}>Voir le projet</Link>
                </Router>
            </div>
        )
    }
}
