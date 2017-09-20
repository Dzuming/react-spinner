const SpinnerBg = (opacity, bgColor) => {
    return {
        content: '',
        display: 'block',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: bgColor,
        opacity: opacity
    }
}
const SpinnerItemSvg = (elColor) => {
    return {
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all', // 'ms' is the only lowercase vendor prefix
        color: elColor
    }
}
export {SpinnerBg, SpinnerItemSvg}
