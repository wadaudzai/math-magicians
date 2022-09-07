import './App.css';
import React from 'react';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
