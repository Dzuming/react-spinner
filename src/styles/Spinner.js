import hexToRgb from '../helpers/hexToRgb'

const Spinner = (opacity, bgColor) => {
    const bgRGB = hexToRgb(bgColor)
    debugger
    return {
        background: {
            content: '',
            display: 'block',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: `rgba(${bgRGB.r},${bgRGB.g},${bgRGB.b},${opacity})`
        },
        item: {
            WebkitTransition: 'all', // note the capital 'W' here
            msTransition: 'all', // 'ms' is the only lowercase vendor prefix
            width: '100px',
            height: '100px',
            backgroundColor: 'red'
        }
    }
}

export default Spinner
