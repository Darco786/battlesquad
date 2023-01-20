import { Button, Flex, List, ListItem, Text } from "@chakra-ui/react";
import bg from "../assets/bgairdrop.png";
import { NFT_TOKEN_SYMBOL } from "../CONTRACT_DETAILS";
import ImageCarousel from "./ImageCarousel";

function Airdrops({ isLargerScreen }) {
  return (
    <Flex
      backgroundImage={bg}
      backgroundSize="cover"
      width="full"
      fontFamily={"russo one"}
      padding={isLargerScreen ? "8rem 4rem" : "4rem 1rem"}
      minHeight={"66vh"}
      backgroundRepeat="no-repeat"
      gap={"2rem"}
      direction={isLargerScreen ? "row" : "column-reverse"}
    >
      <Flex width={isLargerScreen ? "50%" : "full"} direction="column">
        <Text
          as="h3"
          textTransform={"uppercase"}
          fontSize={isLargerScreen ? "2.5rem" : "1.5rem"}
        >
          NFT AIRDROPS AND PERKS
        </Text>
        <Text
          fontFamily={`"Poppins", sans-serif`}
          fontSize={isLargerScreen ? "2rem" : "1rem"}
          fontWeight={"700"}
          className="gradient-text"
          marginTop="-.5rem"
          marginBottom={"2rem"}
          margin={"auto"}
        >
          Eligibility requirements
        </Text>
        <List
          marginTop={"1rem"}
          textAlign={"left"}
          fontSize={isLargerScreen ? "1.35rem" : "1rem"}
          display="flex"
          flexDirection={"column"}
          gap=".74rem"
        >
          <ListItem
            paddingLeft={"1.5rem"}
            _before={{
              content: '""',
              position: "absolute",
              left: "0",
              top: "13px",
              width: "9px",
              height: "9px",
              background: "#FF6A57",
              borderRadius: "50%",
            }}
            position={"relative"}
          >
            20% will be airdropped to $IBAT presale buyers.
          </ListItem>
          <ListItem
            paddingLeft={"1.5rem"}
            _before={{
              content: '""',
              position: "absolute",
              left: "0",
              top: "13px",
              width: "9px",
              height: "9px",
              background: "#FF6A57",
              borderRadius: "50%",
            }}
            position={"relative"}
          >
            20% will be airdropped to $IBAT holders.
          </ListItem>
          <ListItem
            paddingLeft={"1.5rem"}
            _before={{
              content: '""',
              position: "absolute",
              left: "0",
              top: "13px",
              width: "9px",
              height: "9px",
              background: "#FF6A57",
              borderRadius: "50%",
            }}
            position={"relative"}
          >
            Users can buy the tokens through presale dashboard with BNB, USDT,
            USDC, BUSD and IBAT.
          </ListItem>
          <ListItem
            paddingLeft={"1.5rem"}
            _before={{
              content: '""',
              position: "absolute",
              left: "0",
              top: "13px",
              width: "9px",
              height: "9px",
              background: "#FF6A57",
              borderRadius: "50%",
            }}
            position={"relative"}
          >
            Users buying the NFTs through IBAT token will get a special price.
          </ListItem>
        </List>

        <Flex marginTop={"2rem"} fontStyle="italic" gap={"1.75rem"}>
          <Button
            as={"a"}
            background={
              "linear-gradient(90deg, #7100DC 0%, #FF6A57 100.23%), linear-gradient(90.18deg, #003E9B 0.15%, #AD53CC 99.85%), rgba(10, 13, 56, 0.8);"
            }
            fontSize={isLargerScreen ? "1.2rem" : ".8rem"}
            fontStyle="italic"
            textTransform={"uppercase"}
            padding="1.55rem 1.65rem"
          >
            HOT TO BUY {NFT_TOKEN_SYMBOL}
          </Button>
          <Button
            as={"a"}
            padding="1.55rem 1.65rem"
            fontSize={isLargerScreen ? "1.2rem" : ".8rem"}
            fontStyle="italic"
            textTransform={"uppercase"}
            border="1px solid #ffffff"
            boxShadow={"0px 4px 4px rgb(0 0 0 / 25%)"}
            backdropFilter="blur(11.5px)"
            background={"rgba(0, 0, 0, 0.2)"}
          >
            BUY {NFT_TOKEN_SYMBOL} now!
          </Button>
        </Flex>
      </Flex>
      <ImageCarousel isLargerScreen={isLargerScreen} />
    </Flex>
  );
}

export default Airdrops;
