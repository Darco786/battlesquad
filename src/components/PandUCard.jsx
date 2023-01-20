import { Flex, Text, Image } from "@chakra-ui/react";

function PandUCard({ imgSource, cardHeading, cardText, isLargerScreen }) {
  return (
    <Flex
      background={
        "linear-gradient(90deg, rgba(41, 0, 77, 0.3) 32.82%, rgba(61, 6, 6, 0.168) 100%), rgba(255, 255, 255, 0.05)"
      }
      borderRadius="16px"
      textAlign={"left"}
      boxShadow="0px 4px 8px rgb(0 0 0 / 25%)"
      transition={"all 0.7s ease"}
      position="relative"
      top="8px"
      className="PandUCard"
      width={isLargerScreen ? "48%" : "full"}
      margin="auto"
    >
      <Image
        src={imgSource}
        height={isLargerScreen ? "full" : "auto"}
        borderTopLeftRadius="16px"
        borderBottomLeftRadius={"16px"}
        width={isLargerScreen ? "" : "30%"}
        objectFit={"cover"}
      ></Image>
      <Flex
        direction={"column"}
        padding={isLargerScreen ? "1rem" : ".5rem"}
        justifyContent={"center"}
        gap=".4rem"
      >
        <Text
          fontSize={isLargerScreen ? "1.88rem" : "18px"}
          textTransform="uppercase"
          lineHeight={"2rem"}
        >
          {cardHeading}
        </Text>
        <Text
          color="#ffffffb3"
          lineHeight={"130%"}
          fontSize={isLargerScreen ? "1rem" : "14px"}
        >
          {cardText}
        </Text>
      </Flex>
    </Flex>
  );
}

export default PandUCard;
