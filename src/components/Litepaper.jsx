import { Text, Flex, Link as ChakraLink } from "@chakra-ui/react";
import bgLite from "../assets/bglitepaper.jpg";
import { NFT_TOKEN_SYMBOL } from "../CONTRACT_DETAILS";

function Litepaper({ isLargerScreen }) {
  return (
    <Flex
      backgroundImage={bgLite}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundPosition={isLargerScreen ? "center top" : "75%"}
      width="full"
      direction={"column"}
      fontFamily={"russo one"}
      color={"white"}
    >
      <Flex
        direction={"column"}
        width={isLargerScreen ? "50%" : "full"}
        padding={isLargerScreen ? "8rem 4rem" : "4rem 1rem"}
        gap={"2rem"}
        textAlign={isLargerScreen ? "left" : "center"}
        alignItems={isLargerScreen ? "flex-start" : "center"}
        background={
          isLargerScreen ? "" : "linear-gradient(#0c001694, #0c001694)"
        }
        backdropFilter="blur(1px)"
      >
        <Text
          as="h3"
          textTransform={"uppercase"}
          fontSize={isLargerScreen ? "2.5rem" : "1.5rem"}
        >
          READ THE LITEPAPER
        </Text>
        <Text fontFamily={'"Poppins",sans-serif'} fontWeight="500">
          We have laid the foundation for the BattleSquad platform with our
          initial token '{NFT_TOKEN_SYMBOL}'. Our capable team is excited about
          the future experience the platform will provide to our users. Our lite
          paper is available for you to read.
        </Text>
        <ChakraLink
          as={"a"}
          background={
            "linear-gradient(90deg, #7100DC 0%, #FF6A57 100.23%), linear-gradient(90.18deg, #003E9B 0.15%, #AD53CC 99.85%), rgba(10, 13, 56, 0.8);"
          }
          fontSize={"1.2rem"}
          fontStyle="italic"
          textTransform={"uppercase"}
          padding="1.55rem 1.65rem"
          width={"max-content"}
          borderRadius="md"
          height={"10"}
          display="inline-flex"
          alignItems={"center"}
          href="https://drive.google.com/file/d/1WuA9l52-y6bGUmSBWp-tJLD7HPSXuP_W/view?usp=sharing"
          isExternal
        >
          Read Litepaper
        </ChakraLink>
      </Flex>
    </Flex>
  );
}

export default Litepaper;
