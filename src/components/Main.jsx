import { Flex, useMediaQuery } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AsSeenOn from "./AsSeenOn";
import "./Main.scss";
import Hero from "./Hero";
import ProductsAndUtility from "./ProductsAndUtility";
import Airdrops from "./Airdrops";
import WhyDigNFT from "./WhyDigNFT";
import Footer from "./Footer";
import bg from "../assets/bg.png";
import Faqs from "./Faqs";
import MeetTheTeam from "./MeetTheTeam";
import Litepaper from "./Litepaper";
import HowToBuy from "./HowToBuy";
import Tokenomics from "./Tokenomics";
import TokenDetails from "./TokenDetails";
import HowToBuyMini from "./HowToBuyMini";
import MissOut from "./MissOut";
import HeroContent from "./HeroContent";
import Socials from "./Socials";
import Roadmap from "./Roadmap";
import HowToInstall from "./HowToInstall";
import HowToAddBat from "./HowToAddBat";
import HowToTips from "./HowToTips";

function Main({
  login,
  setReRender,
  reRender,
  firebaseApp,
  currentPhase,
  currentPhase_loading,
  currentChainIsSupported,
}) {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  const [isLargerScreen] = useMediaQuery("(min-width: 660px)");

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Flex
              as="main"
              display='block'
              gap="1rem"
              padding={isLargerThan500 ? "2rem" : "3rem .5rem"}
              
              alignItems="center"
              minHeight={"80vh"}
              backgroundImage={bg}
              backgroundPosition={isLargerThan500 ? "right top" : "unset"}
              backgroundSize={"auto 1330"}
              backgroundRepeat={"no-repeat"}
            >
              <Flex 
              as='div'
              flexWrap='wrap'
              marginLeft='0'
              marginRight='0'
              paddingLeft='2rem'
              paddingRight='2rem'
              >
                <Flex
                display='block'
                as='div'
                paddingLeft='0'
                paddingTop='40px'
                flex='0 0 50%'
                maxWidth={isLargerThan500?'66%':'100%'}>
                  <HeroContent/>
                <Hero
                login={login}
                setReRender={setReRender}
                reRender={reRender}
                firebaseApp={firebaseApp}
                currentPhase={currentPhase}
                currentPhase_loading={currentPhase_loading}
                currentChainIsSupported={currentChainIsSupported}
              />

                </Flex>
                <Flex
                display='block'
                as='div'
                paddingLeft='0'
                paddingTop='40px'
                flex='0 0 50%'
                maxWidth={isLargerThan500?'66%':'100%'}>
                  <div className="head-ssc">
                    <Socials/>
                  </div>

                  </Flex>
              
              </Flex>
            
            </Flex>
            <AsSeenOn isLargerScreen={isLargerScreen} />
            <ProductsAndUtility isLargerScreen={isLargerScreen} />

            <Airdrops isLargerScreen={isLargerScreen} />
            <WhyDigNFT isLargerScreen={isLargerScreen} />
            <Roadmap isLargerScreen={isLargerScreen}/>
            <Tokenomics isLargerScreen={isLargerScreen} />
            <TokenDetails isLargerScreen={isLargerScreen} />
            <Litepaper isLargerScreen={isLargerScreen} />
            <HowToBuyMini isLargerScreen={isLargerScreen} />
            <Faqs isLargerScreen={isLargerScreen} />
            <MeetTheTeam isLargerScreen={isLargerScreen} />
            <MissOut
              isLargerScreen={isLargerThan500}
              firebaseApp={firebaseApp}
            />
          </Route>
          <Route path="/how-to-setup-trust-wallet" exact>
            <HowToBuy isLargerScreen={isLargerScreen} />
          </Route>
          <Route path="/how-to-install-trust-wallet" exact>
            <HowToInstall isLargerScreen={isLargerScreen} />
          </Route>
          <Route path="/how-to-add-bats-to-trust-wallet" exact>
            <HowToAddBat isLargerScreen={isLargerScreen} />
          </Route>
          <Route path="/tips-for-keeping-your-trust-wallet-safe" exact>
            <HowToTips isLargerScreen={isLargerScreen}/>

          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default Main;
