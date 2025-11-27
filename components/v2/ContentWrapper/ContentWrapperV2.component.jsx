const ContentWrapperV2 = ({ cssClass, size, children, padding, mobileFullSwiper, style, aosFade }) => {
    const classes = ['contentWrapperV2'];
    padding && classes.push(padding);
    mobileFullSwiper && classes.push('mobileFullSwiper');
    cssClass && classes.push(cssClass);

    return (
        <div className={classes.join(' ')} data-wrapper={size ? size : 'xl'} style={style && style} data-aos={aosFade && 'fade'}>
            {children}
        </div>
    )
}

export default ContentWrapperV2;