import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function HeroContent() {
  return (
    <Flex as="div" display="block" textAlign="initial" paddingBottom='20px'>
      <Text as="h1" className="head-text">
        BATTLE SQUAD
      </Text>
      <Text as="h3" className="head-p">
        Activate the Gamification
      </Text>

      <Text as="p" className="head-p2">
        Battle Squad ($BATS) is the key to unlock and get early access to NFTs,
        Fantasy Sports and Other exciting Games.
      </Text>
      <div>
        <a href="https://drive.google.com/file/d/1YCZiUIx2rgCfAH_ZFgcIEhRu_Ehgu6ot/view?usp=sharing" target='_blank' rel="noreferrer" className="light-paper">Light Paper</a>
      </div>
    </Flex>
  );
}

export default HeroContent;
