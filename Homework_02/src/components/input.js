import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {
    render() {
        return (
            
                <input
                    type="number"
                    value={this.props.value}
                    onChange={this.props.changed}></input>
            
        )
    }
}

Input.defaultProps = {
    value: 0
}


Input.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func
}
