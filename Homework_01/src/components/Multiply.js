import React, { Component } from 'react'

export default class Multiply extends Component {
    render() {
        const a = +this.props.a;
        const b = +this.props.b;
        return (
            <div>
                <p>RESULT { a*b }</p>
            </div>
        )
    }
}
