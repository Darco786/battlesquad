import { Image, Text, Flex, Link as ChakraLink } from "@chakra-ui/react";
import linkedInLogo from "../assets/linkedin.svg";

function TeamMember({ pic, title, name, linkedIn }) {
  return (
    <Flex
      direction={"column"}
      textTransform={"uppercase"}
      position="relative"
      top="8px"
      transition={"all 0.7s ease"}
      _hover={{
        top: "0px",
      }}
    >
      <Image src={pic} />
      <Flex
        gap={".5rem"}
        alignItems="center"
        width={"max-content"}
        margin="auto"
        fontFamily={`Russo one`}
        marginTop={"1rem"}
        fontSize="1.2rem"
      >
        <Text fontWeight="black">{name}</Text>
        <ChakraLink href={linkedIn} isExternal>
          <Image src={linkedInLogo} />
        </ChakraLink>
      </Flex>
      <Text
        color="#FF6A57"
        fontSize={"1rem"}
        fontFamily={`"Poppins", sans-serif`}
      >
        {title}
      </Text>
    </Flex>
  );
}

export default TeamMember;
