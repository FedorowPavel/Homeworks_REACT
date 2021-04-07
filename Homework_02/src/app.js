import React, { Component } from 'react'
import Counter from './Counter'

export default class App extends Component {
    render() {
        return (
            <div>
                <Counter max={100} min={ 0 }/>
                <Counter max={150} min={ 0 }/>
                <Counter max={300} min={ 0 }/>
            </div>
            
        )
    }
}
