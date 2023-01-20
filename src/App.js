
import React, { useEffect, useCallback, useState } from "react";
import "./styles/App.scss";
import { ABI_BIGNFT, BSC_NFT_CONTRACT_ADDRESS_PHASE, ETH_NFT_CONTRACT_ADDRESS_PHASE, TOTAL_AMOUNT_TO_RAISE, isTestnet } from "./CONTRACT_DETAILS";

import Header from "./components/Header";
import Main from "./components/Main";
import { Flex, useToast } from "@chakra-ui/react";
import { BSC_COINS_SUPPORTED, ETH_COINS_SUPPORTED } from "./COINS_SUPPORTED";
import { CHAINS_SUPPORTED } from "./CHAINS_SUPPORTED";

// Moralis Start
import { useMoralis, useChain, useWeb3ExecuteFunction, useApiContract } from "react-moralis";

// Moralis END

// FIREBASE - START
import { initializeApp } from "firebase/app";
import { getDatabase, ref, update } from "firebase/database"; //to update value of tokensSold
import { useObject } from "react-firebase-hooks/database";
import Moralis from "moralis-v1";

// import { getAnalytics } from "firebase/analytics";
// FIREBASE - END

// ---------- APP -------------
function App() {
  const [reRender, setReRender] = useState(false);


  const toast = useToast();
  const showErrToast = (errTitle, errMsg) => {
    toast({
      containerStyle: {
        maxWidth: "92vw",
      },
      title: errTitle,
      description: errMsg ? errMsg : "",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  // =======================================================================

  /**
   * START
   * Moralis initial code 
   */
  const {
    authenticate,
    isWeb3Enabled,
    isAuthenticated,
    user,
    enableWeb3,
    isInitialized, chainId,
  } = useMoralis();

  const { fetch: bigFetch } = useWeb3ExecuteFunction();
  const [browserIsEthEnabled, setBrowserIsEthEnabled] = useState();

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      console.log(`🔻🔻🔻🔻🔻 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻 🔻🔻🔻🔻🔻 `);
      console.log('✅Web3 enabled browser!');
      setBrowserIsEthEnabled(true);
    } else {
      console.log('❌Web3 enabled browser!');
      setBrowserIsEthEnabled(false);
    }
  }, [])

  useEffect(() => {
    console.log(`isWeb3Enabled - ${isWeb3Enabled}`);
    if (isWeb3Enabled) return;
    enableWeb3();
  }, [isWeb3Enabled, enableWeb3])

  /**
   * START 
   * MORALIS-DB moralis database CODE
   * 
   * useMoralisQuery -> doesn't work
   *      coz user is null when page is refreshed & 
   *      localStorage is null when just authenticated
   *      that's why using Moralis.query
   */
  /**
   * Code to retrive objects from moralis-db database
   * without hooks
  useEffect(() => {
    if (!isAuthenticated || !isWeb3Enabled || !isInitialized || !user) return;
    console.log(`🐙 userAdd = ${user.get("ethAddress")}`);
    console.log(`🐙🐙 fn 👇`);
    const query = new Moralis.Query("referral_data");
    query.equalTo("userAddress", user?.get("ethAddress"));
    query.find().then((results) => {
      console.log(`🐙 Successfully retrieved - length=${results.length} + ".`);
      for (let i = 0; i < results.length; i++) {
        const object = results[i];
        console.log(`🐙 referral.id :${object.id}`);
        console.log(`🐙 referral.user :${object.get("userAddress")}`);
        console.log(`🐙 referral obj 👇`);
        console.log(object.add("totalReferrals", 1));
      }
    })
    
  }, [isAuthenticated, isInitialized, user, isWeb3Enabled])
   */
  /**
   * Code to save objects from moralis-db database
   * using hooks
  // useEffect(() => {
  //   if (!isAuthenticated || !isInitialized || !user) return;

  //   const data = {
  //     userAddress: user.get("ethAddress"),
  //     hasReferrer: false,
  //   };
  //   save(data, {
  //     onSuccess: console.log(`🧢 - saved data in moralis db`), onError: (e) => {
  //       console.error(e)
  //       console.error(`🧢 - error saving data in moralis db`);
  //     }
  //   });

  // }, [isAuthenticated, isInitialized, save, user])
  */
  /**
    * MORALIS-DB moralis database CODE
    * END 
    */




  /**
   * START - 1
   * Checks if it's a web3 browser - if so - 
   * if web3 not enabled - ask to enable it ONLY IF USER IS Authenticated
   */
  useEffect(() => {
    if ((typeof browserIsEthEnabled + "") === "undefined") return;
    if (isWeb3Enabled) return;
    if (!isAuthenticated) return;

    console.log(`App.js - enableWeb3()`);
    enableWeb3().then((e) => {
      console.log(`Provider 👇`);
      console.log(e);
    }).catch((e) => { console.error(e); })
  }, [browserIsEthEnabled, isWeb3Enabled, enableWeb3, isAuthenticated]);

  // BASIC CHECKS FOR ME-AJ
  useEffect(() => {
    if (!isAuthenticated || !isWeb3Enabled) return;
    if (isAuthenticated) {
      console.log(`✅ isAuthenticated - ${isAuthenticated}`);
    } else {
      console.log(`❌ isAuthenticated - ${isAuthenticated}`);
    }
    if (isWeb3Enabled) {
      console.log(`✅ isWeb3Enabled - ${isWeb3Enabled}`);
    } else {
      console.log(`❌ isWeb3Enabled - ${isWeb3Enabled}`);
    }
  }, [isWeb3Enabled, isAuthenticated])
  /**
   * END - 1
   */

  /**
   * START
   * this runs once - & checks which chain is currently connected
   * sets isOnSupportedChain=true if it's supported chain &
   * set isOnSupportedChain=false if unsupported chain
   */
  const { chain } = useChain();

  const isOnSupportedChain = useCallback((currentChainId) => {
    let currentChainIsSupported = false;
    CHAINS_SUPPORTED.forEach((e) => {
      if (!currentChainIsSupported) {
        if (e.chainID === currentChainId) {
          currentChainIsSupported = true;
        }
      }
    });
    return currentChainIsSupported;
  }, []);

  const [currentChainIsSupported, setCurrentChainIsSupported] = useState();

  useEffect(() => {
    if (!isWeb3Enabled || !chainId) return;
    console.log(
      `🔗🔗Current chainId - ${chainId}\n ---}🔗🔗`
    );
    let t = isOnSupportedChain(chainId);
    console.log(`isOnSupportedChain - ${t}`);
    setCurrentChainIsSupported(t)
  }, [isWeb3Enabled, chainId, isOnSupportedChain]);
  /**
   * this runs once - & checks which chain is currently connected
   * sets isOnSupportedChain=true if it's supported chain &
   * set isOnSupportedChain=false if unsupported chain
   * END
   */


  /**
   * END
   * Moralis initial code 
   */
  // =======================================================================
  /**
   * START
   * FIREBASE
   */
  const firebaseConfig = {
    apiKey: "AIzaSyARJJ1R6Jfb0ffNEJHIevrwlScwW40qqsc",
    authDomain: "battleinfinityio.firebaseapp.com",
    databaseURL: "https://battleinfinityio-default-rtdb.firebaseio.com",
    projectId: "battleinfinityio",
    storageBucket: "battleinfinityio.appspot.com",
    messagingSenderId: "694775551331",
    appId: "1:694775551331:web:a63eda8773e72f371daf56",
    measurementId: "G-7Q5BZRQWKL"
  };
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getDatabase();
  const [currentPhaseDB, currentPhaseDB_loading] = useObject(
    ref(db, "ongoingPhase")
  );
  /**
   * FIREBASE
   * END
   */
  // =======================================================================

  // giving a default value currentPhase=1
  const [currentPhase, setCurrentPhase] = useState("1");
  const [currentPhaseLoading, setCurrentPhaseLoading] = useState(true);

  /**
   * START - 21
   * currentPhaseDB_loading = true
   * means that the value is fetched from firebase
   */
  useEffect(() => {
    setCurrentPhaseLoading(currentPhaseDB_loading);
  }, [currentPhaseDB_loading]);
  // END - 21

  /**
   * START - 22
   * gets value from firebaseDB & sets the value of currentPhase
   */
  useEffect(() => {
    if (currentPhaseLoading) return;
    setCurrentPhase(currentPhaseDB?.val())
  }, [currentPhaseDB, currentPhaseLoading]);
  // END - 22

  useEffect(() => {
    // for my own refernce
    if (currentPhaseLoading) return;
    console.log(`currentPhase - ${currentPhase}`);
  }, [currentPhase, currentPhaseLoading])

  /**
   * START
   * checking allowance & storing in localstorage
   * Runs whenever the chain is switched
   */
  const hasAllowance = useCallback(async (userAddress, spenderContractAddress, tokenAddressToCheck, chainToCheck) => {
    // @todo - I don't really need to check allowance everytime - just once when user authenticates is enough
    let temp_tokenAddressToCheck = tokenAddressToCheck + '';
    temp_tokenAddressToCheck = temp_tokenAddressToCheck.toUpperCase();

    let coinsSupported = chainToCheck === "0x38" ? BSC_COINS_SUPPORTED : ETH_COINS_SUPPORTED;

    let tokenToCheck = '';

    for (let i = 0; i < coinsSupported.length; i++) {
      let t = coinsSupported[i];
      if (!(t.symbol === (isTestnet ? "ETH" : "ETH"))) {
        if (t?.contractAddress.toUpperCase() === temp_tokenAddressToCheck) {
          tokenToCheck = t;
        }
      }
    }
    let ABI_allowance = tokenToCheck?.ABI_allowance;
    console.log(`Checking - ${tokenToCheck.symbol}`);
    // console.log(tokenToCheck.ABI_allowance);

    tokenAddressToCheck = tokenAddressToCheck && tokenAddressToCheck.length > 0 ? tokenAddressToCheck : "";

    // for Moralis.exe.. fns
    let optionsAllowance = {
      abi: ABI_allowance,
      address: tokenAddressToCheck,
      function_name: "allowance",
      chain: chainId,
    };

    // for react-moralis hooks
    // let optionsAllowance = {
    //   abi: ABI_allowance,
    //   contractAddress: tokenAddressToCheck,
    //   functionName: "allowance",
    // };

    if (chainToCheck !== "0x38") {
      if ((tokenToCheck?.symbol?.toUpperCase() === "USDT") || (tokenToCheck?.symbol?.toUpperCase() === "BUSD")) {
        optionsAllowance = {
          ...optionsAllowance,
          params: {
            _owner: userAddress,
            _spender: spenderContractAddress,
          }
        }
      } else if (tokenToCheck?.symbol?.toUpperCase() === "DAI") {
      } else {
        optionsAllowance = {
          ...optionsAllowance,
          params: {
            owner: userAddress,
            spender: spenderContractAddress,
          }
        }
      }
      // console.log(`Checking - ${tokenToCheck?.symbol}`);
    } else {
      optionsAllowance = {
        ...optionsAllowance,
        params: {
          owner: userAddress,
          spender: spenderContractAddress,
        }
      }
    }

    if (`${typeof optionsAllowance.abi}` === "undefined") return false;

    let hasAl = 0;
    //Get token allowace
    const options = {
      //token holder
      owner_address: userAddress,
      spender_address: spenderContractAddress,
      address: tokenAddressToCheck,
      chain: chainId
    };
    let allowance = await Moralis.Web3API.token.getTokenAllowance(options);
    allowance = allowance.allowance;
    // console.log(`Allowance - ${tokenToCheck.symbol} 👇`);
    // console.log(allowance);
    if (allowance !== "0") {
      console.log(`✅-${chainId} allowance - ${tokenToCheck?.symbol} - ${allowance}`);
      hasAl = true;
      return hasAl;
    }
    else {
      hasAl = false;
      console.log(`❌-${chainId}allowance - ${tokenToCheck?.symbol} - ${allowance}`);
      return hasAl;
    }
  }, [chainId])


  useEffect(() => {
    if (!isWeb3Enabled) return;
    if (!isAuthenticated) return;
    let supportedChain = isOnSupportedChain(chainId);
    if (!supportedChain) return;

    // Spender is the NFT token address
    let spenderContractAddress = "";
    let NFT_CONTRACT_ADD = BSC_NFT_CONTRACT_ADDRESS_PHASE[currentPhase];
    if (chainId !== "0x38")
      NFT_CONTRACT_ADD = ETH_NFT_CONTRACT_ADDRESS_PHASE[currentPhase];

    spenderContractAddress = NFT_CONTRACT_ADD;

    console.log(`spenderContractAddress - ${chain?.nativeCurrency.symbol}`);
    console.log(spenderContractAddress);

    let coinsSupported = chainId === "0x38" ? BSC_COINS_SUPPORTED : ETH_COINS_SUPPORTED;
    coinsSupported.forEach((token) => {
      if (token.symbol.toUpperCase() !== chain?.nativeCurrency.symbol.toUpperCase()) {
        // console.log(`reRender(${reRender}) Value changed - so refereshing`);
        // @todo CRASH - sometimes throws error when switching back & forth too many times between supported chains (testnet - BSC & MATIC)

        // checking allowance on BSC Chain

        let spendingTokenContractAddress = "";
        // if (chain?.nativeCurrency.symbol.toUpperCase() === "BNB") spendingTokenContractAddress = token.contractAddress
        // else 
        spendingTokenContractAddress = token.contractAddress;

        hasAllowance(user.get("ethAddress"), spenderContractAddress, spendingTokenContractAddress, chainId).then((hasAl) => {
          window.localStorage.setItem(`${chainId}_${token.symbol.toUpperCase()}allowance`, `${hasAl}`);
        });

      }
    })
    window.localStorage.setItem(`${chainId}_${chain?.nativeCurrency.symbol.toUpperCase()}allowance`, true);
    // tokenAllowance removed when logging out - window.localStorage.removeItem
  }, [chain?.nativeCurrency.symbol, chainId, currentPhase, isAuthenticated, isOnSupportedChain, isWeb3Enabled, hasAllowance, chain?.shortName, user]);
  /**
   * checking allowance & storing in localstorage
   * END
   */


  /**
   * START - 34
   * OLD : Checking how many tokens are left for sale
   * NEW : Checking how much $dollar amount is left to raise
   */

  const [totalAmountRaised, setTotalAmountRaised] = useState("0");
  const updateInDB = useCallback((field, value) => {
    if (!field || !value || value === 0) return;
    console.log(`🔥FirebaseDB - ${field}  - ${value}`);

    if (field === "totalRaised") {
      update(ref(db), { "totalRaised": value }).then(() => {
        console.log(`🔥🟢updateInDB- ${field} - ${value}`);
      }).catch((e) => {
        console.error(e);
        console.log(`🔥🔴dev-failed-updateInDB(field-${field}, value - ${value})`)
      })
    } else if (field === "presaleProgressBar") {
      update(ref(db), { "presaleProgressBar": value }).then(() => {
        console.log(`🔥🟢updateInDB- ${field} - ${value}`);
      }).catch((e) => {
        console.error(e);
        console.log(`🔥🔴dev-failed-updateInDB(field-${field}, value - ${value})`)
      })
    }
    else if (field === "ongoingPhase") {
      console.log("pROVA", value)
      if (value == 1) {
        let xxx = TOTAL_AMOUNT_TO_RAISE.phase1; 
        console.log("E STO QUA 1", xxx)
        update(ref(db), { "totalAmountProgressBar": xxx })
        } else if (value == 2) {
        let xxx = TOTAL_AMOUNT_TO_RAISE.phase1 + TOTAL_AMOUNT_TO_RAISE.phase2;
        console.log("E STO QUA 2", xxx)
        update(ref(db), { "totalAmountProgressBar": xxx })
        } else if (value == 3){
        let xxx = TOTAL_AMOUNT_TO_RAISE.total;
        console.log("E STO QUA 3", xxx)
        update(ref(db), { "totalAmountProgressBar": xxx })
        }
      update(ref(db), { "ongoingPhase": value }).then(() => {
        console.log(`🔥🟢updateInDB- ${field} - ${value}`);
      }).catch((e) => {
        console.error(e);
        console.log(`🔥🔴dev-failed-updateInDB(field-${field}, value - ${value})`)
      })
    }
    else if (field === "/raisedInPhase/1") {
      update(ref(db), { "/raisedInPhase/1": value }).then(() => {
        console.log(`🔥🟢updateInDB- ${field} - ${value}`);
      }).catch((e) => {
        console.error(e);
        console.log(`🔥🔴dev-failed-updateInDB(field-${field}, value - ${value})`)
      })
    }
    else if (field === "/raisedInPhase/2") {
      update(ref(db), { "/raisedInPhase/2": value }).then(() => {
        console.log(`🔥🟢updateInDB- ${field} - ${value}`);
      }).catch((e) => {
        console.error(e);
        console.log(`🔥🔴dev-failed-updateInDB(field-${field}, value - ${value})`)
      })
    }
    else if (field === "/raisedInPhase/3") {
      update(ref(db), { "/raisedInPhase/3": value }).then(() => {
        console.log(`🔥🟢updateInDB- ${field} - ${value}`);
      }).catch((e) => {
        console.error(e);
        console.log(`🔥🔴dev-failed-updateInDB(field-${field}, value - ${value})`)
      })
    }
    ;

  }, [db]);


  const optionsBSC = {
    functionName: "inSaleUSDvalue",
    abi: ABI_BIGNFT,
    chain: "0x38"
  };
  const optionsETH = {
    functionName: "inSaleUSDvalue",
    abi: ABI_BIGNFT,
    chain: isTestnet ? "0x1" : "0x1"
  };

  const options1BSC = {
    ...optionsBSC,
    address: BSC_NFT_CONTRACT_ADDRESS_PHASE[1],
  }
  const options2BSC = {
    ...optionsBSC,
    address: BSC_NFT_CONTRACT_ADDRESS_PHASE[2],
  }
  const options3BSC = {
    ...optionsBSC,
    address: BSC_NFT_CONTRACT_ADDRESS_PHASE[3],
  }
  const options1ETH = {
    ...optionsETH,
    address: ETH_NFT_CONTRACT_ADDRESS_PHASE[1],
  }
  const options2ETH = {
    ...optionsETH,
    address: ETH_NFT_CONTRACT_ADDRESS_PHASE[2],
  }
  const options3ETH = {
    ...optionsETH,
    address: ETH_NFT_CONTRACT_ADDRESS_PHASE[3],
  }

  const {
    runContractFunction: getRaised_bsc1,
    data: dataRaised_bsc1,
  } = useApiContract(options1BSC);
  const {
    runContractFunction: getRaised_bsc2,
    data: dataRaised_bsc2,
  } = useApiContract(options2BSC);
  const {
    runContractFunction: getRaised_bsc3,
    data: dataRaised_bsc3,
  } = useApiContract(options3BSC);

  const {
    runContractFunction: getRaised_eth1,
    data: dataRaised_eth1,
  } = useApiContract(options1ETH);
  const {
    runContractFunction: getRaised_eth2,
    data: dataRaised_eth2,
  } = useApiContract(options2ETH);
  const {
    runContractFunction: getRaised_eth3,
    data: dataRaised_eth3,
  } = useApiContract(options3ETH);


  useEffect(() => {
    if (isInitialized) {
      console.log(`updating getRaised() reRender - ${reRender}`);
      try {
        getRaised_bsc1();
        getRaised_bsc2();
        getRaised_bsc3();
      } catch (error) {
        console.error(error);
        console.error(`dev-getRaised_bsc()(1,2,3) failed`);
      }

      try {
        getRaised_eth1();
        getRaised_eth2();
        getRaised_eth3();
      } catch (error) {
        console.error(error);
        console.error(`dev-getRaised_eth()(1,2,3) failed`);
      }

    }
  }, [isInitialized, reRender, getRaised_eth1, getRaised_eth2, getRaised_eth3, getRaised_bsc1, getRaised_bsc2, getRaised_bsc3]);

  const [raisedInPhase1, setRaisedInPhase1] = useState(0);
  const [raisedInPhase2, setRaisedInPhase2] = useState(0);
  const [raisedInPhase3, setRaisedInPhase3] = useState(0);
  useEffect(() => {
    if (!dataRaised_bsc1 || !dataRaised_bsc2 || !dataRaised_bsc3 || !dataRaised_eth1 || !dataRaised_eth2 || !dataRaised_eth3) return;

    console.log(`refetching totalRaised coz of rerender - ${reRender}`);
    let raisedInPhase1_temp = (TOTAL_AMOUNT_TO_RAISE.phase1 - (dataRaised_bsc1 / Math.pow(10, 18))) + (TOTAL_AMOUNT_TO_RAISE.phase1 - (dataRaised_eth1 / Math.pow(10, 18)));
    raisedInPhase1_temp = raisedInPhase1_temp.toFixed(2);
    // console.log(`🍏/raisedInPhase/1 -> ${raisedInPhase1_temp}`);
    updateInDB("/raisedInPhase/1", `${raisedInPhase1_temp}`)
    setRaisedInPhase1(raisedInPhase1_temp);


    let raisedInPhase2_temp = (TOTAL_AMOUNT_TO_RAISE.phase2 - (dataRaised_bsc2 / Math.pow(10, 18))) + (TOTAL_AMOUNT_TO_RAISE.phase2 - (dataRaised_eth2 / Math.pow(10, 18)));
    raisedInPhase2_temp = raisedInPhase2_temp.toFixed(2);
    // console.log(`🍏🍏/raisedInPhase/2 -> ${raisedInPhase2_temp}`);
    updateInDB("/raisedInPhase/2", `${raisedInPhase2_temp}`)
    setRaisedInPhase2(raisedInPhase2_temp);


    let raisedInPhase3_temp = (TOTAL_AMOUNT_TO_RAISE.phase3 - (dataRaised_bsc3 / Math.pow(10, 18))) + (TOTAL_AMOUNT_TO_RAISE.phase3 - (dataRaised_eth3 / Math.pow(10, 18)));
    raisedInPhase3_temp = raisedInPhase3_temp.toFixed(2);
    // console.log(`🍏🍏🍏/raisedInPhase/3 -> ${raisedInPhase3_temp}`);
    updateInDB("/raisedInPhase/3", `${raisedInPhase3_temp}`)
    setRaisedInPhase3(raisedInPhase3_temp);

    if (raisedInPhase1_temp >= TOTAL_AMOUNT_TO_RAISE.phase1) {
      if (raisedInPhase2_temp >= TOTAL_AMOUNT_TO_RAISE.phase2) {
        updateInDB("ongoingPhase", `3`)
      } else updateInDB("ongoingPhase", `2`)
    } else {
      updateInDB("ongoingPhase", `1`)
    }

    let totalRaised = Number(raisedInPhase1) + Number(raisedInPhase2) + Number(raisedInPhase3);
    updateInDB("totalRaised", `${totalRaised}`)
    setTotalAmountRaised(totalRaised);

  }, [dataRaised_eth1, dataRaised_eth2, dataRaised_eth3, dataRaised_bsc1, updateInDB, dataRaised_bsc2, dataRaised_bsc3, raisedInPhase1, raisedInPhase2, raisedInPhase3, reRender])


  /**
   * END - 34
   * OLD : Checking how many tokens are left for sale
   * NEW : Checking how much $dollar amount is left to raise
   */

  /**
   * START
   * Update /presaleProgressBar in firebaseDB
   */
  const updateProgressBar = useCallback(() => {
    console.log(`reRender[${reRender}] changed, so updating values - (updateProgressBar).`); 
    let percentage = 0;
    if (currentPhase == 1) {
    let percentage = ((totalAmountRaised / (TOTAL_AMOUNT_TO_RAISE.phase1)) * 100).toFixed(1);
    updateInDB("presaleProgressBar", percentage)
    } else if(currentPhase == 2) {
    let percentage = (((totalAmountRaised ) / (TOTAL_AMOUNT_TO_RAISE.phase1 + TOTAL_AMOUNT_TO_RAISE.phase2)) * 100).toFixed(1);
    updateInDB("presaleProgressBar", percentage)
    } else if (currentPhase == 3) {
    let percentage = ((totalAmountRaised / (TOTAL_AMOUNT_TO_RAISE.total)) * 100).toFixed(1);
    updateInDB("presaleProgressBar", percentage)
    }

  }, [updateInDB, totalAmountRaised, reRender]);

  useEffect(() => {
    if (!isWeb3Enabled) return;
    updateProgressBar()
  }, [isWeb3Enabled, updateProgressBar])
  /**
   * END
   * Update /presaleProgressBar in firebaseDB
   */


  const login = async (provider) => {
    if (isAuthenticated) return;

    let signingMessage = `Battle Squad Authentication - Battle Infinity`;
    console.log(`🔐 login(${provider ? provider : "metamask"})`);
    if (!provider) {
      await authenticate({ signingMessage: signingMessage })
        .then(async (user) => {
          // user is undefined when user rejects the auth request
          if (user) {
            console.log("logged in user:", user.attributes.accounts);
            window.localStorage.setItem(
              "NFT_userAddress",
              user.get("ethAddress")
            );
            console.log(`Wallet connected with MM`);
          } else {
            showErrToast("Auth Failed", "User denied Authentication signature.");
            console.log(`isAuthenticated - ${isAuthenticated}.`);
            console.error(`dev-failed "User denied Authentication signature."`);
          }
        }).catch(function (err) {
          console.log(err);
        });
    } else if (provider === "walletconnect") {
      await authenticate({
        provider: "walletconnect",
        chainId: 56,
        signingMessage: signingMessage,
      }).then((user) => {
        if (user) {
          console.log("logged in user:", user.attributes.accounts);
          window.localStorage.setItem(
            "NFT_userAddress",
            user.get("ethAddress")
          );
          console.log(`Wallet connected with MM`);
        } else {
          showErrToast("Auth Failed", "User denied Authentication signature.");
          console.log(`isAuthenticated - ${isAuthenticated}.`);
          console.error(`dev-failed "User denied Authentication signature."`);
        }
      });
      try {
        if (isAuthenticated && user) {
          console.log(`----- USER -----`);
          console.log(user);
        }
      } catch (error) {
        console.log(error);
        console.error(`dev-failed to authenticate with walletconnect`);
      }
    }

  };


  return (
    <Flex className="app" direction="column" background={"#170325"} >

      <Header login={login} currentChainIsSupported={currentChainIsSupported}></Header>

      <Main
        login={login}
        reRender={reRender}
        setReRender={setReRender}
        firebaseApp={firebaseApp}
        currentPhase={currentPhase}
        currentPhase_loading={currentPhaseLoading}
        currentChainIsSupported={currentChainIsSupported}
      ></Main>
    </Flex>
  );
}

export default App;
