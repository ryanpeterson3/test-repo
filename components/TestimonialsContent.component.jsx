import { ImageLoader } from '../utils/imageLoader';

const TestimonialsContent = ({ testimonial }) => {
    const { image } = testimonial;
    return ImageLoader(image, '', '', 953, 640, 10)
}

export default TestimonialsContent;