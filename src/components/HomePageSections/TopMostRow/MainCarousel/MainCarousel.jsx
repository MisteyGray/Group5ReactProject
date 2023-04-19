import { useEffect, useState } from 'react'
import { carouselPics } from '../../../../data'


const MainCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % carouselPics.length);
        }, 3500);
        return () => clearTimeout(timeout);
    }, [currentIndex]);

    return (

        <div id="slideContainer">
            <img className='sliderPics' src={carouselPics[currentIndex]} alt="Slideshow" />
        </div>
    );
}

export default MainCarousel
