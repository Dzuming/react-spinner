import React, {Component} from 'react';
import './App.css';
import Spinner from './containers/Spinner'
class App extends Component {
  render() {
    return (<Spinner shape={'triangleUp'} animation={'bounceIn'} time={'2s'}/>);
  }
}

export default App;
