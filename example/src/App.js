import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Spinner from 'react-easy-spinner';
class App extends Component {
  render() {
    let settings = {
      shape: "triangleUp",
      animation: "run",
      time: "2s"
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Spinner {...settings}/>
        </p>
      </div>
    );
  }
}

export default App;
