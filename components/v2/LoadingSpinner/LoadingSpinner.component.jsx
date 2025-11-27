import { ImageLoader } from "../../../utils/imageLoader"
import DefaultSpinner from '../../../assets/images/loading.png';

const LoadingSpinner = ({ type, copy }) => {
    if (type === 'a') {
        return (
            <div className="loadingSpinner">
                {ImageLoader(DefaultSpinner.src, '', '', 30, 30, 0.1)}
                {copy && <p>{copy}</p>}
            </div>
        )
    } else {
        return (
            <div className="loadingSpinner">
                {ImageLoader(DefaultSpinner.src, '', '', 30, 30, 0.1)}
                {copy && <p>{copy}</p>}
            </div>
        )
    }
}

export default LoadingSpinner;