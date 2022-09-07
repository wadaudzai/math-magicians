import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className='calculator-container'>
        <div className='result-pad'>0</div>
        <div className='buttons'>
            <button type='button'>AC</button>
            <button type='button'>+/-</button>
            <button type='button'>%</button>
            <button type='button'>÷</button>
            <button type='button'>7</button>
            <button type='button'>8</button>
            <button type='button'>9</button>
            <button type='button'>*</button>
            <button type='button'>4</button>
            <button type='button'>5</button>
            <button type='button'>6</button>
            <button type='button'>-</button>
            <button type='button'>1</button>
            <button type='button'>2</button>
            <button type='button'>3</button>
            <button type='button'>+</button>
            <button type='button'>0</button>
            <button type='button'>.</button>
            <button type='button'>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
