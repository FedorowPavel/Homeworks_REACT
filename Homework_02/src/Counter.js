import React, { Component } from 'react';
// import './App.css';
import Button from './button';
import Span from './span';
import PropTypes from 'prop-types'
import Input from './input';


class Counter extends Component {
  constructor() {
    super()
    this.state = {
      number: 0
    }

    // this.handleIncrement = this.handleIncrement.bind(this)
  }

  

  handleChange = (delta) => {
    this.setState({
      number: this.state.number + delta
    })
  }

  handleInputChange = (event, max, min) => {
    //if more then max or less then min
    const updatedNumber = +event.target.value > max ? max :
      +event.target.value < min ? min : +event.target.value;
    

    this.setState({
      //if not digit entered
      number: isNaN(updatedNumber) ? this.state.number : updatedNumber
    })
  }


  render() {

    let { number } = this.state;
    const { max, min } = this.props;


    return (
      <div className="Counter">
        <Button
          onClick={this.handleChange}
          buttonText='-'
          delta={-1}
          disabled={number <= min} />
        
        {/* <Span text={number} /> */}
        <Input
          value={number}
          changed={(event)=> this.handleInputChange(event, max, min)} />
        
        <Button
          onClick={this.handleChange}
          buttonText='+'
          delta={1}
          disabled={number >= max} />
      </div>
    );
  }
  
}

Counter.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number
}

export default Counter;
