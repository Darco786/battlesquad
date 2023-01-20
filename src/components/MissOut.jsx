import { Flex, Text, Image } from "@chakra-ui/react";
import Socials from "./Socials";
import ProgressBar2 from "./ProgressBar2";

import timer from "../assets/timer.png";

function MissOut({ isLargerScreen, firebaseApp }) {
  return (
    <Flex
      direction={"column"}
      alignItems="center"
      width="full"
      fontFamily={"russo one"}
      padding={isLargerScreen ? "8rem 4rem" : "4rem 1rem"}
      gap="1rem"
    >
      <Flex alignItems={"center"}>
        <Image src={timer} width="3.5rem" height={"max-content"} />
        <Text fontSize={isLargerScreen ? "3rem" : "1.5rem"}>
          DON'T MISS OUT!
        </Text>
      </Flex>
      <ProgressBar2
        firebaseApp={firebaseApp}
        isLargerThan500={isLargerScreen}
      ></ProgressBar2>
      <Text>Visit us on our social channels!</Text>
      <Socials />
    </Flex>
  );
}

export default MissOut;
