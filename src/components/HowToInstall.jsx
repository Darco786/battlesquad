import { Flex, Text,Link as ChakraLink } from "@chakra-ui/react";

function HowToInstall({ isLargerScreen }) {
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
          How to Install Trust Wallet
        </Text>
        <div className="main-top">
          <Text
            color="#000"
            fontSize="16px"
            fontWeight="bolder"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginBottom="1rem"
          >
            A Quick Overview of Trust Wallet Installation
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
            This short guide will show you how to set up Trust Wallet so that
            you can safely buy and store $BATS tokens.
          </Text>
        </div>
        <div>
          <ul className="install-ul">
            <li>
              <p>
                <strong>First, Download the official Trust Wallet app:</strong>{" "}
                The Binance exchange backs a piece of software called Trust
                Wallet that can be used with mobile wallets. You can get the app
                from Google Play or the App Store, or you can find the link to
                get it on the Binance website.{" "}
              </p>
            </li>

            <li>
              <p>
                <strong>Second step: Create a wallet: </strong> The You will be
                asked if you want to set up a new Trust Wallet or if you already
                have one. Click the “Create a Wallet” button to make a new
                wallet.
              </p>
            </li>

            <li>
              <p>
                <strong>Third step: Make a backup Passphrase:</strong> The Write
                down the 12 words that you are given as a backup passphrase.
                Next, type in each of the 12 words by hand in the exact order so
                Trust Wallet knows you wrote down the backup passphrase
                correctly. Fourth step: Add $BATS Token: Once you have set up
                your mobile device’s Trust Wallet, you can now add $BATS tokens
                to it. To do this, go to the menu in the top right corner of the
                screen and choose “Add Custom Token.”
              </p>
            </li>

            <li>
              <p>
                <strong>Fourth step: Add $BATS Token:</strong> Once you have set
                up your mobile device’s Trust Wallet, you can now add $BATS
                tokens to it. To do this, go to the menu in the top right corner
                of the screen and choose “Add Custom Token.”
              </p>
            </li>

            <li>
              <p>
                <strong>
                  Fifth step: Copy and paste the $BATS Contract Address:
                </strong>{" "}
                Here is the address of the contract for the $BATS token. Copy
                and paste it.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <Text
            color="#000"
            fontSize="16px"
            fontWeight="bolder"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginBottom="1rem"
            marginTop={'1rem'}
          >
           $BATS Contract Address: <span className="add-con">0x82A99144149373f96710Dd24be9e6C233264D616</span>
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
           Want to know how to set up Trust Wallet so that you may purchase and/or store $BATS tokens in greater detail? <ChakraLink href="/how-to-setup-trust-wallet" color={'blue'}>Read</ChakraLink> on if so.
          </Text>
        </div>
      </Flex>
    </Flex>
  );
}

export default HowToInstall;
