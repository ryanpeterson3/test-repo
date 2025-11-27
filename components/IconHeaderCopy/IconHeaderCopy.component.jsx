import { ImageLoader } from "../../utils/imageLoader";

const IconHeaderCopy = ({ icon, header, copy }) => {
    return <div className="iconHeaderCopy">
        <div className="iconHeaderCopy__header">
            {icon && ImageLoader(icon)}
        </div>

        <div className="iconHeaderCopy__content">
            {header && <div className="iconHeaderCopy__header">
                {header}
            </div>}

            {copy && <div className="iconHeaderCopy__copy">
                {copy}
            </div>}
        </div>
    </div>
}

export default IconHeaderCopy;