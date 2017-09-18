import React, {Component} from 'react';
import Spinner from 'react-easy-spinner';
class App extends Component {
  state = {
    animation: 'pulse'
  }
  removeOpacity = () => {
    document.querySelectorAll('')
  }
  handleChange = event => {
    const target = event.target,
      name = target.name,
      value = target.value;
    this.setState({[name]: value});
    debugger
  }
  render() {
    let settings = {
      shape: "triangleUp",
      animation: this.state.animation,
      time: "2s",
      duration: 'infinite'
    }
    return (
      <div className="App">
        <div style={{
          zIndex: "100",
          position: "fixed"
        }}>
          <select
            name="animation"
            value={this.state.animation}
            onChange={this.handleChange}>
            <option value="pulse">pulse</option>
            <option value="run">run</option>
            <option value="spin">spin</option>
            <option value="bounceIn">bounceIn</option>
          </select>
        </div>
        <Spinner {...settings}/>
      </div>
    );
  }
}

export default App;
