import { Flex, Image, Text } from "@chakra-ui/react";
import s0 from "../assets/seen00.png";
import s1 from "../assets/seen01.png";
import s2 from "../assets/seen02.png";
import s3 from "../assets/seen03.png";
import s4 from "../assets/seen04.png";
import s5 from "../assets/seen05.png";
import s6 from "../assets/seen06.png";

function AsSeenOn({ isLargerScreen }) {
  return (
    <Flex
      fontFamily={"russo one"}
      textTransform="uppercase"
      gap="2rem"
      margin={"auto"}
      padding="2rem 5rem "
      direction={isLargerScreen ? "row" : "column"}
      background="#140421"
      width={"full"}
      className='seen-on'
      
    >
      <Text
      as='h5'
        width={"max-content"}
        minWidth="max-content"
        margin={isLargerScreen ? "initial" : "auto"}
        className='seen-logo-outer'
      >
        As seen on
      </Text>
      <Flex gap="1rem" flexWrap={"wrap"} justifyContent="center" className="seen-img">
        <Image src={s0} />
        <Image src={s1} />
        <Image src={s2} />
        <Image src={s3} />
        <Image src={s4} />
        <Image src={s5} />
        <Image src={s6} />
      </Flex>
    </Flex>
  );
}

export default AsSeenOn;
