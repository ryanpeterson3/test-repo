const Icon = ({ icon, fill }) => {
    const arrowPrev = (fill) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22">
            <text id="arrow-left" transform="matrix(0, -1, -1, 0, 3, 21)" fill={fill} fontSize="23" fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'" letterSpacing="-0.02em"><tspan x="0" y="0">arrow-left</tspan></text>
        </svg>
    );

    const arrowNext = (fill) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22">
            <text id="arrow-left" transform="matrix(0, -1, -1, 0, 3, 21)" fill={fill} fontSize="23" fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'" letterSpacing="-0.02em"><tspan x="0" y="0">arrow-left</tspan></text>
        </svg>
    )

    switch (icon) {
        case 'arrowNext':
            return arrowNext(fill);
            break;
    
        default:
            return arrowNext(fill);
            break;
    }
}

export default Icon;