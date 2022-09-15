import React from 'react';
import calculate from '../logic/calculate';
import { useState } from 'react';



    const Calculator = () => {
        const [myState, mySetStt] = useState({ total: 0, operation: '', next: '' });
    

    
    const { total, operation, next } = myState;

    const handleEvent = (e) => {
        mySetStt((myState) => calculate(myState, e.target.textContent));
      };
      
    return (
      <div className='calculator-container'>
        <div>
        <h1>Lets do some math.</h1>
      </div>
      <div className="calc-div">
        <div className='result-pad'>{(total ? total : '') + (operation ? operation : '') + (next ? next : '')}</div>
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
      </div>
    );

    }


export default Calculator;
