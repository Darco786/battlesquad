import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Flex,
  Text,
  Badge,
  Spacer,
  Spinner,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import CloseIcon from "../assets/close.svg";
import walletMM from "../assets/wallet-mm.svg";
import walletWC from "../assets/wallet-wc.svg";
import { useMoralis, useChain } from "react-moralis";
import { useCallback } from "react";
import { BSC_COINS_SUPPORTED, ETH_COINS_SUPPORTED } from "../COINS_SUPPORTED";
import { isTestnet } from "../CONTRACT_DETAILS";

function ConnectWalletDrawer({ addClass, login, currentChainIsSupported }) {
  /**
   * TOAST - START
   */
  const toast = useToast();
  const showErrToast = useCallback(
    (errTitle, errMsg) => {
      toast({
        containerStyle: {
          maxWidth: "92vw",
        },
        title: errTitle,
        description: errMsg ? errMsg : "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );

  /**
   * TOAST - END
   */
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  const { isAuthenticated, isAuthenticating, user, isWeb3Enabled, logout } =
    useMoralis();
  const { switchNetwork, chainId, chain } = useChain();

  const switchChain = useCallback(
    (chainId_user) => {
      if (!isWeb3Enabled) return;
      console.log(`Switching Chain...`);
      try {
        switchNetwork(chainId_user).then(() => {
          console.log(`Switching Chain...Success`);
        });
      } catch (err) {
        console.error(err);
        if (err && err.data) showErrToast(err.data.message);
        else if (err && err.message) showErrToast(err.message);
        console.error(`dev-switchchain failed`);
      }
    },
    [isWeb3Enabled, switchNetwork, showErrToast]
  );

  const handleAuth = async (e) => {
    if (e === "logout") {
      await logout();
      // setAllowance(false);

      BSC_COINS_SUPPORTED.forEach((token) => {
        console.log(`Removing - 0x38_${token.symbol.toUpperCase()}allowance`);
        window.localStorage.removeItem(
          `0x38_${token.symbol.toUpperCase()}allowance`
        );
      });
      ETH_COINS_SUPPORTED.forEach((token) => {
        console.log(
          `Removing - ${
            isTestnet ? "0x89" : "0x1"
          }_${token.symbol.toUpperCase()}allowance`
        );
        window.localStorage.removeItem(
          `${isTestnet ? "0x89" : "0x1"}_${token.symbol.toUpperCase()}allowance`
        );
      });

      console.log(`Removing - 0x1_ETHallowance`);

      window.localStorage.removeItem(`0x1_ETHallowance`);
      window.localStorage.removeItem(`0x38_BNBallowance`);

      window.localStorage.setItem("NFT_userAddress", "");
      window.localStorage.removeItem("NFT_userAddress");
      console.log(`Logged Out`);
      return;
    }
    if (!isAuthenticated) {
      try {
        if (e === "walletconnect") {
          console.log(`Provide👇`);
          console.log(e);
          await login(e);
        } else {
          // metamask
          await login();
        }
      } catch (error) {
        console.log(error);
        console.error(`dev:issue Wallet connected`);
      }
    }
  };

  const btnClasses = `btn btn__connect_wallet btn-gradient-2 ${addClass}`;

  return (
    <>
      <Button
        className={btnClasses}
        onClick={onOpen}
        background={
          "linear-gradient(90deg, #7100DC 0%, #FF6A57 100.23%), linear-gradient(90.18deg, #003E9B 0.15%, #AD53CC 99.85%), rgba(10, 13, 56, 0.8);"
        }
        textTransform="uppercase"
        fontStyle={"italic"}
        fontWeight={"black"}
        borderRadius="4px"
        boxShadow={"2px 2px 23px rgba(0, 0, 0, 0.3)"}
        padding={isLargerThan500 ? ".75rem 1.5rem" : ".75rem"}
        borderBottom={
          isAuthenticated &&
          chain &&
          (!currentChainIsSupported ? "4px solid red" : "")
        }
      >
        {!isAuthenticated
          ? `Connect Wallet`
          : user &&
            `${user
              ?.get("ethAddress")
              .toString()
              .substring(0, isLargerThan500 ? 5 : 4)}
            ...
            ${user
              ?.get("ethAddress")
              .toString()
              .substring(
                user.get("ethAddress").length - 1,
                user.get("ethAddress").length - (isLargerThan500 ? 6 : 5)
              )}`}
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size={"sm"} bg="Red">
        <DrawerOverlay />

        <DrawerContent
          bg="rgba(29, 21, 54, 0.8)"
          style={{
            backdropFilter: "blur(4px)",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          <DrawerHeader borderBottomWidth="1px">Connect Wallet</DrawerHeader>
          <DrawerBody>
            <Flex flexDir="column" gap="1rem" h="100%">
              <Flex flexDir="column">
                <Text fontSize="xs">Status</Text>
                <Text>
                  <Badge colorScheme={isAuthenticated ? "green" : "red"}>
                    {isAuthenticated ? "Connected" : "Disconnected"}
                  </Badge>
                </Text>
              </Flex>
              <Flex flexDir="column">
                <ButtonGroup gap="4" flexDir="column">
                  {isAuthenticated ? (
                    <>
                      <Flex flexDir="column" gap="1rem">
                        <Flex flexDir="column">
                          <Text fontSize="xs">Address</Text>
                          <Text fontSize="sm">
                            {user && user.get("ethAddress")}
                          </Text>
                        </Flex>
                        <Flex flexDir="column">
                          <Text fontSize="xs" pb="0.5rem">
                            Connected Chain
                            {/* {chainId !== "0x38" ? (
                              <Badge mx="0.5rem" px=".5rem" colorScheme={"red"}>
                                Wrong Chain
                              </Badge>
                            ) : (
                              ``
                            )} */}
                          </Text>
                          <Text>
                            {chainId === "0x38"
                              ? chain && `${chain.name}`
                              : chain && `${chain.name}`}
                            {/* {chain && console.log(chain.name)}
                            {chain && console.log(chain.name)} */}
                          </Text>

                          <Flex gap={".5rem"} direction="column">
                            {chainId !== "0x38" && (
                              <Button
                                marginLeft="0px !important"
                                border="1px solid #4C5199"
                                gap=".5rem"
                                px="2rem"
                                py="1.5rem"
                                justifyContent="space-between"
                                onClick={() => switchChain("0x38")}
                              >
                                Switch to BSC Mainnet
                              </Button>
                            )}
                            {chainId !== "0x1" && (
                              <Button
                                marginLeft="0px !important"
                                border="1px solid #4C5199"
                                gap=".5rem"
                                px="2rem"
                                py="1.5rem"
                                justifyContent="space-between"
                                onClick={() => switchChain("0x1")}
                              >
                                Switch to ETH Mainnet
                              </Button>
                            )}
                            {isTestnet && (
                              <>
                                {/* <Button
                                  marginLeft="0px !important"
                                  border="1px solid #4C5199"
                                  gap=".5rem"
                                  px="2rem"
                                  py="1.5rem"
                                  justifyContent="space-between"
                                  onClick={() => switchChain("0x89")}
                                >
                                  Switch to Polygon Mainnet
                                </Button>
                                <Button
                                  marginLeft="0px !important"
                                  border="1px solid #4C5199"
                                  gap=".5rem"
                                  px="2rem"
                                  py="1.5rem"
                                  justifyContent="space-between"
                                  onClick={() => switchChain("0x61")}
                                >
                                  Switch to BSC Testnet
                                </Button> */}
                              </>
                            )}
                          </Flex>
                        </Flex>
                      </Flex>
                      <Button
                        marginLeft="0px !important"
                        border="1px solid #4C5199"
                        gap=".5rem"
                        px="2rem"
                        py="1.5rem"
                        justifyContent="space-between"
                        onClick={() => handleAuth("logout")}
                      >
                        <Flex gap=".5rem" align="center">
                          Disconnect
                        </Flex>
                      </Button>
                    </>
                  ) : !isAuthenticating ? (
                    <>
                      <Button
                        border="1px solid #4C5199"
                        px="2rem"
                        py="1.5rem"
                        justifyContent="space-between"
                        onClick={handleAuth}
                        disabled={isAuthenticated || isAuthenticating}
                      >
                        <Flex gap=".5rem" align="center">
                          <img src={walletMM} alt="" width="25px" />
                          Metamask
                        </Flex>
                        <Badge colorScheme="green">Popular</Badge>
                      </Button>
                      <Button
                        marginLeft="0px !important"
                        border="1px solid #4C5199"
                        gap=".5rem"
                        px="2rem"
                        py="1.5rem"
                        justifyContent="space-between"
                        onClick={() => handleAuth("walletconnect")}
                        disabled={isAuthenticated || isAuthenticating}
                      >
                        <Flex gap=".5rem" align="center">
                          <img src={walletWC} alt="" width="25px" />
                          Wallet Connect
                        </Flex>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        marginLeft="0px !important"
                        border="1px solid #4C5199"
                        gap=".5rem"
                        px="2rem"
                        py="1.5rem"
                        justifyContent="space-between"
                        disabled={isAuthenticating}
                      >
                        <Flex gap=".5rem" align="center">
                          <Spinner />
                          Wait...
                        </Flex>
                      </Button>
                    </>
                  )}
                </ButtonGroup>
              </Flex>
              <Spacer />
              <Button
                onClick={onClose}
                gap=".3rem"
                border="1px solid #ff6161"
                bg="transparent"
              >
                <img src={CloseIcon} alt="" width="25px" />
                Close
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ConnectWalletDrawer;
