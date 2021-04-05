import React, { Component } from 'react';
import HelloMessage from './components/HelloMessage';
import ImageOrButton from './components/ImageOrButton';
import Multiply from './components/Multiply';

class App extends Component {
    render() {
        const isButton = true;
        return (
            <div>
                <HelloMessage name="Pavel" />
                <Multiply a="5" b="11" />
                <ImageOrButton isButton={ isButton }/>
            </div>
        )
    }
}


export default App;