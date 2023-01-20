import {
  Flex,
  Text,
  Image,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import FaqAccordionItem from "./FaqAccordionItem";
import upArrow from "../assets/faq-up.svg";
import { useState } from "react";

function Faqs({ isLargerScreen }) {
  const [currentlyOpen, setCurrentlyOpen] = useState(4);

  return (
    <Flex
      width="full"
      direction={"column"}
      fontFamily={"russo one"}
      padding={isLargerScreen ? "8rem 4rem" : "4rem 1rem"}
      color={"white"}
    >
      <Text
        as="h3"
        textTransform={"uppercase"}
        fontSize={isLargerScreen ? "2.5rem" : "1.5rem"}
      >
        FAQ
      </Text>
      <Text
        fontFamily={`"Poppins", sans-serif`}
        fontWeight={"700"}
        margin={"auto"}
        className="gradient-text"
        width={"full"}
      >
        Frequently Asked Questions
      </Text>
      <Accordion
        allowToggle
        width={"full"}
        maxWidth={"950px"}
        margin="auto"
        marginTop="3rem"
        onChange={(e) => {
          setCurrentlyOpen(e);
        }}
      >
        <AccordionItem
          className="grad-border"
          borderRadius={"1.5rem"}
          padding={isLargerScreen ? "1rem" : ".5rem"}
          fontFamily={`"Poppins", sans-serif`}
          textAlign="left"
          marginBottom={"2rem"}
        >
          <h2>
            <AccordionButton>
              <Flex
                flex="1"
                textAlign="left"
                fontWeight="bold"
                fontSize={isLargerScreen ? "1.75rem" : "1rem"}
              >
                What are the benefits of holding multiple Battle Squad?
              </Flex>

              <Image
                src={upArrow}
                maxWidth="15px"
                transition="all 0.2s ease"
                transform={
                  0 === currentlyOpen ? "rotate(0deg)" : "rotate(180deg)"
                }
              />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            color="#ffffffba"
            fontSize={isLargerScreen ? "1.2rem" : ".8rem"}
            fontWeight={"semibold"}
            paddingLeft={"1.5rem"}
          >
            <OrderedList display={"flex"} flexDirection="column" gap={"1.5rem"}>
              <ListItem>
                Early access to the Battle Squad ecosystem and its features.
              </ListItem>
              <ListItem>
                The opportunity to claim NFTs through the deflationary claim
                model, in which 50% of the total amount of Battle Squad tokens
                used to claim an NFT is burned, potentially increasing the value
                of the remaining tokens.
              </ListItem>
              <ListItem>
                The ability to stake and harvest Battle Squad tokens at a rate
                of 40% APY (annual percentage yield).
              </ListItem>
              <ListItem>
                The option to rent out or hire a manager for your NFTs,
                potentially earning passive income.
              </ListItem>
              <ListItem>
                Access to the Battle Squad-specific marketplace and its deals on
                NFTs and other assets.
              </ListItem>
              <ListItem>
                The ability to unlock premium NFTs using Battle Squad tokens as
                the required minimum amount.
              </ListItem>
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>
        <FaqAccordionItem
          isLargerScreen={isLargerScreen}
          i={1}
          currentlyOpen={currentlyOpen}
          faqTitle="What are NFTs and NFT marketplace?"
          faqContent="Non-fungible tokens (NFTs) are digital assets that represent ownership of a unique item or piece of content. They are stored on a blockchain and cannot be exchanged for other assets on a one-to-one basis. An NFT marketplace is a platform where users can buy and sell NFTs using cryptocurrency. These marketplaces allow users to browse and purchase NFTs created and listed by other users or organizations. Examples of NFT marketplaces include OpenSea, Rarible, and SuperRare."
        />
        <FaqAccordionItem
          i={2}
          currentlyOpen={currentlyOpen}
          faqTitle="How and when can I put NFT on rent?"
          faqContent="To list your NFT for rent on our marketplace, you will need to wait for our token and NFT to be launched. Once your NFT is available, you can list it for rent on our marketplace by setting the rental price and winning reward distribution ratio for users to start earning."
        />
      </Accordion>
    </Flex>
  );
}

export default Faqs;
