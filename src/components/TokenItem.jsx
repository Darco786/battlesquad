import { Text, Flex, Image } from "@chakra-ui/react";

function TokenItem({ picSrc, token, tokenName }) {
  return (
    <Flex
      textAlign={"left"}
      gap=".75rem"
      background={"rgba(0, 0, 0, 0.4)"}
      padding=".5rem 1rem"
      borderRadius={".75rem"}
      className="grad-border"
      minWidth={"260px"}
      width="max-content"
      alignItems={"center"}
    >
      <Image src={picSrc} height="fit-content" />
      <Flex direction={"column"}>
        <Text fontSize={"1.5rem"} textTransform={"uppercase"}>
          {token}
        </Text>
        <Text fontFamily={`"Poppins", sans-serif`} marginTop="-0.5">
          {tokenName}
        </Text>
      </Flex>
    </Flex>
  );
}

export default TokenItem;
