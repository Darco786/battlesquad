import { Flex, Image } from "@chakra-ui/react";
import i2 from "../assets/carousel1.png";
import i1 from "../assets/carousel2.png";
import i3 from "../assets/carousel3.png";

function ImageCarousel({ isLargerScreen }) {
  return (
    // @todo - interactive slider - images move when click on slider
    <Flex
      width={isLargerScreen ? "43%" : "full"}
      position="relative"
      marginLeft={"auto"}
      marginTop={isLargerScreen ? "5rem" : "1rem"}
      minHeight={"16rem"}
    >
      <Image
        position={"absolute"}
        left="0"
        zIndex={10}
        src={i1}
        maxWidth={isLargerScreen ? "250px" : "180px"}
        className={"carouselImg carouselImgLeft"}
      />
      <Image
        position={"absolute"}
        left="25%"
        zIndex={20}
        src={i2}
        maxWidth={isLargerScreen ? "250px" : "180px"}
        className={"carouselImg carouselImgCenter"}
      />
      <Image
        position={"absolute"}
        right="0"
        zIndex={10}
        src={i3}
        maxWidth={isLargerScreen ? "250px" : "180px"}
        className={"carouselImg carouselImgRight"}
      />
    </Flex>
  );
}

export default ImageCarousel;
