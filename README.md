React-easy-spinner [![npm version](https://badge.fury.io/js/react-easy-spinner.svg)](http://badge.fury.io/js/react-easy-spinner)
=======
Simple modifiable spinner for react.js
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
      time: "2s",
      duration: 'infinite',
      opacity: '0.3',
      bgColor: '#27556c',
      elColor: '#2d1557'
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
| shape |  loader, cog, triangleUp | - |
| animation |    pulse, run, bounceIn, spin   |   pulse |
| time | 1-10s |    2s |
| duration | infinite, number |    infinite |
| opacity | 0-1 |    0.3 |
| bgColor | hex | ![#2d1557](https://placehold.it/15/2d1557/000000?text=+)`#2d1557` |
| elColor | hex |    ![#27556c](https://placehold.it/15/27556c/000000?text=+)`#27556c` |