## Demo
Working on

## Install
```
npm i react-easy-spinner
```
## Usage
To app.js file add:

```
import React, {Component} from 'react';
import Spinner from 'react-easy-spinner';
class App extends Component {
  render() {
    let settings = {
      shape: "triangleUp",
      animation: "pulse",
      time: "2s"
    }
    return (
      <div className="App">
          <Spinner {...settings}/>
      </div>
    );
  }
}

export default App;
```
## Options

| Properties| values       | default |
|----------|:-------------:|------:|
| shape |  triangleUp | - |
| animation |    pulse, run, bounceIn, spin   |   pulse |
| time | 1-10s |    2s |
| duration | infinite, number |    infinite |