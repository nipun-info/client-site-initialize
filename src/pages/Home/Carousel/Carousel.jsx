
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slideImg1 from '../../../assets/images/carousel1.jpg'
import slideImg2 from '../../../assets/images/carousel2.jpg'
import slideImg3 from '../../../assets/images/carousel3.jpg'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slides from './Slides';

export default function Carousel() {
    return (
        <div className='container px-4 py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slides image={slideImg1} text = 'Get Your Graphics Ddsign Projects Done in minutes' />
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={slideImg2} text = 'Get Your Web Development Projects Done in minutes' />
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={slideImg3} text = 'Start Your Digital Marketing Companies Up N running' />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
