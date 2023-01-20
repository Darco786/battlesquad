import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";

function HowToAddBat({ isLargerScreen }) {
  return (
    <Flex
      background={"white"}
      display="block"
      textAlign={"initial"}
      padding="2rem 4rem"
      minHeight="80vh"
    >
      <Flex display="block" textAlign={"initial"} maxWidth={"1100px"}>
        <Text fontFamily={"russo one"} fontSize={"32px"} color="#000">
          {" "}
          How to Add $BATS to Trust Wallet
        </Text>
        <div className="main-top">
          <Text
            color="#000"
            fontSize="16px"
            fontWeight="400"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginTop="0"
            marginBottom="1rem"
          >
            The next step is to include $BATS into your Trust Wallet’s user
            interface. To do so, you must first click the app’s logo in the
            upper-right corner. This displays a list of tokens that have been
            automatically added to the Trust Wallet.
          </Text>
          <Text
            color="#000"
            fontSize="16px"
            fontWeight="400"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginTop="0"
            marginBottom="1rem"
          >
            Scroll to the very bottom of the list and click on ‘Add Custom Token.’ Next, you may discover that the default network is Ethereum.
          </Text>

          <Text
            color="#000"
            fontSize="16px"
            fontWeight="400"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginTop="0"
            marginBottom="1rem"
          >
            Because $BATS operates on the Binance Smart Chain, this must be modified.
          </Text>

          <Text
            color="#000"
            fontSize="16px"
            fontWeight="400"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginTop="0"
            marginBottom="1rem"
          >
           The required contract address, which can be seen below, must then be copied into the Trust Wallet in order for it to locate $BATS.
          </Text>

          <Text
            color="#000"
            fontSize="16px"
            fontWeight="400"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginTop="0"
            marginBottom="1rem"
          >
          The BNB Smart Chain network
          </Text>
        </div>

        <div>
          <Text
            color="#000"
            fontSize="16px"
            fontWeight="bolder"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginBottom="1rem"
            marginTop={"1rem"}
          >
            $BATS Contract Address:{" "}
            <span className="add-con">
              0x82A99144149373f96710Dd24be9e6C233264D616
            </span>
          </Text>
          <Text
            color="#000"
            fontSize="16px"
            fontWeight="bolder"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginBottom="1rem"
            marginTop={"1rem"}
          >
            Name:{" "}
            <span className="add-con">
            Battle squad
            </span>
          </Text>

          <Text
            color="#000"
            fontSize="16px"
            fontWeight="bolder"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginBottom="1rem"
            marginTop={"1rem"}
          >
            Symbol:{" "}
            <span className="add-con">
            $BATS 
            </span>
          </Text>
          <Text
            color="#000"
            fontSize="16px"
            fontWeight="bolder"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginBottom="1rem"
            marginTop={"1rem"}
          >
           Decimals: {" "}
            <span className="add-con">
            9
            </span>
          </Text>
          <Text
            color="#000"
            fontSize="16px"
            fontWeight="bolder"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginBottom="1rem"
            marginTop={"1rem"}
          >
           Block Explorer URL{" "}
            <span className="add-con">
            <ChakraLink href="https://bscscan.com" color={'blue'}>
            https://bscscan.com

            </ChakraLink>
            </span>
          </Text>
          <Text
            color="#000"
            fontSize="16px"
            fontWeight="400"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginTop="0"
            marginBottom="1rem"
          >
           It is crucial to validate the contract address again via the Battle squad Telegram channel.
          </Text>
          <Text
            color="#000"
            fontSize="16px"
            fontWeight="400"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginTop="0"
            marginBottom="1rem"
          >
    This method guarantees that you are entering the correct address. Details about the $BATS contract, like the name, symbol, and number of decimals, will now be put into the empty fields.
          </Text>

          <Text
            color="#000"
            fontSize="16px"
            fontWeight="400"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginTop="0"
            marginBottom="1rem"
          >
         The Trust Wallet has been successfully deployed! If you have not yet acquired $BATS, you can do so at presale.battleinfinity.io.
          </Text>

          <Text
            color="#000"
            fontSize="16px"
            fontWeight="400"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginTop="0"
            marginBottom="1rem"
          >
         Trust Wallet interacts with presale.battleinfinity.io, enabling you to purchase and store $BATS tokens in a single application.
          </Text>
        </div>
      </Flex>
    </Flex>
  );
}

export default HowToAddBat;
