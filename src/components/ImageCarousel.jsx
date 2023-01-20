import { Flex, Image } from "@chakra-ui/react";
import i2 from "../assets/carousel1.png";
import i1 from "../assets/carousel2.png";
import i3 from "../assets/carousel3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";

import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'

import "./Road.css";

// import required modules
import { EffectCoverflow, Pagination ,Navigation} from "swiper";

function ImageCarousel({ isLargerScreen }) {
  return (
    // @todo - interactive slider - images move when click on slider
    <Flex
      width={isLargerScreen ? "50%" : "full"}
      position="relative"
      marginLeft={"auto"}
      marginTop={isLargerScreen ? "5rem" : "1rem"}
      minHeight={"16rem"}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={false}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image
       
        left="0"
        zIndex={10}
        src={i1}
        maxWidth={isLargerScreen ? "250px" : "180px"}
        className={"carouselImg carouselImgLeft"}
      />
        </SwiperSlide>
        <SwiperSlide>
        <Image
       
        src={i2}
        maxWidth={isLargerScreen ? "250px" : "180px"}
        className={"carouselImg carouselImgCenter"}
      />
        </SwiperSlide>
        <SwiperSlide>
        <Image
    
        src={i3}
        maxWidth={isLargerScreen ? "250px" : "180px"}
        className={"carouselImg carouselImgRight"}
      />
        </SwiperSlide>
 
     
      </Swiper>
     
 
   
    </Flex>
  );
}

export default ImageCarousel;
