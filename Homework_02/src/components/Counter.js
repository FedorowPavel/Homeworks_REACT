import React, { Component } from 'react';
// import './App.css';
import Button from './button';
// import Span from './span';
import PropTypes from 'prop-types'
import Input from './input';
import DeleteBtn from './delete-button';



class Counter extends Component {
  constructor(props) {
    super()
    this.state = {
      number: props.data.value,
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

    // let { number } = this.state;
    const { data: { max, min, value: number } } = this.props;


    return (
      <div className="Counter">
        <Button
          onClick={this.handleChange}
          buttonText='-'
          delta={-1}
          disabled={number <= min} />
        
        <Input
          value={number}
          changed={(event)=> this.handleInputChange(event, max, min)} />
        
        <Button
          onClick={this.handleChange}
          buttonText='+'
          delta={1}
          disabled={number >= max} />
        
        <DeleteBtn onClick={ this.props.deleteCounter }/>
      </div>
    );
  }
  
}



Counter.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    min: PropTypes.number,
    max: PropTypes.number
  })
  // max: PropTypes.number,
  // min: PropTypes.number
}

export default Counter;
