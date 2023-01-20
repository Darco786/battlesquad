import "../styles/Header.scss";
import logo from "../assets/logo.png";
import { Flex, Link as ChakraLink, useMediaQuery } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import ConnectWalletDrawer from "./ConnectWalletDrawer";
import HamMenu from "./HamMenu";

function Header({ login, currentChainIsSupported }) {
  const { isAuthenticated } = useMoralis();
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  return (
    <>
      <header className="header" style={{ background: "#140421" }}>
        <Flex
          width={"full"}
          justifyContent="space-between"
          alignItems={"center"}
          margin="auto"
          maxWidth={"1400px"}
          fontFamily="Russo One"
        >
          <img
            src={logo}
            className="header__logo"
            alt="logo"
            style={{ width: "10rem" }}
          />
          {!isLargerThan500 ? (
            <Flex
              alignItems={"center"}
              textTransform="uppercase"
              fontWeight={"semibold"}
              fontSize=".85rem"
              gap={!isLargerThan500 ? ".75rem" : "2rem"}
            >
              {isAuthenticated && (
                <ConnectWalletDrawer
                  currentChainIsSupported={currentChainIsSupported}
                />
              )}
              <HamMenu login={login} />
            </Flex>
          ) : (
            <Flex
              gap="2rem"
              alignItems={"center"}
              textTransform="uppercase"
              fontWeight={"semibold"}
              fontSize=".85rem"
            >
               <ChakraLink href="https://battleinfinity.io/" isExternal>
                Buy $BATS 
              </ChakraLink>
              <ChakraLink href="/how-to-buy-bats/" isExternal>
                How to Buy <ExternalLinkIcon mx="2px" />
              </ChakraLink>
              <ChakraLink href="/how-to-buy-bats/" isExternal>
              IBAT PREMIER LEAGUE 
              </ChakraLink>
              <ChakraLink href="#why" >
              WHY $BATS 
              </ChakraLink>
              <ChakraLink href="#roadmap" >
              Roadmap 
              </ChakraLink>
              <ChakraLink href="#token">
              TOKENOMICS
              </ChakraLink>
              <ChakraLink href="https://battleinfinity.io/" isExternal>
                Litepaper <ExternalLinkIcon mx="2px" />
              </ChakraLink>
              
              <ConnectWalletDrawer
                login={login}
                currentChainIsSupported={currentChainIsSupported}
              />
            </Flex>
          )}
        </Flex>
      </header>
    </>
  );
}

export default Header;
