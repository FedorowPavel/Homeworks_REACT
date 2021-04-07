import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Span extends Component {
    
    render() {
        return (
            <span>{this.props.text}</span> 
        )
    }
}

Span.defaultProps = {
    text: 0
}

Span.propTypes = {
    text: PropTypes.number
}
