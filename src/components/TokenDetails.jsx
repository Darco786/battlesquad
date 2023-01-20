import { Flex, Text } from "@chakra-ui/react";
import { NFT_TOKEN_DECIMALS, NFT_TOKEN_SYMBOL } from "../CONTRACT_DETAILS";

function TokenDetails({ isLargerScreen }) {
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
        width="full"
        fontSize={isLargerScreen ? "2.5rem" : "1.5rem"}
      >
        BATTLE SQUAD CONTRACT
      </Text>
      <Text
        fontFamily={`"Poppins", sans-serif`}
        fontWeight={"700"}
        margin={"auto"}
        className="gradient-text"
        width={"full"}
      >
        Use the contract information below to add the {NFT_TOKEN_SYMBOL} token
        to your wallet.
      </Text>
      <Flex
        marginTop={"2rem"}
        textAlign="left"
        className="grad-border"
        gap="1rem"
        borderRadius={"16px"}
        justifyContent="space-between"
        padding={isLargerScreen ? "3rem" : "1.5rem"}
        direction={isLargerScreen ? "row" : "column"}
      >
        <Flex direction={"column"}>
          <Text
            className="gradient-text"
            fontSize={isLargerScreen ? "2rem" : "1rem"}
          >
            Address
          </Text>
          <Text>0x4Dd942bAa75810a3C1E876e79d5cD35E09C97A76</Text>
        </Flex>
        <Flex direction={"column"}>
          <Text
            className="gradient-text"
            fontSize={isLargerScreen ? "2rem" : "1rem"}
          >
            Decimal
          </Text>
          <Text>{NFT_TOKEN_DECIMALS}</Text>
        </Flex>
        <Flex direction={"column"}>
          <Text
            className="gradient-text"
            fontSize={isLargerScreen ? "2rem" : "1rem"}
          >
            Network
          </Text>
          <Text>Binance Smart Chain</Text>
        </Flex>
        <Flex direction={"column"}>
          <Text
            className="gradient-text"
            fontSize={isLargerScreen ? "2rem" : "1rem"}
          >
            Token Symbol
          </Text>
          <Text>{NFT_TOKEN_SYMBOL}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TokenDetails;
