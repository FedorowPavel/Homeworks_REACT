import React, { Component } from 'react';
import imgSrc from '../images/test.jpg'

export default class ImageOrButton extends Component {
    render() {
        return (
            <div>
                {this.props.isButton ? <button>I'm btn</button> : <img src={imgSrc}></img>}
            </div>
        )
    }
}
