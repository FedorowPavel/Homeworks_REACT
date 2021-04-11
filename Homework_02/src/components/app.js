import React, { Component } from 'react'
import Counter from './Counter'

import generateId from '../utils/index'
import AddCounterForm from './add-counter-form';



export default class App extends Component {
    constructor() {
        super();

        this.state = {
            counters: [
                { id: 1, value: 0, min: 0, max: 100 },
                { id: 2, value: 1, min: 0, max: 500 },
                { id: 3, value: 2, min: 0, max: 300 },
                { id: 4, value: 3, min: 0, max: 400 },
            ]
        }

    }

    

    handleChange = (id, value) => {
        const { counters } = this.state;
        const newCounters = counters.map(counter => {
            if (id === counter.id) {
                return {...counter, value}
            }

            return counter
        })

        this.setState({
            counters: newCounters
        })
    }

//   handleInputChange = (event, max, min) => {
//     //if more then max or less then min
//     const updatedNumber = +event.target.value > max ? max :
//       +event.target.value < min ? min : +event.target.value;
    

//     this.setState({
//       //if not digit entered
//       number: isNaN(updatedNumber) ? this.state.number : updatedNumber
//     })
//   }


    addCounter = (formData) => {
        const { counters } = this.state;
        const newCounters = [
            ...counters,
            { id: generateId(counters), ...formData }
        ]

        this.setState({
            counters: newCounters
        })
    }

    deleteCounter = (id) => {
        const { counters } = this.state;
        const newCounters = counters.filter((counter) => counter.id !== id);

        this.setState({
            counters: newCounters
        })
    }


    render() {
        const { counters } = this.state; 

        return (
            <div>
                {counters.map((counter, index) =>
                    <Counter
                        index={index}
                        onChange={this.handleChange}
                        key={counter.id}
                        data={counter}
                        deleteCounter={()=> this.deleteCounter(counter.id)}/>
                )}
                

                <AddCounterForm onSubmit={ this.addCounter }/>
            </div>
            
        )
    }
}
