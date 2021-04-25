import React from 'react'

export default class NatureView extends React.Component {
    render() {
        return(
            <div className={this.props.className}>
                <h4>{this.props.description}</h4>
            </div>
        )
    }
}