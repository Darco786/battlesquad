import { Text, Flex } from "@chakra-ui/react";
import t1 from "../assets/team1.png";
import t2 from "../assets/team2.png";
import t3 from "../assets/team3.png";
import t4 from "../assets/team4.png";
import t5 from "../assets/team5.png";
import t6 from "../assets/team6.png";
import t7 from "../assets/team7.png";
import TeamMember from "./TeamMember";
import teamBg from "../assets/team-bg.jpg";

function MeetTheTeam({ isLargerScreen }) {
  return (
    <Flex
      backgroundImage={isLargerScreen ? teamBg : "none"}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundPosition="center top"
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
        Meet the team
      </Text>
      <Flex
        flexWrap={"wrap"}
        gap="3rem"
        justifyContent={"center"}
        fontFamily='"Poppins", sans-serif'
        fontWeight="bold"
        margin={"auto"}
        marginTop={"4rem"}
        maxWidth={"1200px"}
      >
        <TeamMember
          pic={t1}
          name="Suresh Joshi"
          title="Co-founder"
          linkedIn="https://www.linkedin.com/in/suresh-joshi-61b3998"
        />
        <TeamMember
          pic={t2}
          name="JAGJEET JENA"
          title="CEO"
          linkedIn={"https://www.linkedin.com/in/jagjeet-jena-a48452163"}
        />
        <TeamMember
          pic={t3}
          name="VINAY CHHABRA"
          title="CTO"
          linkedIn={"https://www.linkedin.com/in/vinay-chhabra-631665128"}
        />
        <TeamMember
          pic={t4}
          name="CHITRA MOKTALI"
          title="HEAD OF OPERATIONS"
          linkedIn={"https://www.linkedin.com/in/chitra-moktali-76078294"}
        />
        <TeamMember
          pic={t5}
          name="Ajeet Gill"
          title="LEAD DEVELOPER"
          linkedIn={"https://www.linkedin.com/in/ajeet-gill/"}
        />
        <TeamMember
          pic={t6}
          name="ABHINAY CHHABRA"
          title="GRAPHIC DESIGNER"
          linkedIn={"https://www.linkedin.com/in/abhi-chhabra-89127a243/"}
        />
        <TeamMember
          pic={t7}
          name="RISHITA MITRA"
          title="CONTENT WRITER"
          linkedIn={"https://www.linkedin.com/in/the-rishita-mitra-15b4b11ba"}
        />
      </Flex>
    </Flex>
  );
}

export default MeetTheTeam;
