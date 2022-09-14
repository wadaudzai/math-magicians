import './App.css';
import React from 'react';
import Calculator from './components/calculator';
import Navbar from './components/navigation';

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
