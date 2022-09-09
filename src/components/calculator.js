import React from 'react';
import calculate from '../logic/calculate';
import { useState } from 'react';

// class Calculator extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {};
//         this.handleEvent = this.handleEvent.bind(this); 
//     }

    const Calculator = () => {
        const [myState, mySetStt] = useState({ total: 0, process: '', next: '' });
    

    // handleEvent(e) {
    //     this.setState((state) => calculate(state, e.target.textContent));
    // }
    const { total, process, next } = myState;
//   render() {
    const handleEvent = (e) => {
        mySetStt((myState) => calculate(myState, e.target.textContent));
      };
    return (
      <div className='calculator-container'>
        <div className='result-pad'>{(total ? total : '') + (process ? process : '') + (next ? next : '')}</div>
        <div className='buttons'>
            <button type='button' onClick={handleEvent}>AC</button>
            <button type='button' onClick={handleEvent}>+/-</button>
            <button type='button' onClick={handleEvent}>%</button>
            <button type='button' onClick={handleEvent}>÷</button>
            <button type='button' onClick={handleEvent}>7</button>
            <button type='button' onClick={handleEvent}>8</button>
            <button type='button' onClick={handleEvent}>9</button>
            <button type='button' onClick={handleEvent}>*</button>
            <button type='button' onClick={handleEvent}>4</button>
            <button type='button' onClick={handleEvent}>5</button>
            <button type='button' onClick={handleEvent}>6</button>
            <button type='button' onClick={handleEvent}>-</button>
            <button type='button' onClick={handleEvent}>1</button>
            <button type='button' onClick={handleEvent}>2</button>
            <button type='button' onClick={handleEvent}>3</button>
            <button type='button' onClick={handleEvent}>+</button>
            <button type='button' onClick={handleEvent}>0</button>
            <button type='button' onClick={handleEvent}>.</button>
            <button type='button' onClick={handleEvent}>=</button>
        </div>
      </div>
    );

    }


export default Calculator;
