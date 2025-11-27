import Image from "next/image";

const SwiperNavigationIcon = ({ direction, orientation, ref }) => {
    const classes = [];
    direction === 'prev' && classes.push('swiper__prev');
    direction === 'next' && classes.push('swiper__next');
    orientation && classes.push(orientation);

    const prevArrow = () => (<svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14">
        <text id="arrow-right" transform="translate(2) rotate(90)" fill="#5E514D" fontSize="15" fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'" letterSpacing="-0.02em"><tspan x="0" y="0">arrow-right</tspan></text>
    </svg>);

    const nextArrow = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14">
            <text id="arrow-right" transform="translate(2) rotate(90)" fill="#5E514D" fontSize="15" fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'" letterSpacing="-0.02em"><tspan x="0" y="0">arrow-right</tspan></text>
        </svg>
    )

    return <div className={classes.join(' ')} ref={ref}>
        <Image src={direction === 'prev' ? (prevArrow) : (nextArrow)} alt="" width={13} height={15} />
    </div>
}

export default SwiperNavigationIcon;