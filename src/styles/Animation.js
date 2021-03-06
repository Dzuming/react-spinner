function DarkenColor(colorCode, amount) {

  if (colorCode[0] === "#") {
    colorCode = colorCode.slice(1);
  }
  var num = parseInt(colorCode, 16);

  var r = (num >> 16) + amount;

  if (r > 255) {
    r = 255;
  }

  var b = ((num >> 8) & 0x00FF) + amount;

  if (b > 255) {
    b = 255;
  }

  var g = (num & 0x0000FF) + amount;

  if (g > 255) {
    g = 255;
  }

  return ("#") + (g | (b << 8) | (r << 16)).toString(16);
}

const color = (elColor) => {
  return [
    elColor,
    DarkenColor(elColor, 40),
    DarkenColor(elColor, 60),
    DarkenColor(elColor, 120)
  ]
}
const pulse = (type, elColor) => {
  let colors = color(elColor);
  let options = {
    triangleUp: function () {
      return `
      @-webkit-keyframes pulse {
       0% { 
         transform: translate(-50%,-50%) scale(1);
         border-bottom: 120px solid ${colors[0]}; 
       }
       25% { 
         transform: translate(-50%,-50%) scale(1.4);
         border-bottom: 120px solid ${colors[1]}; 
       }
       50%  { 
         transform: translate(-50%,-50%) scale(1.8);
         border-bottom: 120px solid ${colors[2]}; 
       }
       75%  { 
         transform: translate(-50%,-50%) scale(1.4);
         border-bottom: 120px solid ${colors[3]}; 
       }
       100% { 
         transform: translate(-50%,-50%) scale(1);
         border-bottom: 120px solid ${colors[0]}; 
       }
     `
    },
    default: function () {
      return `
          @-webkit-keyframes pulse {
            0% { 
              transform: translate(-50%,-50%) scale(1);
              color: ${colors[0]}; 
            }
            25% { 
              transform: translate(-50%,-50%) scale(1.4);
              color: ${colors[1]}; 
            }
            50%  { 
              transform: translate(-50%,-50%) scale(1.8);
              color: ${colors[2]}; 
            }
            75%  { 
              transform: translate(-50%,-50%) scale(1.4);
              color: ${colors[3]}; 
            }
            100% { 
              transform: translate(-50%,-50%) scale(1);
              color: ${colors[0]}; 
            }
          }
          `
    }
  }
  return (options[type] || options['default'])();
};
const spin = (type, elColor) => {
  let colors = color(elColor);
  let options = {
    triangleUp: function () {
      return `
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
     `
    },
    default: function () {
      return `
      @-webkit-keyframes spin {
        0% {
          transform: translate(-50%,-50%) rotate(0)  ;
        }
        100% {
          transform: translate(-50%,-50%) rotate(360deg);
        }
      }
      `
    }
  };
  return (options[type] || options['default'])();

};
const run = (type, elColor) => {
  let colors = color(elColor);
  let options = {
    triangleUp: function () {
      return `
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
      }`
    },
    default: function () {
      return `
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
      `
    }
  }
  return (options[type] || options['default'])();
};
const bounceIn = (type, elColor) => {
  let colors = color(elColor);
  let options = {
    triangleUp: function () {
      return `
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
      }`
    },
    default: function () {
      return `
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
      `
    }
  }
  return (options[type] || options['default'])();
};
const keyFramesStyle = (type, elColor) => {
  return {
    styles: [
      `
  ${bounceIn(type, elColor)}
  `,
      `
  ${pulse(type, elColor)}
  `,
      `
  ${run(type, elColor)}
  `,
      `
  ${spin(type, elColor)}
  `
    ]
  }

}

const Animation = (type, time, duration) => {

  return {WebkitAnimation: `${type} ${time} ${duration}`}

};

export {Animation, keyFramesStyle};
