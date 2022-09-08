import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.handleEvent = this.handleEvent.bind(this); 
    }

    handleEvent(e) {
        this.setState((state) => calculate(state, e.target.textContent));
    }
  render() {
      const {total, process, next} = this.state;
    return (
      <div className='calculator-container'>
        <div className='result-pad'>{(total ? total : '') + (process ? process : '') + (next ? next : '')}</div>
        <div className='buttons'>
            <button type='button' onClick={this.handleEvent}>AC</button>
            <button type='button' onClick={this.handleEvent}>+/-</button>
            <button type='button' onClick={this.handleEvent}>%</button>
            <button type='button' onClick={this.handleEvent}>÷</button>
            <button type='button' onClick={this.handleEvent}>7</button>
            <button type='button' onClick={this.handleEvent}>8</button>
            <button type='button' onClick={this.handleEvent}>9</button>
            <button type='button' onClick={this.handleEvent}>*</button>
            <button type='button' onClick={this.handleEvent}>4</button>
            <button type='button' onClick={this.handleEvent}>5</button>
            <button type='button' onClick={this.handleEvent}>6</button>
            <button type='button' onClick={this.handleEvent}>-</button>
            <button type='button' onClick={this.handleEvent}>1</button>
            <button type='button' onClick={this.handleEvent}>2</button>
            <button type='button' onClick={this.handleEvent}>3</button>
            <button type='button' onClick={this.handleEvent}>+</button>
            <button type='button' onClick={this.handleEvent}>0</button>
            <button type='button' onClick={this.handleEvent}>.</button>
            <button type='button' onClick={this.handleEvent}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
