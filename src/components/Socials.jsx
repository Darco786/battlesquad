import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import fb from "../assets/social-fb.svg";
import tg from "../assets/social-tg.svg";
import tw from "../assets/social-twitter.svg";
import ig from "../assets/social-ig.svg";
import yt from "../assets/social-yt.svg";
import dc from "../assets/social-discord.svg";

function Socials() {
  return (
    <Flex gap={"1rem"}>
      <ChakraLink
        href="https://t.me/battleinfinity"
        isExternal
        position={"relative"}
        background="#ffffff10"
        borderRadius={"md"}
      >
        <Image src={tg} />
      </ChakraLink>
      <ChakraLink
        href="https://discord.com/invite/mnQZ5Tuz"
        isExternal
        position={"relative"}
        background="#ffffff10"
        borderRadius={"md"}
      >
        <Image src={dc} />
      </ChakraLink>
      <ChakraLink
        href="https://twitter.com/ibatofficial"
        isExternal
        position={"relative"}
        background="#ffffff10"
        borderRadius={"md"}
      >
        <Image src={tw} />
      </ChakraLink>
      <ChakraLink
        href="https://www.youtube.com/channel/UCU9C0MLCexdjtF2h0_ErcOg"
        isExternal
        position={"relative"}
        background="#ffffff10"
        borderRadius={"md"}
      >
        <Image src={yt} />
      </ChakraLink>
      <ChakraLink
        href=""
        isExternal
        position={"relative"}
        background="#ffffff10"
        borderRadius={"md"}
      >
        <Image src={tg} />
      </ChakraLink>
      <ChakraLink
        href="https://www.instagram.com/battleinfinityofficial/?hl=en"
        isExternal
        position={"relative"}
        background="#ffffff10"
        borderRadius={"md"}
      >
        <Image src={ig} />
      </ChakraLink>
      <ChakraLink
        href="https://www.facebook.com/battleinfinityofficial/"
        isExternal
        position={"relative"}
        background="#ffffff10"
        borderRadius={"md"}
      >
        <Image src={fb} />
      </ChakraLink>
    </Flex>
  );
}

export default Socials;
