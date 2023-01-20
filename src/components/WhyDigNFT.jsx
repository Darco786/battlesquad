import { Flex, Text } from "@chakra-ui/react";
import WhyDigNFTListItem from "./WhyDigNFTListItem";

function WhyDigNFT({ isLargerScreen }) {
  return (
    <section id="why">
    <Flex
    
      width="full"
      direction={"column"}
      fontFamily={"russo one"}
      padding={isLargerScreen ? "8rem 4rem" : "4rem 1rem"}
      color={"white"}
    >
      <Text
        as="h3"
        textTransform={"uppercase"}
        fontSize={isLargerScreen ? "2.5rem" : "1.5rem"}
      >
        WHY BATTLE SQUAD?
      </Text>
      <Text
        fontFamily={`"Poppins", sans-serif`}
        fontSize={isLargerScreen ? "2rem" : "1rem"}
        fontWeight={"700"}
        margin={"auto"}
        className="gradient-text"
      >
        5 Reasons Why You Need $BATS
      </Text>
      <Flex
        flexWrap={"wrap"}
        gap="3rem"
        justifyContent={"space-between"}
        fontFamily='"Poppins", sans-serif'
        // fontSize={"1.25rem"}
        fontWeight="bold"
        margin={"auto"}
        marginTop={"4rem"}
        maxWidth={"1200px"}
      >
        <WhyDigNFTListItem
          isLargerScreen={isLargerScreen}
          count="1"
          cardContent="$BATS is a utility token that will be used in fantasy sports and other games being developed by Battle Infinity."
        />
        <WhyDigNFTListItem
          isLargerScreen={isLargerScreen}
          count="2"
          cardContent="Users will gain premium access and have priority claim to NFTs through $BATS."
        />
        <WhyDigNFTListItem
          isLargerScreen={isLargerScreen}
          count="3"
          cardContent="Users will need a minimum of 100 $BATS to unlock and redeem upcoming NFTs."
        />
        <WhyDigNFTListItem
          isLargerScreen={isLargerScreen}
          count="4"
          cardContent="Users can buy real NFTs and can rent them out on the marketplace and share rewards."
        />
        <WhyDigNFTListItem
          isLargerScreen={isLargerScreen}
          count="5"
          cardContent="Users can get true ownership of Gameplays with $BATS."
        />
      </Flex>
    </Flex>
    </section>
  );
}

export default WhyDigNFT;
