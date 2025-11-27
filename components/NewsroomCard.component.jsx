import Link from 'next/link';
import { ImageLoader } from "../utils/imageLoader";
import parseStrapiDate from "../utils/parseStrapiDate";

const NewsroomCard = ({ title, date, post, slug }) => {
    return (
        <Link href={`/newsroom/${slug}`} className="infoCard fadeIn" data-card="newsroom">
            <div className="infoCard__media">{ImageLoader(post.images.thumbnail, '', '', 400, 400, 10)}</div>

            <div className="infoCard__content">
                <h3 className="infoCard__title">{title}</h3>
                {date && <p className="infoCard__date">{parseStrapiDate(date)}</p>}
            </div>
        </Link>
    );
}

export default NewsroomCard;