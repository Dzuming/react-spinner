import React, {Component} from 'react';
import Spinner from 'react-easy-spinner';
class App extends Component {
  render() {
    let settings = {
      shape: "triangleUp",
      animation: "bounceIn",
      time: "2s",
      duration: 'infinite'
    }
    return (
      <div className="App">
          <Spinner {...settings}/>
      </div>
    );
  }
}

export default App;
