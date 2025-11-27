import { ImageLoader } from "../../../utils/imageLoader";

const CornerFloatImage = ({ cssClasses, position, image, dataCol, dataType, height, width, aosDelay }) => {
    const classes = ['cornerFloatImage'];
    cssClasses && cssClasses.forEach(c => classes.push(c));

    const styles = {
        height: height ? `${height}px` : 'auto',
        width: width ? `${width}px` : 'auto'
    }

    return (<div className={classes.join(' ')} data-col={dataCol} data-type={dataType} data-position={position} style={styles} data-aos={position === 'left' ? 'fade-right' : 'fade-left'} data-aos-delay={aosDelay}>
        {ImageLoader(image, '', '', height, width, 1)}
    </div>)
}

export default CornerFloatImage;