import {
  Flex,
  Image,
  ListItem,
  OrderedList,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  BUYING_WITH_IBAT_DISCOUNT,
  NFT_TOKEN_SYMBOL,
} from "../CONTRACT_DETAILS";
import howbg from "../assets/howtobuy.png";
import iconHelp from "../assets/iconhelporange.svg";

function HowToBuyMini({ isLargerScreen }) {
  return (
    <Flex
      width="full"
      direction={"column"}
      fontFamily={"russo one"}
      padding={isLargerScreen ? "8rem 4rem" : "4rem 1rem"}
    >
      <Flex
        fontFamily={`"Poppins", sans-serif`}
        direction={isLargerScreen ? "row" : "column-reverse"}
        width="full"
        alignItems={"center"}
      >
        <Flex
          direction={"column"}
          width={isLargerScreen ? "50%" : ""}
          textAlign={"left"}
        >
          <Text
            as="h3"
            textTransform={"uppercase"}
            width="full"
            fontSize={isLargerScreen ? "2.5rem" : "1.5rem"}
            fontFamily="Russo One"
            textAlign={isLargerScreen ? "left" : "center"}
          >
            HOW TO BUY {NFT_TOKEN_SYMBOL}
          </Text>
          <Text
            fontFamily={`"Poppins", sans-serif`}
            fontWeight={"700"}
            margin={"0"}
            marginBottom="2rem"
            className="gradient-text"
            width={"full"}
            textAlign={isLargerScreen ? "left" : "center"}
          >
            Easy Step by Step Guide
          </Text>
          <OrderedList
            padding="1rem"
            fontSize={isLargerScreen ? "1rem" : "14px"}
            display="flex"
            flexDirection={"column"}
            gap="1rem"
          >
            <ListItem>
              Please make sure you have a Metamask account ready (
              <strong>for mobile users we recommend using TrustWallet</strong>)
            </ListItem>
            <ListItem>
              Click on the{" "}
              <strong>
                <u>'Connect Wallet'</u>
              </strong>{" "}
              button to enable {NFT_TOKEN_SYMBOL} to connect with your wallet.
              Once connected you can buy {NFT_TOKEN_SYMBOL} tokens using BNB,
              USDT, USDC, BUSD and IBAT{" "}
              <strong>
                ({BUYING_WITH_IBAT_DISCOUNT}% discount when paying with $IBAT)
              </strong>
              . Just choose the amount of {NFT_TOKEN_SYMBOL} tokens you wish to
              buy and click{" "}
              <strong>
                <u>'BUY {NFT_TOKEN_SYMBOL}'</u>
              </strong>{" "}
              (make sure you have enough balance to cover gas fees).
            </ListItem>
            <ListItem>
              Once the presale is over, you will be able to claim your{" "}
              {NFT_TOKEN_SYMBOL} tokens. Details will be posted soon. However,
              make sure to re-visit this website and click the 'Claim' button.
            </ListItem>
          </OrderedList>
        </Flex>
        <Image src={howbg} width={isLargerScreen ? "50%" : ""} />
      </Flex>
      <Flex
        marginTop={"2rem"}
        textAlign="left"
        className="grad-border"
        gap="1rem"
        borderRadius={"16px"}
        padding={isLargerScreen ? "3rem" : "1.5rem"}
        direction={"column"}
        alignItems="center"
      >
        <Flex>
          <Image src={iconHelp} />
          <Text>Need more help?</Text>
        </Flex>
        <Flex
          gap="1rem"
          width={"full"}
          justifyContent="space-between"
          direction={isLargerScreen ? "row" : "column"}
        >
          <ChakraLink
            _before={{
              content: '""',
              width: "0",
              height: "0",
              borderTop: "4px solid transparent",
              borderLeft: "5px solid #FF6A57",
              borderBottom: "4px solid transparent",
              position: "absolute",
              left: ".5rem",
              top: "35%",
            }}
            href="/tips-for-keeping-your-trust-wallet-safe"
            isExternal
            padding={".25rem .75rem"}
            position={"relative"}
            paddingLeft="1.2rem"
            fontSize=".9rem"
            background="#ffffff10"
            borderRadius={"md"}
          >
            How to Setup Trust Wallet
            <ExternalLinkIcon mx="2px" />
          </ChakraLink>
          <ChakraLink
            _before={{
              content: '""',
              width: "0",
              height: "0",
              borderTop: "4px solid transparent",
              borderLeft: "5px solid #FF6A57",
              borderBottom: "4px solid transparent",
              position: "absolute",
              left: ".5rem",
              top: "35%",
            }}
            href="/tips-for-keeping-your-trust-wallet-safe"
            isExternal
            padding={".25rem .75rem"}
            position={"relative"}
            paddingLeft="1.2rem"
            fontSize=".9rem"
            background="#ffffff10"
            borderRadius={"md"}
          >
            How to Install Trust Wallet
            <ExternalLinkIcon mx="2px" />
          </ChakraLink>
          <ChakraLink
            _before={{
              content: '""',
              width: "0",
              height: "0",
              borderTop: "4px solid transparent",
              borderLeft: "5px solid #FF6A57",
              borderBottom: "4px solid transparent",
              position: "absolute",
              left: ".5rem",
              top: "35%",
            }}
            href="/tips-for-keeping-your-trust-wallet-safe"
            isExternal
            padding={".25rem .75rem"}
            position={"relative"}
            paddingLeft="1.2rem"
            fontSize=".9rem"
            background="#ffffff10"
            borderRadius={"md"}
          >
            How to Add $BATS to Trust Wallet
            <ExternalLinkIcon mx="2px" />
          </ChakraLink>
          <ChakraLink
            _before={{
              content: '""',
              width: "0",
              height: "0",
              borderTop: "4px solid transparent",
              borderLeft: "5px solid #FF6A57",
              borderBottom: "4px solid transparent",
              position: "absolute",
              left: ".5rem",
              top: "35%",
            }}
            href="/tips-for-keeping-your-trust-wallet-safe"
            isExternal
            padding={".25rem .75rem"}
            position={"relative"}
            paddingLeft="1.2rem"
            fontSize=".9rem"
            background="#ffffff10"
            borderRadius={"md"}
          >
            Tips for Keeping Your Trust Wallet Safe
            <ExternalLinkIcon mx="2px" />
          </ChakraLink>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default HowToBuyMini;
