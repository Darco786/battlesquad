import { Flex, Text } from "@chakra-ui/react";

function HowToBuy({ isLargerScreen }) {
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
          How to Setup Trust Wallet
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
            Battle Squads Beginner’s Guide on Setting Up Trust Wallet
          </Text>
          <Text color="#000"
            fontSize="16px"
            fontWeight="400"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginTop='0'
            marginBottom="1rem">
            To buy and store $BATS tokens, you need a wallet that can connect to
            the Binance Smart Chain and is known to be secured. 
          </Text>
          <Text
          color="#000"
          fontSize="16px"
          fontWeight="400"
          fontFamily={'"Poppins",sans-serif'}
          lineHeight={"25px"}
          marginTop='0'
          marginBottom="1rem">
          Note: Battle
            Squad is the name of the project, and $BATS is the symbol for our
            token.
          </Text>
          <Text color="#000"
           fontSize="16px"
           fontWeight="400"
           fontFamily={'"Poppins",sans-serif'}
           lineHeight={"25px"}
           marginTop='0'
           marginBottom="1rem">
            We believe that Trust Wallet is the top pick because it gives you
            direct access to decentralised exchanges like Pancakeswap and is
            easy to use. This tutorial guide is for people who have never used
            Trust Wallet before and need a little assistance getting set up.
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
          >
            Step 1 : Download Trust Wallet
          </Text>
          <Text color="#000"
            fontSize="16px"
            fontWeight="400"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginTop='0'
            marginBottom="1rem">
            Downloading Trust Wallet is the first required action. Trust Wallet
            is a mobile application that is supported by Binance, as previously
            indicated. Therefore, the programme must be downloaded to your
            mobile device via Google Play or the App Store.
          </Text>
          <Text color="#000"
           fontSize="16px"
           fontWeight="400"
           fontFamily={'"Poppins",sans-serif'}
           lineHeight={"25px"}
           marginTop='0'
           marginBottom="1rem">
            Binance recommends utilising the download link from its own website
            to ensure that you are getting the authentic Trust Wallet software.
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
          >
            Step 2: Set Up Trust Wallet
          </Text>
          <Text color="#000"
            fontSize="16px"
            fontWeight="400"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginTop='0'
            marginBottom="1rem" >
            Once Trust Wallet has been downloaded, launch the application. The
            next step is to pick “Create New Wallet.”
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
          >
            Step 3: Create PIN
          </Text>
          <Text color="#000"
           fontSize="16px"
           fontWeight="400"
           fontFamily={'"Poppins",sans-serif'}
           lineHeight={"25px"}
           marginTop='0'
           marginBottom="1rem">
            Trust Wallet will now invite you to establish a four- to six-digit
            PIN. This PIN must be entered whenever you wish to access your Trust
            Wallet. For further security, you must perform this action each time
            you exit the wallet’s user interface.
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
          >
            Step 4: Document Backup Password
          </Text>
          <Text color="#000"
           fontSize="16px"
           fontWeight="400"
           fontFamily={'"Poppins",sans-serif'}
           lineHeight={"25px"}
           marginTop='0'
           marginBottom="1rem">
            Your 12-word passphrase, which serves as the private key for your
            Trust Wallet, will then be shown. Therefore, it is essential that
            you record the 12 words precisely and save the matching document in
            a secure spot.
          </Text>
          <Text color="#000"
            fontSize="16px"
            fontWeight="400"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginTop='0'
            marginBottom="1rem">
            Inputting this backup passphrase will be the only way to regain
            access to your Trust Wallet funds if you lose or have your phone
            stolen.
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
          >
            Step 5: Re-Enter Backup Passphrase
          </Text>
          <Text color="#000"
            fontSize="16px"
            fontWeight="400"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginTop='0'
            marginBottom="1rem">
            Trust Wallet must now verify that you entered the backup passphrase
            exactly as instructed, including the sequence of the words.
          </Text>
          <Text color="#000"
            fontSize="16px"
            fontWeight="400"
            fontFamily={'"Poppins",sans-serif'}
            lineHeight={"25px"}
            marginTop='0'
            marginBottom="1rem">
            This indicates that each word must be entered independently and in
            the correct order. Once you’ve input a few letters of a word, Trust
            Wallet will provide you with a list of possible matches.
          </Text>
        </div>
      </Flex>
    </Flex>
  );
}

export default HowToBuy;
