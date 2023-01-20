import React from 'react'
import { useState } from 'react'
import './Road.css'
import './scrol.css'
function Roadmap() {
    const [showMore , setShowMore] =useState(false);
    const [showMore2 , setShowMore2] =useState(false);
    const [showMore3 , setShowMore3] =useState(false);
    const [showMore4 , setShowMore4] =useState(false);
    const [showMore5, setShowMore5] =useState(false);
    const handel =()=>{
       
        setShowMore(!showMore)
    }

    const handel2 =()=>{
        setShowMore2(!showMore2)
    }
    const handel3 =()=>{
        setShowMore3(!showMore3)
    }
    const handel4 =()=>{
        setShowMore4(!showMore4)
    }
    const handel5 =()=>{
        setShowMore5(!showMore5)
    }
  return (

    
    <section id="roadmap" class="roadmap-sec">
    <div class="container">
      <div class="sec-top-cont">
        <h2>BATTLE SQUAD ROADMAP</h2>
        <p>The BATTLE SQUAD will deliver more value to our investors in the long term. The value of these NFTs will grow exponentially in the coming years thanks to the big plans the team has in place.</p>
      </div>
      <div class="roadmap-list-outer">
        <div class="roadmap-list ">
          <div class="roadmap-phase-outer">
            <div class="roadmap-phase-outer-inr">
              <div class="roadmap-phase-label">Q4</div>
              <div class="roadmap-phase-status">2022</div>
            </div>
          </div>
          <div class="roadmap-phase-cont without-more-desc">
                <div class="roadmap-desc">
                  <ul>
                    <li>BATTLE SQUAD Conceptualization</li>
                    <li>Smart Contract Test-net</li>
                    <li>Website UI and UX building</li>
                    <li>Frontend and Backend Integration</li>
                    <li>Main-net Smart Contract Launch</li>
                    <li>$BATS Token Subscription Starts</li>
                  </ul>
                </div>
                <div className={showMore?'roadmap-desc-more-outer roadmap-desc-more-mbl desc-more-active ':"roadmap-desc-more-outer roadmap-desc-more-mbl"}>
                  <div class="roadmap-desc-more-less-label">
                    <span class="desc-more-label" onClick={handel}>See More</span>
                    <span class="desc-less-label" onClick={handel}>See Less</span>
                  </div>
                  <div class="roadmap-desc-more-desc" style={{display:showMore?'block':'none'}}>
                    <div class="roadmap-desc-mbl">
                      <ul>
                        <li>BATTLE SQUAD Conceptualization</li>
                        <li>Smart Contract Test-net</li>
                        <li>Website UI and UX building</li>
                        <li>Frontend and Backend Integration</li>
                        <li>Main-net Smart Contract Launch</li>
                        <li>$BATS Token Subscription Starts</li>
                      </ul>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <div class="roadmap-list ">
          <div class="roadmap-phase-outer">
            <div class="roadmap-phase-outer-inr">
              <div class="roadmap-phase-label">Q1</div>
              <div class="roadmap-phase-status">2023</div>
            </div>
          </div>
          <div class="roadmap-phase-cont without-more-desc">
                <div class="roadmap-desc">
                  <ul>
                    <li>Strategy Building</li>
                    <li>Marketing and PR</li>
                    <li>Fantasy Sports First Glimpse</li>
                    <li>Marketplace First Glimpse</li>
                    <li>Battle Squad Partnership announcement</li>
                    <li>$BATS Token Launch</li>
                    <li>$BATS Staking Launch</li>
                    <li>Cross Chain Implementation</li>
                    <li>$BATS token to NFT router Dashboard Launch</li>
                    <li>First NFT Collectibles Drop</li>
                  </ul>
                </div>
                <div className={showMore2?'roadmap-desc-more-outer roadmap-desc-more-mbl desc-more-active ':"roadmap-desc-more-outer roadmap-desc-more-mbl"}>
                  <div class="roadmap-desc-more-less-label">
                    <span class="desc-more-label" onClick={handel2}>See More</span>
                    <span class="desc-less-label" onClick={handel2}>See Less</span>
                  </div>
                  <div class="roadmap-desc-more-desc" style={{display:showMore2?'block':'none'}}>
                    <div class="roadmap-desc-mbl">
                      <ul>
                        <li>Strategy Building</li>
                        <li>Marketing and PR</li>
                        <li>Fantasy Sports First Glimpse</li>
                        <li>Marketplace First Glimpse</li>
                        <li>Battle Squad Partnership announcement</li>
                        <li>$BATS Token Launch</li>
                        <li>$BATS Staking Launch</li>
                        <li>Cross Chain Implementation</li>
                        <li>$BATS token to NFT router Dashboard Launch</li>
                        <li>First NFT Collectibles Drop</li>
                      </ul>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <div class="roadmap-list ">
          <div class="roadmap-phase-outer">
            <div class="roadmap-phase-outer-inr">
              <div class="roadmap-phase-label">Q2</div>
              <div class="roadmap-phase-status">2023</div>
            </div>
          </div>
          <div class="roadmap-phase-cont without-more-desc">
                <div class="roadmap-desc">
                  <ul>
                    <li>Second NFT collectibles Drop</li>
                    <li>$BATS Harvesting Launch</li>
                    <li>$BATS Specific Marketplace Launch</li>
                    <li>IBAT Premier League Launch</li>
                    <li>Exchange Listing</li>
                  </ul>
                </div>
                <div className={showMore3?'roadmap-desc-more-outer roadmap-desc-more-mbl desc-more-active ':"roadmap-desc-more-outer roadmap-desc-more-mbl"}>
                  <div class="roadmap-desc-more-less-label">
                    <span class="desc-more-label" onClick={handel3}>See More</span>
                    <span class="desc-less-label" onClick={handel3}>See Less</span>
                  </div>
                  <div class="roadmap-desc-more-desc" style={{display:showMore3?'block':'none'}}>
                    <div class="roadmap-desc-mbl">
                      <ul>
                        <li>Second NFT collectibles Drop</li>
                        <li>$BATS Harvesting Launch</li>
                        <li>$BATS Specific Marketplace Launch</li>
                        <li>IBAT Premier League Launch</li>
                        <li>Exchange Listing</li>
                      </ul>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <div class="roadmap-list ">
          <div class="roadmap-phase-outer">
            <div class="roadmap-phase-outer-inr">
              <div class="roadmap-phase-label">Q3</div>
              <div class="roadmap-phase-status">2023</div>
            </div>
          </div>
          <div class="roadmap-phase-cont without-more-desc">
                <div class="roadmap-desc">
                  <ul>
                    <li>Game NFT Collectibles Sneak-peak</li>
                    <li>Community events</li>
                    <li>Game NFT Creation</li>
                    <li>First Game Glimpse</li>
                  </ul>
                </div>
                <div className={showMore4?'roadmap-desc-more-outer roadmap-desc-more-mbl desc-more-active ':"roadmap-desc-more-outer roadmap-desc-more-mbl"}>
                  <div class="roadmap-desc-more-less-label">
                    <span class="desc-more-label" onClick={handel4}>See More</span>
                    <span class="desc-less-label" onClick={handel4}>See Less</span>
                  </div>
                  <div class="roadmap-desc-more-desc" style={{display:showMore4?'block':'none'}}>
                    <div class="roadmap-desc-mbl">
                      <ul>
                        <li>Game NFT Collectibles Sneak-peak</li>
                        <li>Community events</li>
                        <li>Game NFT Creation</li>
                        <li>First Game Glimpse</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="roadmap-list ">
          <div class="roadmap-phase-outer">
            <div class="roadmap-phase-outer-inr">
              <div class="roadmap-phase-label">Q4</div>
              <div class="roadmap-phase-status">2023</div>
            </div>
          </div>
          <div class="roadmap-phase-cont without-more-desc">
                <div class="roadmap-desc">
                  <ul>
                    <li>Game NFT Collectibles Drop</li>
                    <li>NFT Game Beta testing</li>
                    <li>NFT Game Launch</li>
                  </ul>
                </div>
                <div className={showMore5?'roadmap-desc-more-outer roadmap-desc-more-mbl desc-more-active ':"roadmap-desc-more-outer roadmap-desc-more-mbl"}>
                  <div class="roadmap-desc-more-less-label">
                    <span class="desc-more-label" onClick={handel5}>See More</span>
                    <span class="desc-less-label" onClick={handel5}>See Less</span>
                  </div>
                  <div class="roadmap-desc-more-desc" style={{display:showMore5?'block':'none'}}>
                    <div class="roadmap-desc-mbl">
                   
                      <ul>
                        <li>Game NFT Collectibles Drop</li>
                        <li>NFT Game Beta testing</li>
                        <li>NFT Game Launch</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Roadmap