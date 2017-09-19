React-easy-spinner [![npm version](https://badge.fury.io/js/react-easy-spinner.svg)](http://badge.fury.io/js/react-easy-spinner)
=======
## Demo
Live demo: https://dzuming.github.io/react-spinner/

## Install
```sh
npm i react-easy-spinner
```
## Usage
To app.js file add:

```js
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