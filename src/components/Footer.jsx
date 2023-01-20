import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import logoWhite from "../assets/logowhite.png";
import { NFT_TOKEN_SYMBOL } from "../CONTRACT_DETAILS";

function Footer() {
  const [isLargerScreen] = useMediaQuery("(min-width: 660px)");
  return (
    <Flex
      padding={"3rem 1rem"}
      background="black"
      direction={"column"}
      gap="1rem"
    >
      <Flex
        alignItems={"center"}
        justifyContent={isLargerScreen ? "space-between" : "center"}
      >
        <Image maxWidth={"110px"} src={logoWhite} />
        <Flex
          gap={"2rem"}
          fontFamily={"russo one"}
          display={isLargerScreen ? "flex" : "none"}
        >
          <Text fontSize={"sm"} fontWeight="bold">
            BUY {NFT_TOKEN_SYMBOL}
          </Text>
          <Text fontSize={"sm"} fontWeight="bold">
            HOW TO BUY IBAT{" "}
          </Text>
          <Text fontSize={"sm"} fontWeight="bold">
            PREMIER LEAGUE{" "}
          </Text>
          <Text fontSize={"sm"} fontWeight="bold">
            WHY $BATS{" "}
          </Text>
          <Text fontSize={"sm"} fontWeight="bold">
            ROADMAP{" "}
          </Text>
          <Text fontSize={"sm"} fontWeight="bold">
            TOKENOMICS
          </Text>
          <Text fontSize={"sm"} fontWeight="bold">
            {" "}
            LITEPAPER
          </Text>
        </Flex>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        direction={isLargerScreen ? "row" : "column"}
        gap="1rem"
      >
        <Text fontWeight={"light"} fontSize="xs">
          Copyright © 2023 - All rights reserved by BATTLE INFINITY
        </Text>
        <Text fontWeight={"light"} fontSize="xs">
          Disclaimer: Your investment may go down as well as up in value.
          Cryptocurrency is not regulated in the UK.
        </Text>
      </Flex>
    </Flex>
  );
}

export default Footer;
