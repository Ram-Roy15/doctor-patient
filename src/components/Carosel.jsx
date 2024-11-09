
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carosel() {
  return (
    <>
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
        <SwiperSlide> <Slide></Slide> </SwiperSlide>
        <SwiperSlide> <Slide></Slide> </SwiperSlide>
        <SwiperSlide> <Slide></Slide> </SwiperSlide>
        <SwiperSlide> <Slide></Slide> </SwiperSlide>
        <SwiperSlide> <Slide></Slide> </SwiperSlide>
        <SwiperSlide> <Slide></Slide> </SwiperSlide>
        <SwiperSlide> <Slide></Slide> </SwiperSlide>
    
    
      </Swiper>
    </>
  );
}
