import { Flex, Text } from "@chakra-ui/react";
import PandUCard from "./PandUCard";
import c1 from "../assets/card1.svg";
import c2 from "../assets/card2.svg";
import c3 from "../assets/card3.svg";
import c4 from "../assets/card4.svg";
import c5 from "../assets/card5.svg";
import c6 from "../assets/card6.svg";

function ProductsAndUtility({ isLargerScreen }) {
  return (
    <Flex
      width="full"
      direction={"column"}
      fontFamily={"russo one"}
      padding={isLargerScreen ? "8rem 4rem" : "4rem 1rem"}
    >
      <Text
        as="h3"
        textTransform={"uppercase"}
        fontSize={isLargerScreen ? "2.5rem" : "1.5rem"}
      >
        Battle Squad
      </Text>
      <Text
        fontFamily={`"Poppins", sans-serif`}
        fontSize="2rem"
        fontWeight={"700"}
        className="gradient-text"
        margin={"auto"}
      >
        Products and Utility
      </Text>
      <Flex gap="2.5rem" marginTop={"4rem"} flexWrap="wrap">
        <PandUCard
          isLargerScreen={isLargerScreen}
          imgSource={c1}
          cardHeading="EARLY Access"
          cardText="Users who are holding $BATS will get early access to the ecoysyst"
        />
        <PandUCard
          isLargerScreen={isLargerScreen}
          imgSource={c2}
          cardHeading="DEFLATIONARY CLAIM MODEL"
          cardText="In this model users who claims NFT with $BATS 50% of the total amount is always burnt due to which total token supply will reduce linearly"
        />

        <PandUCard
          isLargerScreen={isLargerScreen}
          imgSource={c3}
          cardHeading="BATS HARVESTING"
          cardText="After Claiming, NFT users can stake their NFTs and harvest $BATS at 40% APY"
        />
        <PandUCard
          isLargerScreen={isLargerScreen}
          imgSource={c4}
          cardHeading="RENTING ABILITY"
          cardText="With this ability the owners can rent and earn passive income while giving it to strategically better players to use it"
        />

        <PandUCard
          isLargerScreen={isLargerScreen}
          imgSource={c5}
          cardHeading="BATS MARKETPLACE"
          cardText="In this exclusive marketplace users can get access to all the premium feature of $BATS"
        />
        <PandUCard
          isLargerScreen={isLargerScreen}
          imgSource={c6}
          cardHeading="BATS KEY"
          cardText="Users are required to have a minimum of 100 $BATS to unlock premium NFTs"
        />
      </Flex>
    </Flex>
  );
}

export default ProductsAndUtility;
