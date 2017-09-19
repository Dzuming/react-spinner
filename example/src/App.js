import React, {Component} from 'react';
import Spinner from 'react-easy-spinner';
class App extends Component {
  state = {
    shape: 'triangleUp',
    animation: 'pulse',
    time: 2,
    duration: 'infinite'
  }
  removeOpacity = () => {
    document.querySelectorAll('')
  }
  handleChange = event => {
    const target = event.target,
      name = target.name,
      value = target.value;
    this.setState({[name]: value});
  }
  render() {
    let settings = {
      shape: this.state.shape,
      animation: this.state.animation,
      time: `${this.state.time}s`,
      duration: this.state.duration
    }
    const labelWidth = {
      width: '90px',
      display: 'inline-block'
    }
    const paddingBottom = {
      paddingBottom: '5px'
    }
    return (
      <div className="App">
        <div style={{
          zIndex: "100",
          position: "fixed",
          margin: "10px",
          fontSize: "16px"
        }}>
          <div style={paddingBottom}>
            <label style={labelWidth}>Shape</label>
            <select name="shape" value={this.state.shape} onChange={this.handleChange}>
              <option value="triangleUp">triangleUp</option>
            </select>
          </div>
          <div style={paddingBottom}>
            <label style={labelWidth}>Animation</label>
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
          <div style={paddingBottom}>
            <label style={labelWidth}>Time</label>
            <input
              min="1"
              max="10"
              type="number"
              name="time"
              value={this.state.time}
              onChange={this.handleChange}/>
          </div>
          <div style={paddingBottom}>
            <label style={labelWidth}>Duration</label>
            <input
              type="text"
              name="duration"
              value={this.state.duration}
              onChange={this.handleChange}/>
          </div>
        </div>
        <Spinner {...settings}/>
      </div>
    );
  }
}

export default App;
