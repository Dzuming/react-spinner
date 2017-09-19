const colors = ['#fecd6d', '#ef7b88', '#acdacf', '#87c3db']
const pulse = (type) => {
  return {triangleUp: `
         @-webkit-keyframes pulse {
          0% { 
            border-bottom: 120px solid ${colors[0]}; 
          }
          25% { 
            border-bottom: 120px solid ${colors[1]}; 
          }
          50%  { 
            border-bottom: 120px solid ${colors[2]}; 
          }
          75%  { 
            border-bottom: 120px solid ${colors[3]}; 
          }
          100% { 
            border-bottom: 120px solid ${colors[0]}; 
          }
        `, loader: `
      @-webkit-keyframes pulse {
        0% { 
          color: ${colors[0]}; 
        }
        25% { 
          color: ${colors[1]}; 
        }
        50%  { 
          color: ${colors[2]}; 
        }
        75%  { 
          color: ${colors[3]}; 
        }
        100% { 
          color: ${colors[0]}; 
        }
      }
      `, cog: `
      @-webkit-keyframes pulse {
        0% { 
          color: ${colors[0]}; 
        }
        25% { 
          color: ${colors[1]}; 
        }
        50%  { 
          color: ${colors[2]}; 
        }
        75%  { 
          color: ${colors[3]}; 
        }
        100% { 
          color: ${colors[0]}; 
        }
      }
      `}[type]
};
const spin = (type) => {
  return {triangleUp: `
         @-webkit-keyframes spin {
          0%   { 
            border-bottom:120px solid ${colors[0]}; 
            border-left; 60px solid transparent; 
            border-right: 60px solid transparent; 
            border-top:0 solid transparent; 
          }
          25%  { 
            border-top: 120px solid ${colors[1]}; 
            border-left: 60px solid transparent; 
            border-right: 60px solid transparent; 
            border-bottom:0 solid transparent; 
          }
          50%  { 
            border-left: 120px solid ${colors[2]}; 
            border-top: 60px solid transparent; 
            border-bottom: 60px solid transparent; 
            border-right:0 solid transparent; }
          75%  { 
            border-right: 120px solid ${colors[3]}; 
            border-top: 60px solid transparent; 
            border-bottom: 60px solid transparent; 
            border-left:0 solid transparent; }
          100%   { 
            border-bottom:120px solid ${colors[0]};
            border-left; 60px solid transparent; 
            border-right: 60px solid transparent; 
            border-top:0 solid transparent; 
          }
        `, loader: `
        @-webkit-keyframes spin {
          0% {
            transform: translate(-50%,-50%) rotate(0)  ;
          }
          100% {
            transform: translate(-50%,-50%) rotate(360deg);
          }
        }
        `, cog: `
        @-webkit-keyframes spin {
          0% {
            transform: translate(-50%,-50%) rotate(0);
          }
          100% {
            transform: translate(-50%,-50%) rotate(360deg);
          }
        }
        `}[type]
};
const run = (type) => {
  return {triangleUp: `
  @-webkit-keyframes run {
    0% { 
      left: 10%; 
      border-bottom:120px solid ${colors[0]};
    }
    25% { 
      left: 36.5%; 
      border-bottom:120px solid ${colors[1]};
    }
    50% { 
      left : 62.5%; 
      border-bottom:120px solid ${colors[2]};
    }
    75%{ 
      left: 90%; 
      border-bottom:120px solid ${colors[3]};
    }
    100%{ 
      left: 10%; 
      border-bottom:120px solid ${colors[0]};
    }
  }`, loader: `
  @-webkit-keyframes run {
      0% { 
        left: 10%; 
      }
      25% { 
        left: 36.5%; 
      }
      50% { 
        left : 62.5%; 
      }
      75%{ 
        left: 90%; 
      }
      100%{ 
        left: 10%; 
    }
  `, cog: `
  @-webkit-keyframes run {
      0% { 
        left: 10%; 
      }
      25% { 
        left: 36.5%; 
      }
      50% { 
        left : 62.5%; 
      }
      75%{ 
        left: 90%; 
      }
      100%{ 
        left: 10%; 
    }
  `}[type]
};
const bounceIn = (type) => {
  return {triangleUp: `
  @keyframes bounceIn{
    10%, 90% {
      transform: translate3d(-52%, -50%, 0);
      border-bottom:120px solid ${colors[0]};
    }
    
    20%, 80% {
      transform: translate3d(-48%, -50%, 0);
      border-bottom:120px solid ${colors[1]};
    }
  
    30%, 50%, 70% {
      transform: translate3d(-56%, -50%, 0);
      border-bottom:120px solid ${colors[2]};
    }
  
    40%, 60% {
      transform: translate3d(-46%, -50%, 0);
      border-bottom:120px solid ${colors[3]};
    }
  }`, loader: `
  @keyframes bounceIn{
    10%, 90% {
      transform: translate3d(-52%, -50%, 0);
    }
    
    20%, 80% {
      transform: translate3d(-48%, -50%, 0);
    }
  
    30%, 50%, 70% {
      transform: translate3d(-56%, -50%, 0);
    }
  
    40%, 60% {
      transform: translate3d(-46%, -50%, 0);
    }
  }
  `, cog: `
  @keyframes bounceIn{
    10%, 90% {
      transform: translate3d(-52%, -50%, 0);
    }
    
    20%, 80% {
      transform: translate3d(-48%, -50%, 0);
    }
  
    30%, 50%, 70% {
      transform: translate3d(-56%, -50%, 0);
    }
  
    40%, 60% {
      transform: translate3d(-46%, -50%, 0);
    }
  }
  `}[type]
};
const keyFramesStyle = (type) => {
  return {
    styles: [`
  ${bounceIn(type)}
  `, `
  ${pulse(type)}
  `, `
  ${run(type)}
  `, `
  ${spin(type)}
  `]
  }

}

const Animation = (type, time, duration) => {

  return {WebkitAnimation: `${type} ${time} ${duration}`}

};

export {Animation, keyFramesStyle};
