import Image from "next/image";
import parseStrapiDate from "../utils/parseStrapiDate";
import Link from 'next/link';

const BlogCard = ({ title, date, slug, preview, image, video, type, contentType, i }) => {
    return (
        <Link href={`/newsroom/${slug}`}>
            <div className="blogCard" data-aos="fade" data-aos-delay={i * 100}>
                <div className="blogCard__media">
                    <Image src={image} width={426} height={312} alt="" />
                </div>

                <div className="blogCard__content">
                    <h3 className="blogCard__title themeHeader">
                        {title}
                    </h3>

                    {date && <p className="blogCard__date">{parseStrapiDate(date)}</p>}
                </div>
            </div>
        </Link>
        )
}

export default BlogCard;