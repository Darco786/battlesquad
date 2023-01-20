import { Box, Text, Flex, Image } from "@chakra-ui/react";
import picTokenomics from "../assets/tokenomics.png";
import bgToken from "../assets/bgtoken.jpg";
import tbsc from "../assets/t-bsc.svg";
import teth from "../assets/t-eth.png";
import tdollar from "../assets/t-dollar.svg";
import tsymbol from "../assets/t-symbol.svg";
import TokenItem from "./TokenItem";
import { NFT_TOKEN_SYMBOL } from "../CONTRACT_DETAILS";

function Tokenomics({ isLargerScreen }) {
  return (
    <section id="token">
    <Flex
    
      backgroundRepeat="no-repeat"
      backgroundImage={bgToken}
      backgroundSize={"cover"}
      backgroundPosition="center top"
      width="full"
      direction={"column"}
      fontFamily={"russo one"}
      padding={isLargerScreen ? "8rem 4rem" : "4rem"}
      color={"white"}
    >
      <Text
        as="h3"
        textTransform={"uppercase"}
        fontSize={isLargerScreen ? "2.5rem" : "1.5rem"}
      >
        BATTLE SQUAD TOKENOMICS
      </Text>
      <Box
        maxWidth={"100%"}
        margin="auto"
        position={"relative"}
        marginBottom="2rem"
      >
        <Image src={picTokenomics}></Image>
        <Flex top="35px" right="auto" left="-40px" position={"absolute"}>
          <Text
            as={"h4"}
            fontFamily={`"Russo One", sans-serif`}
            fontSize={isLargerScreen ? "1.5rem" : "1rem"}
            position={"relative"}
            maxWidth="150px"
            lineHeight={isLargerScreen ? "" : "1rem"}
            _before={{
              display: isLargerScreen ? "" : "none",
              content: '""',
              height: "2px",
              width: "30px",
              right: "-23px",
              top: "47px",
              borderRadius: "3rem",
              background: "#FF6A57",
              position: "absolute",
              transform: "rotate(-127deg)",
            }}
          >
            20%
            <Text
              fontFamily={`"Poppins", sans-serif`}
              opacity="0.7"
              width={"full"}
              fontSize={isLargerScreen ? "1rem" : ".75rem"}
              display={"inline-block"}
              fontWeight={"700"}
              as={"span"}
              marginTop={isLargerScreen ? "" : "-1"}
              _before={{
                display: isLargerScreen ? "" : "none",
                content: '""',
                position: "absolute",
                top: "35px",
                background: "#FF6A57",
                borderRadius: "3rem",
                height: "2px",
                width: "105px",
                left: "17px",
              }}
              _after={{
                display: isLargerScreen ? "" : "none",
                content: '""',
                position: "absolute",
                top: "32px",
                background: "#FF6A57",
                height: "8px",
                width: "8px",
                borderRadius: "50%",
                left: "10px",
                right: "auto",
              }}
            >
              Liquidity
            </Text>
          </Text>
        </Flex>
        <Flex top="35px" right="-35px" position={"absolute"}>
          <Text
            as={"h4"}
            fontFamily={`"Russo One", sans-serif`}
            fontSize={isLargerScreen ? "1.5rem" : "1rem"}
            position={"relative"}
            maxWidth="150px"
            lineHeight={isLargerScreen ? "" : "1rem"}
            _before={{
              display: isLargerScreen ? "" : "none",
              content: '""',
              height: "2px",
              width: "30px",
              left: "-8px",
              top: "45px",
              borderRadius: "3rem",
              background: "#FF6A57",
              position: "absolute",
              transform: "rotate(-44deg)",
            }}
          >
            25%
            <Text
              fontFamily={`"Poppins", sans-serif`}
              opacity="0.7"
              width={"full"}
              fontSize={isLargerScreen ? "1rem" : ".75rem"}
              display={"inline-block"}
              fontWeight={"700"}
              as={"span"}
              marginTop={isLargerScreen ? "" : "-1"}
              _before={{
                display: isLargerScreen ? "" : "none",
                content: '""',
                position: "absolute",
                top: "35px",
                background: "#FF6A57",
                borderRadius: "3rem",
                height: "2px",
                width: "105px",
                left: "17px",
              }}
              _after={{
                display: isLargerScreen ? "" : "none",
                content: '""',
                position: "absolute",
                top: "32px",
                background: "#FF6A57",
                height: "8px",
                width: "8px",
                borderRadius: "50%",

                right: "0px",
              }}
            >
              Reserves
            </Text>
          </Text>
        </Flex>

        {/* 3. Rewards */}
        <Flex bottom="40%" right="-18%" position={"absolute"}>
          <Text
            as={"h4"}
            fontFamily={`"Russo One", sans-serif`}
            fontSize={isLargerScreen ? "1.5rem" : "1rem"}
            position={"relative"}
            maxWidth="150px"
            lineHeight={isLargerScreen ? "" : "1rem"}
            _before={{
              display: isLargerScreen ? "" : "none",
              content: '""',
              height: "2px",
              width: "30px",
              left: "-8px",
              top: "45px",
              borderRadius: "3rem",
              background: "#FF6A57",
              position: "absolute",
              transform: "rotate(-44deg)",
            }}
          >
            12%
            <Text
              fontFamily={`"Poppins", sans-serif`}
              opacity="0.7"
              width={"full"}
              fontSize={isLargerScreen ? "1rem" : ".75rem"}
              display={"inline-block"}
              fontWeight={"700"}
              as={"span"}
              marginTop={isLargerScreen ? "" : "-1"}
              _before={{
                display: isLargerScreen ? "" : "none",
                content: '""',
                position: "absolute",
                top: "35px",
                background: "#FF6A57",
                borderRadius: "3rem",
                height: "2px",
                width: "105px",
                left: "17px",
              }}
              _after={{
                display: isLargerScreen ? "" : "none",
                content: '""',
                position: "absolute",
                top: "32px",
                background: "#FF6A57",
                height: "8px",
                width: "8px",
                borderRadius: "50%",
                right: "-9px",
              }}
            >
              Rewards
            </Text>
          </Text>
        </Flex>

        {/* 4. Airdrops */}
        <Flex bottom="1%" right="1%" position={"absolute"}>
          <Text
            as={"h4"}
            fontFamily={`"Russo One", sans-serif`}
            fontSize={isLargerScreen ? "1.5rem" : "1rem"}
            position={"relative"}
            maxWidth="150px"
            lineHeight={isLargerScreen ? "" : "1rem"}
            _before={{
              display: isLargerScreen ? "" : "none",
              content: '""',
              height: "2px",
              width: "30px",
              left: "-8px",
              top: "25px",
              borderRadius: "3rem",
              background: "#FF6A57",
              position: "absolute",
              transform: "rotate(44deg)",
            }}
          >
            15%
            <Text
              fontFamily={`"Poppins", sans-serif`}
              opacity="0.7"
              width={"full"}
              fontSize={isLargerScreen ? "1rem" : ".75rem"}
              display={"inline-block"}
              fontWeight={"700"}
              as={"span"}
              marginTop={isLargerScreen ? "" : "-1"}
              _before={{
                display: isLargerScreen ? "" : "none",
                content: '""',
                position: "absolute",
                top: "35px",
                background: "#FF6A57",
                borderRadius: "3rem",
                height: "2px",
                width: "105px",
                left: "17px",
              }}
              _after={{
                display: isLargerScreen ? "" : "none",
                content: '""',
                position: "absolute",
                top: "32px",
                background: "#FF6A57",
                height: "8px",
                width: "8px",
                borderRadius: "50%",
                right: "-9px",
              }}
            >
              Airdrops
            </Text>
          </Text>
        </Flex>

        {/* 5. TOKEN Sales */}
        <Flex bottom="1%" left="-2%" position={"absolute"}>
          <Text
            as={"h4"}
            fontFamily={`"Russo One", sans-serif`}
            fontSize={isLargerScreen ? "1.5rem" : "1rem"}
            position={"relative"}
            maxWidth="150px"
            lineHeight={isLargerScreen ? "" : "1rem"}
            _before={{
              display: isLargerScreen ? "" : "none",
              content: '""',
              height: "2px",
              width: "30px",
              right: "-5px",
              top: "25px",
              borderRadius: "3rem",
              background: "#FF6A57",
              position: "absolute",
              transform: "rotate(-44deg)",
            }}
          >
            28%
            <Text
              fontFamily={`"Poppins", sans-serif`}
              opacity="0.7"
              width={"full"}
              fontSize={isLargerScreen ? "1rem" : ".75rem"}
              display={"inline-block"}
              fontWeight={"700"}
              as={"span"}
              marginTop={isLargerScreen ? "" : "-1"}
              _before={{
                display: isLargerScreen ? "" : "none",
                content: '""',
                position: "absolute",
                top: "35px",
                background: "#FF6A57",
                borderRadius: "3rem",
                height: "2px",
                width: "105px",
                left: "17px",
              }}
              _after={{
                display: isLargerScreen ? "" : "none",
                content: '""',
                position: "absolute",
                top: "32px",
                background: "#FF6A57",
                height: "8px",
                width: "8px",
                borderRadius: "50%",
                left: "9px",
              }}
            >
              {NFT_TOKEN_SYMBOL} Sale
            </Text>
          </Text>
        </Flex>

        {/* END */}
      </Box>
      <Flex wrap={"wrap"} margin="auto" gap={"1rem"} justifyContent="center">
        <TokenItem
          picSrc={tbsc}
          token="bsc"
          tokenName={"Binance Smart Chain"}
        />
        <TokenItem picSrc={teth} token="eth" tokenName={"Ethereum Network"} />
        <TokenItem picSrc={tdollar} token="20M" tokenName={"Total Sale"} />
        <TokenItem
          picSrc={tsymbol}
          token={NFT_TOKEN_SYMBOL}
          tokenName={"Battle Squad"}
        />
      </Flex>
    </Flex>
    </section>
  );
}

export default Tokenomics;
