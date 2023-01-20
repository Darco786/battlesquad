import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { NFT_TOKEN_DECIMALS, NFT_TOKEN_SYMBOL } from "../CONTRACT_DETAILS";

function TokenDetails({ isLargerScreen }) {
  const [text, setText] = useState(
    "0x82A99144149373f96710Dd24be9e6C233264D616t"
  );

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }
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
          <Flex>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="token-add"
            />  
            <button onClick={handleCopy} className='copy-text-btn'>Copy</button>
          </Flex>

          <p className="note">
            Please do not send any tokens to this address as they will be lost.
          </p>
        </Flex>
        <Flex direction={"column"}>
          <Text
            className="gradient-text"
            fontSize={isLargerScreen ? "2rem" : "1rem"}
          >
            Decimal
          </Text>
          <Text  fontFamily={`"Poppins", sans-serif`}
          fontWeight='500'
          fontSize='16px'>{NFT_TOKEN_DECIMALS}</Text>
        </Flex>
        <Flex direction={"column"}>
          <Text
            className="gradient-text"
            fontSize={isLargerScreen ? "2rem" : "1rem"}
          >
            Network
          </Text>
          <Text  fontFamily={`"Poppins", sans-serif`}
          fontWeight='500'
          fontSize='16px'>Binance Smart Chain</Text>
        </Flex>
        <Flex direction={"column"}>
          <Text
            className="gradient-text"
            fontSize={isLargerScreen ? "2rem" : "1rem"}
          >
            Token Symbol
          </Text>
          <Text  fontFamily={`"Poppins", sans-serif`}
          fontWeight='500'
          fontSize='16px'
          >{NFT_TOKEN_SYMBOL}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TokenDetails;
