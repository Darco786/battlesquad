import { Flex, Heading, Text } from "@chakra-ui/react";
import BuyButton from "./BuyButton";
import CoinSelector from "./CoinSelector";
import InputAmount from "./InputAmount";
import {
  isTestnet,
  BSC_NFT_CONTRACT_ADDRESS_PHASE,
  ETH_NFT_CONTRACT_ADDRESS_PHASE,
  ABI_BIGNFT,
  NFT_TOKEN_SYMBOL,
  IBAT_HARDCAP_IN_USD,
  BIGNFT_PRICE_USD_PHASE_ONE,
  BIGNFT_PRICE_USD_PHASE_TWO,
  BIGNFT_PRICE_USD_PHASE_THREE,
  BUYING_WITH_IBAT_DISCOUNT,
  SLIPPAGE_FOR_BNB,
  NFT_TOKEN_DECIMALS,
} from "../CONTRACT_DETAILS";
import { BSC_COINS_SUPPORTED, ETH_COINS_SUPPORTED } from "../COINS_SUPPORTED";
import { useState, useCallback, useEffect } from "react";
import {
  useMoralis,
  useChain,
  useERC20Balances,
  useNativeBalance,
  useWeb3ExecuteFunction,
  useApiContract,
} from "react-moralis";
import { Moralis } from "moralis-v1";

function BuyToken({
  toast,
  showErrToast,
  showInfoToast,
  isLargerThan500,
  setReRender,
  reRender,
  currentPhase,
  setCanBuyWithIbat,
  canBuyWithIbat,
  setNativeValue,
  currentChainIsSupported,
}) {
  /**
   * Moralis : START
   */
  const { isAuthenticated, isWeb3Enabled, user, chainId, isInitialized } =
    useMoralis();
  const { chain } = useChain();
  const { fetch: bigFetch } = useWeb3ExecuteFunction();
  const { data: allBalances, isLoading: isLoadingERC20Balances } =
    useERC20Balances(); // Fetch ERC20Balances

  const { data: nativeBalance } = useNativeBalance({ chain: chainId }); // Fetch Native Balance
  /**
   * Moralis : END
   */

  /**
   * START
   * calculates if Hardcap of amount raised with IBAT is completed or not
   */
  const USDRaisedWithIBAT = useCallback(async () => {
    if (chainId !== "0x38") return 0;
    const fnName = "totalIBATUSDvalueSold";

    let NFT_CONTRACT_ADD = BSC_NFT_CONTRACT_ADDRESS_PHASE[currentPhase];
    if (chainId !== "0x38")
      NFT_CONTRACT_ADD = ETH_NFT_CONTRACT_ADDRESS_PHASE[currentPhase];

    let options = {
      abi: ABI_BIGNFT,
      contractAddress: NFT_CONTRACT_ADD,
      functionName: fnName,
    };
    await bigFetch({
      params: options,
      onSuccess: (data) => {
        const amountRaisedIBAT = Number(data._hex);
        console.log(
          `💰💰 amountRaised - ${typeof amountRaisedIBAT} ${amountRaisedIBAT} - Phase${currentPhase} - ${!(
            amountRaisedIBAT < IBAT_HARDCAP_IN_USD
          )}`
        );
        // console.log(amountRaisedIBAT);
        if (!(amountRaisedIBAT < IBAT_HARDCAP_IN_USD)) setCanBuyWithIbat(false);
      },
      onError: (err) => {
        console.error(err);
        console.error(`dev-❌failed to USDRaisedWithIBAT()`);
      },
    });
  }, [currentPhase, bigFetch, setCanBuyWithIbat, chainId]);

  useEffect(() => {
    if (!isWeb3Enabled) return;
    USDRaisedWithIBAT();
  }, [isWeb3Enabled, USDRaisedWithIBAT]);
  /**
   * calculates if Hardcap of amount raised with IBAT is completed or not
   * END
   */

  const [buyingCoin, setBuyingCoin] = useState("USDT");

  const [buyingCoinAmount, setBuyingCoinAmount] = useState(0);

  const [buyingCoinBalance, setBuyingCoinBalance] = useState(0);
  const [bigNFTBalance, setBigNFTBalance] = useState("0");

  const getTokenBalanceInWei = useCallback(() => {
    let token = buyingCoin;
    let tempCoin = 0;
    if (!isAuthenticated) {
      console.error(`dev-not authenticated`);
      return;
    }
    if (token === chain?.nativeCurrency.symbol.toUpperCase()) {
      tempCoin = nativeBalance.balance;
    } else {
      tempCoin = allBalances.filter((c) => {
        let symbol = c.symbol + "";
        return symbol.toUpperCase() === token.toUpperCase();
      });
      tempCoin = tempCoin && tempCoin[0] ? tempCoin[0] : null;
      tempCoin = tempCoin && tempCoin.balance;
      tempCoin += "";
    }
    console.log(`bal of - ${token} - ${tempCoin} (inWei)`);

    return tempCoin;
  }, [
    allBalances,
    isAuthenticated,
    buyingCoin,
    nativeBalance,
    chain?.nativeCurrency.symbol,
  ]);

  // const gsetTokenPriceInUSD = useCallback(async () => {
  //   let fnName = `get${buyingCoin}LatestPrice`;
  //   let c = buyingCoin;
  //   const decimals = BSC_COINS_SUPPORTED.filter((e) => e.symbol === c)[0]
  //     .decimal;
  //   let options = {
  //     abi: ABI_BIGNFT,
  //     contractAddress: BSC_NFT_CONTRACT_ADDRESS_PHASE[1],
  //     functionName: fnName,
  //   };
  //   let price = 0;
  //   await bigFetch({
  //     params: options,
  //     onSuccess: (tx) => {
  //       if (tx) {
  //         price = Number(tx._hex) + "";
  //         price = Moralis.Units.FromWei(price, decimals);
  //         price = Number(price).toFixed(3) + "";
  //         // price = parseInt(price) + "";
  //       }
  //     },
  //     onError: (err) => {
  //       console.error(err);
  //       console.error(`dev-failed get getToken{-${c}-}PriceInUSD - ${fnName}`);
  //     },
  //   });
  //   return price;
  // }, [bigFetch, buyingCoin]);

  /**
   * START
   * get IBAT/BNB price
   */

  const getTokenPriceInUSD = useCallback(async () => {
    if (!buyingCoin || !BSC_COINS_SUPPORTED) return;
    let c = buyingCoin;

    let coinsSupported = BSC_COINS_SUPPORTED;
    let NFT_CONTRACT_ADD = BSC_NFT_CONTRACT_ADDRESS_PHASE[currentPhase];
    if (chainId !== "0x38") {
      NFT_CONTRACT_ADD = ETH_NFT_CONTRACT_ADDRESS_PHASE[currentPhase];
      coinsSupported = ETH_COINS_SUPPORTED;
    }

    let fnName = `get${buyingCoin}LatestPrice`;
    if (c.toUpperCase() === chain?.nativeCurrency.symbol.toUpperCase())
      fnName = `getBNBLatestPrice`;

    const decimals =
      "" + coinsSupported.filter((e) => e?.symbol === c)[0].decimal;
    // const decimals = buyingCoin === "BNB" ? 18 : 9; // BNB & IBAT

    let options = {
      abi: ABI_BIGNFT,
      contractAddress: NFT_CONTRACT_ADD,
      functionName: fnName,
    };
    let userTokenBalInWei = getTokenBalanceInWei(buyingCoin);
    userTokenBalInWei = userTokenBalInWei ? userTokenBalInWei : 0;
    // userTokenBal = Moralis.Units.Token(`${userTokenBal}`, decimals);
    console.log(
      `userTokenBalInWei - ${userTokenBalInWei}, decimals-${decimals}`
    );
    let userTokenBal = Moralis.Units.FromWei(userTokenBalInWei, decimals);

    if (c === "IBAT") {
      options = {
        ...options,
        functionName: fnName,
        params: {
          _amountIN: `${Math.round(userTokenBal)}`,
        },
      };
    }

    // console.log(`decimals - ${userTokenBal} - ${typeof userTokenBal}`);
    // console.log(userTokenBal);
    // return 777;
    let coinPrice = 0;
    let USDEqu = "0";
    // console.log(options);
    await bigFetch({
      params: options,
      onSuccess: (data) => {
        if (!data) return;

        if (c === "IBAT") {
          // IBAT
          USDEqu = data._hex ? `${Number(data._hex)}` : "0";
          USDEqu = Moralis.Units.FromWei(USDEqu, "18"); // return value is in USDT so - 18 decimals
          // console.log(`USDEqu - ${USDEqu}`);
          // console.log(`👻 ${c} cost - ${Math.round(USDEqu)}`);
        } else {
          coinPrice = Moralis.Units.FromWei(`${Number(data._hex)}`, decimals);
          USDEqu = coinPrice * userTokenBal;
        }
        USDEqu = Number(USDEqu).toFixed(2);
        USDEqu += "";
        // if (c === "IBAT") {
        //   decimals = "9";
        //   USDEqu = coinPrice * Math.round(maxSold);
        // }
      },
      onError: (err) => {
        console.error(err);
        console.error(`dev-failed getLatestPrice of token - ${fnName}`);
      },
    });
    // console.log(`👻 ${c} price = ${coinPrice} - ${USDEqu}`);
    return USDEqu;
  }, [
    bigFetch,
    buyingCoin,
    currentPhase,
    getTokenBalanceInWei,
    chainId,
    chain?.nativeCurrency.symbol,
  ]);

  /**
   * END
   * get IBAT/BNB price
   */

  const setMaxTokensPossibleToBuy = useCallback(async () => {
    // deducting 1IBAT from overall amount so that total no. of holders doesn't decrease coz they're staking MAX AMOUNT - making IBAT Holding = 0 IBAT
    const TO_MAINTAIN_WALLET_HOLDERS = 1;

    let e = 0;
    try {
      e = getTokenBalanceInWei(buyingCoin);
      if (buyingCoin.toUpperCase() === "IBAT") e -= TO_MAINTAIN_WALLET_HOLDERS;
      e += "";
    } catch (error) {
      console.error(error);
      console.error(`dev-setMaxTokensPossibleToBuy crashed `);
    }
    if (!e || e <= 0 || e === "null") {
      e = "0";
    }

    let coinsSupported =
      chainId === "0x38" ? BSC_COINS_SUPPORTED : ETH_COINS_SUPPORTED;
    const decimals = coinsSupported.filter((e) => e.symbol === buyingCoin)[0]
      .decimal;
    let nativeCoin = chain?.nativeCurrency.symbol.toUpperCase();

    let maxBATSPurchsePossible = 0;
    let BatsPrice = BIGNFT_PRICE_USD_PHASE_ONE;
    if (currentPhase === "2") {
      BatsPrice = BIGNFT_PRICE_USD_PHASE_TWO;
    } else if (currentPhase === "3") {
      BatsPrice = BIGNFT_PRICE_USD_PHASE_THREE;
    }
    if (buyingCoin === "IBAT" || buyingCoin === nativeCoin) {
      let buyingCoinPriceInUSD = await getTokenPriceInUSD();
      // @todo calculate IBAT price
      // console.log(buyingCoinPriceInUSD);
      let preDiscountPrice = (100 - BUYING_WITH_IBAT_DISCOUNT) / 100;
      maxBATSPurchsePossible = parseInt(
        buyingCoinPriceInUSD / (preDiscountPrice * BatsPrice)
      );
      if (buyingCoin === nativeCoin) {
        let preSlippagePrice =
          buyingCoinPriceInUSD / (SLIPPAGE_FOR_BNB * BatsPrice);
        maxBATSPurchsePossible = parseInt(preSlippagePrice);
      } // maxBATSPurchsePossible = maxBATSPurchsePossible / BatsPrice;
    } else if (
      buyingCoin === "USDT" ||
      buyingCoin === "BUSD" ||
      buyingCoin === "DAI" ||
      buyingCoin === "USDC"
    ) {
      e = Moralis.Units.FromWei(`${e}`, `${decimals}`);
      e = Number(e).toFixed(3) + "";
      e = parseInt(e) + "";
      maxBATSPurchsePossible = parseInt(e / BatsPrice);
    }

    // console.log(typeof currentPhase);
    // console.log(currentPhase === "1");
    let input = document.getElementById("buyingCoinAmount");
    try {
      setNativeValue(input, maxBATSPurchsePossible);
      // setNativeValue(input, e);
      input.dispatchEvent(new Event("input", { bubbles: true }));
    } catch (error) {
      console.error(error);
      console.log(input);
      console.log(typeof e);
      console.log(e);
      console.error(`dev-failed to setMaxAmount()`);
    }
  }, [
    currentPhase,
    buyingCoin,
    getTokenBalanceInWei,
    getTokenPriceInUSD,
    setNativeValue,
    chain?.nativeCurrency.symbol,
    chainId,
  ]);

  /**
   * START - 48
   * Newer CODE TO GET userDeposits
   */
  const optionsUserDeposits = {
    functionName: "userDeposits",
    abi: ABI_BIGNFT,
    params: {
      "": user?.get("ethAddress"),
    },
  };
  const optionsBSC = {
    ...optionsUserDeposits,
    chain: "0x38",
  };
  const optionsETH = {
    ...optionsUserDeposits,
    chain: isTestnet ? "0x1" : "0x1",
  };
  const options1BSC = {
    ...optionsBSC,
    address: BSC_NFT_CONTRACT_ADDRESS_PHASE[1],
  };
  const options1ETH = {
    ...optionsETH,
    address: ETH_NFT_CONTRACT_ADDRESS_PHASE[1],
  };
  const options2BSC = {
    ...optionsBSC,
    address: BSC_NFT_CONTRACT_ADDRESS_PHASE[2],
  };
  const options2ETH = {
    ...optionsETH,
    address: ETH_NFT_CONTRACT_ADDRESS_PHASE[2],
  };
  const options3BSC = {
    ...optionsBSC,
    address: BSC_NFT_CONTRACT_ADDRESS_PHASE[3],
  };
  const options3ETH = {
    ...optionsETH,
    address: ETH_NFT_CONTRACT_ADDRESS_PHASE[3],
  };

  const { runContractFunction: getDeposits_bsc1, data: dataDeposits_bsc1 } =
    useApiContract(options1BSC);

  const { runContractFunction: getDeposits_eth1, data: dataDeposits_eth1 } =
    useApiContract(options1ETH);

    const { runContractFunction: getDeposits_bsc2, data: dataDeposits_bsc2 } =
    useApiContract(options2BSC);

  const { runContractFunction: getDeposits_eth2, data: dataDeposits_eth2 } =
    useApiContract(options2ETH);
    const { runContractFunction: getDeposits_bsc3, data: dataDeposits_bsc3 } =
    useApiContract(options3BSC);

  const { runContractFunction: getDeposits_eth3, data: dataDeposits_eth3 } =
    useApiContract(options3ETH);
  useEffect(() => {
    if (isInitialized && isAuthenticated && user) {
      console.log(`updating getRaised() reRender - ${reRender}`);
      getDeposits_bsc1();
       getDeposits_bsc2();
      getDeposits_bsc3();
      getDeposits_eth1();
      getDeposits_eth2();
      getDeposits_eth3();
    }
  }, [
    user,
    isInitialized,
    isAuthenticated,
    reRender,
    getDeposits_eth1,
    getDeposits_eth2,
    getDeposits_eth3,
    getDeposits_bsc1,
    getDeposits_bsc2,
    getDeposits_bsc3,
  ]);

  useEffect(() => {
    // if (
    //   !dataDeposits_bsc1 ||
    //   !dataDeposits_bsc2 ||
    //   !dataDeposits_bsc3 ||
    //   !dataDeposits_eth1 ||
    //   !dataDeposits_eth2 ||
    //   !dataDeposits_eth3
    // )
    //   return;

    if (!dataDeposits_bsc1 ||  !dataDeposits_bsc2 || !dataDeposits_bsc3 || !dataDeposits_eth1 || !dataDeposits_eth2 || !dataDeposits_eth3) return;

    // console.log(`🐸 raised in BSC - ${dataDeposits_bsc1}`);

    let balBsc = Number(dataDeposits_bsc1) + "";
    let balBsc2 = Number(dataDeposits_bsc2) + "";
    let balBsc3 = Number(dataDeposits_bsc3) + "";
    try {
      balBsc = Moralis.Units.FromWei(balBsc, `${NFT_TOKEN_DECIMALS}`);
      balBsc2 = Moralis.Units.FromWei(balBsc2, `${NFT_TOKEN_DECIMALS}`);
      balBsc3 = Moralis.Units.FromWei(balBsc3, `${NFT_TOKEN_DECIMALS}`);
    } catch (e) {
      console.error(e);
      console.error(`dev-failed getDeposits_bsc1 - dataDeposits_bsc1`);
    }
    balBsc = Number(balBsc).toFixed(3) + "";
    balBsc2 = Number(balBsc2).toFixed(3) + "";
    balBsc3 = Number(balBsc3).toFixed(3) + "";
    balBsc = parseInt(balBsc) + "";
    balBsc2 = parseInt(balBsc2) + "";
    balBsc3 = parseInt(balBsc3) + "";
    // console.log(`🐸 user deposits BSC : ${balBsc}`);

    let balEth = Number(dataDeposits_eth1) + "";
    let balEth2 = Number(dataDeposits_eth2) + "";
    let balEth3 = Number(dataDeposits_eth3) + "";
    try {
      balEth = Moralis.Units.FromWei(balEth, `${NFT_TOKEN_DECIMALS}`);
      balEth2 = Moralis.Units.FromWei(balEth2, `${NFT_TOKEN_DECIMALS}`);
      balEth3 = Moralis.Units.FromWei(balEth3, `${NFT_TOKEN_DECIMALS}`);
    } catch (e) {
      console.error(e);
      console.error(`dev-failed getDeposits_eth1 - dataDeposits_eth1`);
    }
    balEth = Number(balEth).toFixed(3) + "";
    balEth2 = Number(balEth2).toFixed(3) + "";
    balEth3 = Number(balEth3).toFixed(3) + "";
    balEth = parseInt(balEth) + "";
    balEth2 = parseInt(balEth2) + "";
    balEth3 = parseInt(balEth3) + "";
    let totalBATSBalance = Number(balBsc) + Number(balBsc2) + Number(balBsc3) + Number(balEth) + Number(balEth2) + Number(balEth3);
    setBigNFTBalance(totalBATSBalance);
    // console.log(`🐸 user deposits ETH : ${balEth}`);
  }, [dataDeposits_bsc1,dataDeposits_bsc2,dataDeposits_bsc3,dataDeposits_eth1,dataDeposits_eth2,dataDeposits_eth3]);

  /**
   * END - 48
   * Newer CODE TO GET userDeposits
   */

  return (
    <Flex
      width={"full"}
      justifyContent="space-between"
      gap={"1rem"}
      marginTop="0rem"
      padding={"0.5rem 3rem"}
      direction={isLargerThan500 ? "row" : "column"}
    >
      <Flex
        width={isLargerThan500 ? "100%" : "full"}
        direction="column"
        alignItems={"flex-start"}
        gap=".5rem"
      >
       
        <Flex
          direction={"column"}
          gap="1rem"
          maxWidth={"700px"}
          width="full"
          padding={"1rem 2.5rem"}
          borderRadius="4px"
          backdropFilter="blur(2px)"
        >
          <CoinSelector
            dropDownLabel={"Buy with"}
            coin={buyingCoin}
            setCoin={setBuyingCoin}
            coinBalance={buyingCoinBalance}
            setCoinBalance={setBuyingCoinBalance}
            isAuthenticated={isAuthenticated}
            isLoadingERC20Balances={isLoadingERC20Balances}
            allBalances={allBalances}
            nativeBalance={nativeBalance}
            canBuyWithIbat={canBuyWithIbat}
            currentChainIsSupported={currentChainIsSupported}
          />

          <InputAmount
            elID="buyingCoinAmount"
            setAmount={setBuyingCoinAmount}
            setRightButtonAction={setMaxTokensPossibleToBuy}
          />
          <BuyButton
            coin={buyingCoin}
            bigNFTAmount={buyingCoinAmount}
            toast={toast}
            showErrToast={showErrToast}
            showInfoToast={showInfoToast}
            setReRender={setReRender}
            reRender={reRender}
            currentPhase={currentPhase}
            currentChainIsSupported={currentChainIsSupported}
          ></BuyButton>
        </Flex>
      </Flex>
      {/* <Flex
        width={isLargerThan500 ? "50%" : "full"}
        direction="column"
        alignItems={"flex-start"}
        gap=".5rem"
      >
        <Heading as="h3" fontSize={"1.5rem"} minWidth="max-content">
          Token Details
        </Heading>
        <Flex
          background={
            "linear-gradient(90deg, rgba(23, 44, 102, 0.3) 0%, rgba(24, 22, 82, 0.3) 100%)"
          }
          borderRadius="4px"
          border={"2px solid rgba(255, 255, 255, 0.27)"}
          padding="1rem"
          width="full"
          direction={"column"}
          gap="1rem"
        >
          <Flex
            direction={"column"}
            alignItems="flex-start"
            paddingBottom=".5rem"
            marginBottom=".5rem"
            borderBottom={"1px solid #434343"}
          >
            <Text fontWeight={"bold"} fontSize=".85rem">
              {NFT_TOKEN_SYMBOL} Balance
            </Text>
            <Text>{bigNFTBalance}</Text>
          </Flex>
          <Flex direction={"column"} alignItems="flex-start">
            <Text fontWeight={"bold"} fontSize=".85rem">
              Total Supply
            </Text>
            <Text>100,000,000</Text>
          </Flex>
          <Flex direction={"column"} alignItems="flex-start">
            <Text fontWeight={"bold"} fontSize=".85rem">
              $IBAT Contract Address (BSC Chain)
            </Text>
            <Text overflowWrap={"anywhere"} textAlign="left">
              0x19cd9b8e42d4ef62c3ea124110d5cfd283ceac43
            </Text>
          </Flex>
          <Flex direction={"column"} alignItems="flex-start">
            <Text fontWeight={"bold"} fontSize=".85rem">
              Token Decimals
            </Text>
            <Text>18</Text>
          </Flex>
        </Flex>
      </Flex> */}
    </Flex>
  );
}

export default BuyToken;
