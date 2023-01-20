import { Flex, Text } from "@chakra-ui/react";

function HowToTips({ isLargerScreen }) {
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
          Tips for Keeping Your Trust Wallet Safe
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
            After adding $BATS to your Trust Wallet, you must take all
            reasonable measures to safeguard your digital cash.
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
            After all, internet thieves are growing more clever, and stealing
            bitcoins is typically one of their primary objectives.
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
            As a result, we will now discuss some good tips for safeguarding
            your Trust Wallet and $BATS tokens.
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
            Tip 1 : Create a solid password for your screen lock
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
            We cannot stress enough the need of configuring a strong screen-lock
            password on the mobile device on which the Trust Wallet software is
            installed.
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
            Consequently, if someone obtains access to your device, this will be
            the first line of defence.
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
            This is especially important if your phone is lost or stolen, as the
            thief must know your screen-lock password in order to access your
            Trust Wallet application.
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
            The more complex and lengthy your screen-lock password, the better.
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
            Tip 2 : Use a PIN that cannot be guessed.
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
            It goes without saying that you should never use a generic, basic
            password for your Trust Wallet app, such as ‘0000’ or ‘1234’
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
            Therefore, if someone acquires access to your smartphone and
            subsequently cracks your screen-lock password, they have a high
            likelihood of gaining access to your Trust Wallet account.
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
            Trust Wallet allows you to enter a PIN of between 4 and 6 digits at
            initial setup. Maximum security is suggested with a 6-digit PIN.
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
            Tip 3: Avoid Using Links
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
            Malware is one of the most effective methods for remote attacks on cryptocurrency wallets.
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
            And a common way for this to occur is if you accidentally click on a malicious link generated by the malicious actor.
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
            When this occurs, the hacker has a significant chance of acquiring remote access to your Trust Wallet and subsequently stealing your digital assets.
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
            With this in mind, you should avoid clicking on links from unreliable sources.
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
          Tip 4 : Remember always the Admin Battle Squad team will never contact you first.
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
          In continuation of the last piece of advice, malicious actors commonly utilise the Telegram app to deceive individuals into believing they are communicating with the real Battle squad administrator.
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
            In many cases, this will be performed by sending a direct message to $BATStoken holders while claiming to be a part of the admin team.
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
            No official Battle squad team member will ever initiate direct communication with you. Ban and report the abusive Telegram account if you get one.
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
           Tip 5 : Never Tell Anyone Your 12-Word Backup Password
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
            As stated earlier, your 12-word unique backup passphrase is your Trust Wallet private key.
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
            Therefore, if someone obtains these 12 words in the precise order, they can get remote access to your Trust Wallet account. As a consequence, they will be able to withdraw the total amount of your digital asset.
          </Text>
          <Text
           color="#000"
           fontSize="16px"
           fontWeight="400"
           fontFamily={'"Poppins",sans-serif'}
           lineHeight={"25px"}
           marginTop="0"
           marginBottom="1rem">
          Therefore, it is imperative that you never disclose your Trust Wallet backup pass to anybody, under any circumstances.
          </Text>
        </div>
      </Flex>
    </Flex>
  );
}

export default HowToTips;
