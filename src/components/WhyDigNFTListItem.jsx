import { Flex, Text } from "@chakra-ui/react";

function WhyDigNFTListItem({ count, cardContent, isLargerScreen }) {
  return (
    <Flex
      maxWidth={isLargerScreen ? "50%" : "full"}
      width={isLargerScreen ? "46%" : "100%"}
      textAlign={"left"}
      padding={isLargerScreen ? "0 2rem" : "0 .25rem"}
      alignItems="flex-start"
    >
      <Flex
        minWidth="61px"
        height="61px"
        lineHeight="65px"
        textAlign="center"
        justifyContent={"center"}
        alignItems="center"
        marginRight={"1rem"}
        borderRadius="50%"
        position="relative"
        className="gradient-text"
        background={
          "linear-gradient(90deg, #170325, #170325) padding-box ,linear-gradient(90deg, #951BBB 0%, #DA4F7A 100.23%) border-box!important"
        }
        border="2px solid transparent"
      >
        <Text
          style={{
            fontFamily: '"Russo One", sans-serif',
            fontWeight: "400",
            fontSize: "32px",
            lineHeight: "65px",
            textAlign: "center",
            background: "linear-gradient(90deg, #951BBB 0%, #DA4F7A 100.23%)",
            backgroundClip: "border-box",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {count}
        </Text>
      </Flex>
      <Text fontSize={isLargerScreen ? "1.25rem" : "1rem"}>{cardContent}</Text>
    </Flex>
  );
}

export default WhyDigNFTListItem;
