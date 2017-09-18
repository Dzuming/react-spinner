const pulse = (type) => {
  return {triangleUp: `
         @-webkit-keyframes pulse {
          0%   { border-bottom: 120px solid #fecd6d; }
          25%  { border-bottom: 120px solid #ef7b88; }
          50%  { border-bottom: 120px solid #acdacf; }
          75%  { border-bottom: 120px solid #87c3db; }
          100% { border-bottom: 120px solid #fecd6d; }
        `}[type]
};
const spin = (type) => {
  return {triangleUp: `
         @-webkit-keyframes spin {
          0%   { border-bottom:120px solid red; border-left; 60px solid transparent; border-right: 60px solid transparent; border-top:0; }
          50%  { border-top: 120px solid red; border-left: 60px solid transparent; border-right: 60px solid transparent; border-bottom:0; }
          100%   { border-bottom:120px solid red; border-left; 60px solid transparent; border-right: 60px solid transparent; border-top:0; }
        `}[type]
};

const keyFramesStyle = (type) => {
  return {
    styles: [`
  @keyframes bounceIn{
    0%{
      opacity: 0;
      transform: scale(0.3) translate3d(0,0,0);
    }
    50%{
      opacity: 0.9;
      transform: scale(1.1);
    }
    80%{
      opacity: 1;
      transform: scale(0.89);
    }
    100%{
      opacity: 1;
      transform: scale(1) translate3d(0,0,0);
    }
  }
  `, `
  @-webkit-keyframes run {
    0% { left: 0;}
    50%{ left : 100%;}
    100%{ left: 0;}
  }`, `
  ${pulse(type)}
  `,`
  ${spin(type)}
  `]
  }

}

const Animation = (type, time, duration) => {

  return {
      WebkitAnimation: `${type} ${time} ${duration}`
  }

};

export {Animation, keyFramesStyle};
