import {
  Flex,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Image,
} from "@chakra-ui/react";
import upArrow from "../assets/faq-up.svg";

function FaqAccordionItem({
  i,
  faqTitle,
  faqContent,
  currentlyOpen,
  isLargerScreen,
}) {
  return (
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
            {faqTitle}
          </Flex>
          <Image
            src={upArrow}
            maxWidth="15px"
            transition="all 0.2s ease"
            transform={i === currentlyOpen ? "rotate(0deg)" : "rotate(180deg)"}
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
        {faqContent}
      </AccordionPanel>
    </AccordionItem>
  );
}

export default FaqAccordionItem;
