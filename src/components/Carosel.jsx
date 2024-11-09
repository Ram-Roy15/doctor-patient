
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bg1 from '../assets/images/bg1.jpg';

import bg2 from '../assets/images/bg2.jpg';
import bg3 from '../assets/images/bg3.jpg';
import bg4 from '../assets/images/bg4.jpg';
import bg5 from '../assets/images/bg5.jpg';
import bg6 from '../assets/images/bg6.jpg';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carosel() {
  return (
    <div className='container px-5 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
  
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <Slide image={bg1} text="this is slide 1"
        ></Slide> </SwiperSlide>
        <SwiperSlide> <Slide image={bg2}></Slide> </SwiperSlide>
        <SwiperSlide> <Slide image={bg3}></Slide> </SwiperSlide>
        <SwiperSlide> <Slide image={bg4}></Slide> </SwiperSlide>
        <SwiperSlide> <Slide image={bg5}></Slide> </SwiperSlide>
        <SwiperSlide> <Slide image={bg6}></Slide> </SwiperSlide>  
      </Swiper>
    </div>
  );
}
