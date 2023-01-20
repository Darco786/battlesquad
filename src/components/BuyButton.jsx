import { Button, Badge, Text, Flex } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useWeb3ExecuteFunction, useMoralis, useChain } from "react-moralis";
import { BSC_COINS_SUPPORTED, ETH_COINS_SUPPORTED } from "../COINS_SUPPORTED";
import {
  BSC_NFT_CONTRACT_ADDRESS_PHASE,
  ETH_NFT_CONTRACT_ADDRESS_PHASE,
  ABI_BIGNFT,
  SLIPPAGE_FOR_BNB,
  SLIPPAGE_FOR_ETH,
  BIGNFT_PRICE_USD_PHASE_ONE,
  BUYING_WITH_IBAT_DISCOUNT,
  NFT_TOKEN_SYMBOL,
  MIN_BUYING_AMOUNT,
  BIGNFT_PRICE_USD_PHASE_TWO,
  BIGNFT_PRICE_USD_PHASE_THREE,
  isTestnet,
} from "../CONTRACT_DETAILS";
import { Moralis } from "moralis-v1";

function BuyButton({
  coin,
  bigNFTAmount,
  toast,
  showErrToast,
  showInfoToast,
  setReRender,
  reRender,
  currentPhase,
  currentChainIsSupported,
}) {
  /**
   * Moralis : START
   */
  const { fetch: bigFetch, isFetching: bigIsFetching } =
    useWeb3ExecuteFunction();
  const { isWeb3Enabled, chainId } = useMoralis();
  const { chain } = useChain();
  /**
   * Moralis : END
   */

  const [BNBValueForBIGNFT, setBNBValueForBIGNFT] = useState(0);
  const [USDEquivalent, setUSDEquivalent] = useState("0");

  const buyNFTtokens = useCallback(() => {
    // console.log(`Bought ${bigNFTAmount} BIGNFTs, using - ${coin}`);
    let buyingCoin = coin + "";
    buyingCoin = buyingCoin.toUpperCase();
    console.log(`trying to buy ${bigNFTAmount} ${NFT_TOKEN_SYMBOL} w/ ${coin}`);
    if (!bigNFTAmount || Number(bigNFTAmount) < MIN_BUYING_AMOUNT) {
      showInfoToast(
        `Minimum buying amount is ${MIN_BUYING_AMOUNT} ${NFT_TOKEN_SYMBOL}`
      );
      console.error(
        `dev-error Minimum buying amount is ${MIN_BUYING_AMOUNT}${NFT_TOKEN_SYMBOL}`
      );
      return;
    }

    let fnName = "buyWithIBAT";
    let buyParams = {
      amount: bigNFTAmount,
    };
    let BNBParams = {
      buyWithBNB: Moralis.Units.ETH(`${BNBValueForBIGNFT}`),
      amount: bigNFTAmount,
    }
    let NFT_CONTRACT_ADD = BSC_NFT_CONTRACT_ADDRESS_PHASE[currentPhase];
    if (chainId !== "0x38")
      NFT_CONTRACT_ADD = ETH_NFT_CONTRACT_ADDRESS_PHASE[currentPhase];

    let options = {
      abi: ABI_BIGNFT,
      contractAddress: NFT_CONTRACT_ADD,
      functionName: fnName,
      params: buyParams,
    };
    if (buyingCoin === chain?.nativeCurrency.symbol.toUpperCase()) {
      console.log(
        `Bought ${bigNFTAmount} BIGNFTs, w/ ${chain?.nativeCurrency.symbol.toUpperCase()}`
        
      );
      console.log("aaa", Moralis.Units.ETH(`${BNBValueForBIGNFT}`))
      options = {
        ...options,
        msgValue: Moralis.Units.ETH(`${BNBValueForBIGNFT}`),
        functionName: "buyWithBNB",
        params: BNBParams,
      };
    } else if (
      buyingCoin === "USDT" ||
      buyingCoin === "BUSD" ||
      buyingCoin === "DAI" ||
      buyingCoin === "USDC"
    ) {
      console.log(`Bought ${bigNFTAmount} ${NFT_TOKEN_SYMBOL}, w/ StableCoin`);
      let stableCoinIndex = 0; // for USDT
      if (buyingCoin === "USDC") {
        stableCoinIndex = 1;
      } else if (buyingCoin === "BUSD") {
        stableCoinIndex = 2;
      } else if (buyingCoin === "DAI") {
        stableCoinIndex = 3;
      }
      buyParams = {
        ...buyParams,
        purchaseToken: stableCoinIndex,
      };
      options = {
        ...options,
        functionName: "buyWithUSD",
        params: buyParams,
      };
    }

    // console.log(`-------`);
    // console.log(options);
    // console.log(`-------`);
    // return;

    bigFetch({
      params: options,
      onSuccess: (tx) => {
        console.log(tx);
        toast({
          containerStyle: {
            maxWidth: "92vw",
          },
          title: `Buying ${bigNFTAmount} ${NFT_TOKEN_SYMBOL} tokens Tx in progress...`,
          description: `Tx Hash : ${tx.hash}`,
          status: "info",
          duration: null,
          isClosable: true,
        });

        tx.wait()
          .then((dataa) => {
            console.log(dataa);

            setReRender(!reRender); // for refreshing values
            // fetchERC20Balances();

            toast.closeAll();
            toast({
              containerStyle: {
                maxWidth: "92vw",
              },
              title: `Success. Bought ${bigNFTAmount} ${NFT_TOKEN_SYMBOL} tokens`,
              description: `Tx Hash : ${dataa.transactionHash}`,
              status: "success",
              duration: "10000",
              isClosable: true,
            });
          })
          .catch((e) => {
            // @todo - every tx.wait should have .catch
            console.error(e);
            console.error(`tx was sent but it failed`);
            console.error(
              `dev-failed buying BATTLESQUAD - ${NFT_TOKEN_SYMBOL}`
            );
          });
      },
      onError: (err) => {
        console.error(err);
        if (err && err.data) showErrToast(err.data.message);
        else if (err && err.message) showErrToast(err.message);
        console.log(options);
        console.error(`dev-failed buying BATTLESQUAD - ${NFT_TOKEN_SYMBOL}`);
      },
    });
  }, [
    coin,
    bigNFTAmount,
    bigFetch,
    BNBValueForBIGNFT,
    toast,
    reRender,
    showErrToast,
    showInfoToast,
    setReRender,
    currentPhase,
    chainId,
    chain?.nativeCurrency.symbol,
  ]);

  const enableAllowance = useCallback(() => {
    let tokenToEnable = `${coin.toUpperCase()}`;
    console.log(`about to enableAllowance-`);
    console.log(tokenToEnable);

    let coinsSupported = BSC_COINS_SUPPORTED;
    if (chainId !== "0x38") coinsSupported = ETH_COINS_SUPPORTED;

    let ABI_approve = coinsSupported.filter(
      (e) => e.symbol.toUpperCase() === tokenToEnable
    )[0].ABI_approve;

    // console.log(ABI_approve);
    let tokenToEnableAllowanceContractAddress = coinsSupported.filter(
      (e) => e.symbol.toUpperCase() === tokenToEnable
    )[0].contractAddress;

    let NFT_CONTRACT_ADD = BSC_NFT_CONTRACT_ADDRESS_PHASE[currentPhase];
    if (chainId !== "0x38")
      NFT_CONTRACT_ADD = ETH_NFT_CONTRACT_ADDRESS_PHASE[currentPhase];

    let contractAddressToAllow = NFT_CONTRACT_ADD;

    let optionsApprove = {
      abi: ABI_approve,
      contractAddress: tokenToEnableAllowanceContractAddress,
      functionName: "approve",
      params: {
        spender: contractAddressToAllow,
        amount: "100000000000000000000000000000",
      },
    };

    let temp_tokenAddressToCheck = tokenToEnableAllowanceContractAddress + "";
    temp_tokenAddressToCheck = temp_tokenAddressToCheck.toUpperCase();
    let tokenToCheck = "";
    for (let i = 0; i < coinsSupported.length; i++) {
      let t = coinsSupported[i];
      if (!(t.symbol === (isTestnet ? "ETH" : "ETH"))) {
        if (t?.contractAddress.toUpperCase() === temp_tokenAddressToCheck) {
          tokenToCheck = t;
        }
      }
    }
    if (chainId !== "0x38") {
      if (
        tokenToCheck?.symbol?.toUpperCase() === "USDT" ||
        tokenToCheck?.symbol?.toUpperCase() === "BUSD"
      ) {
        optionsApprove = {
          ...optionsApprove,
          params: {
            _spender: contractAddressToAllow,
            _value: "100000000000000000000000000000",
          },
        };
      } else if (tokenToCheck?.symbol?.toUpperCase() === "DAI") {
        optionsApprove = {
          ...optionsApprove,
          params: {
            usr: contractAddressToAllow,
            wad: "100000000000000000000000000000",
          },
        };
      } else if (tokenToCheck?.symbol?.toUpperCase() === "USDC") {
        optionsApprove = {
          ...optionsApprove,
          params: {
            spender: contractAddressToAllow,
            value: "100000000000000000000000000000",
          },
        };
      }
      // console.log(`Checking - ${tokenToCheck?.symbol}`);
    }

    bigFetch({
      params: optionsApprove,
      onSuccess: (tx) => {
        console.log(tx);
        toast({
          containerStyle: {
            maxWidth: "92vw",
          },
          title: `ChainId: ${chainId} - Allowance for ${tokenToEnable} Tx in progress...`,
          description: `Tx Hash : ${tx.hash}`,
          status: "info",
          duration: null,
          isClosable: true,
        });

        tx.wait().then((dataa) => {
          console.log(dataa);
          console.log(`dev-✅-${tokenToEnable} allowance approved`);
          window.localStorage.setItem(
            `${chainId}_${tokenToEnable}allowance`,
            "true"
          );

          setReRender(!reRender); // for refreshing values

          toast.closeAll();
          toast({
            containerStyle: {
              maxWidth: "92vw",
            },
            title: `ChainId: ${chainId} - ${tokenToEnable} allowance enabled. For best Experience, disconnect & connect again.`,
            description: `Tx Hash : ${dataa.transactionHash}`,
            status: "success",
            duration: "10000",
            isClosable: true,
          });
        });
      },
      onError: (err) => {
        console.error(err);
        if (err && err.data) showErrToast(err.data.message);
        else if (err && err.message) showErrToast(err.message);
        console.error(`dev-failed to approve ${tokenToEnable} allownace`);
      },
    });
  }, [
    bigFetch,
    currentPhase,
    coin,
    reRender,
    setReRender,
    showErrToast,
    toast,
    chainId,
  ]);

  /**
   * START
   * Gets the amount of max sold coins required to buy given amount of BATTLESQUAD
   */
  const [maxSold, setMaxSold] = useState("0");
  const getMaxSold = useCallback(() => {
    let c = coin + "";
    c = c.toUpperCase();

    if (
      !bigNFTAmount ||
      Number(bigNFTAmount) < MIN_BUYING_AMOUNT ||
      c.length <= 0
    ) {
      setMaxSold("0");
      return;
    }

    let fnName = "getIBATAmount";

    let nativeCoin = chain?.nativeCurrency.symbol.toUpperCase();
    let coinsSupported =
      chainId === "0x38" ? BSC_COINS_SUPPORTED : ETH_COINS_SUPPORTED;

    if (nativeCoin === c) {
      fnName = "getBNBAmount";
      // @todo - add refresh - price updates after couple of seconds
    }

    let NFT_CONTRACT_ADD = BSC_NFT_CONTRACT_ADDRESS_PHASE[currentPhase];
    if (chainId !== "0x38")
      NFT_CONTRACT_ADD = ETH_NFT_CONTRACT_ADDRESS_PHASE[currentPhase];

    let buyingPrice = 0;
    let options = {
      abi: ABI_BIGNFT,
      contractAddress: NFT_CONTRACT_ADD,
      functionName: fnName,
      params: {
        amount: bigNFTAmount,
      },
    };

    // if buying w/ Stablecoin - then setMaxAmount same as USD amount coz $1={price from CONTRACT_DETAILS}
    if (c === "USDT" || c === "BUSD" || c === "USDC" || c === "DAI") {
      let tokenPrice = BIGNFT_PRICE_USD_PHASE_ONE;
      if (Number(currentPhase) === 2) {
        tokenPrice = BIGNFT_PRICE_USD_PHASE_TWO;
      } else if (Number(currentPhase) === 3) {
        tokenPrice = BIGNFT_PRICE_USD_PHASE_THREE;
      }
      let t = (tokenPrice * bigNFTAmount).toFixed(2);
      setMaxSold(t);
      return;
    }
    bigFetch({
      params: options,
      onSuccess: (tx) => {
        buyingPrice = Number(tx._hex) + "";
        if (c === "BNB") {
          buyingPrice = Number(tx._hex) * SLIPPAGE_FOR_BNB + "";
        }
        else if (c === "ETH") {
          buyingPrice = Number(tx._hex) * SLIPPAGE_FOR_ETH + "";
        }

        // console.log(buyingPrice);
        // const decimals = BSC_COINS_SUPPORTED.filter((e) => e.symbol === c)[0]
        //   .decimal;
        const decimals = c === "IBAT" ? "9" : "18";
        //   .decimal;
        console.log("buyingPrice", buyingPrice)
        buyingPrice = Moralis.Units.FromWei(buyingPrice, decimals);
        buyingPrice = Number(buyingPrice).toFixed(3) + "";
        if (c === "BNB" || c === "ETH") {
          try {
            setBNBValueForBIGNFT(buyingPrice);
          } catch (error) {
            console.error(`dev-error : setBNBValueForBIGNFT(buyingPrice);`);
          }
        }

        // console.log(
        //   `buyingPrice - ${buyingPrice} ${coin} - decimals [${decimals}] - for ${bigNFTAmount} ${NFT_TOKEN_SYMBOL}`
        // );
        setMaxSold(buyingPrice);
      },
      onError: (err) => {
        console.error(err);
        console.error(`dev-failed get price - ${fnName}`);
      },
    });
  }, [
    coin,
    bigNFTAmount,
    currentPhase,
    bigFetch,
    chainId,
    chain?.nativeCurrency.symbol,
  ]);

  // calls the setMaxSold everytime the amount of BATTLESQUAD to buy changes
  useEffect(() => {
    if (!isWeb3Enabled) return;
    if (typeof currentChainIsSupported + "" === "undefined") return;
    if (!currentChainIsSupported) return;

    getMaxSold();
  }, [isWeb3Enabled, getMaxSold, currentChainIsSupported]);

  /**
   * Gets the amount of max sold coins required to buy given amount of BATTLESQUAD
   * END
   */
  /**
   * START
   * get IBAT/BNB price
   */

  const getLatestPrice = useCallback(() => {
    if (!isWeb3Enabled) return;
    if (typeof currentChainIsSupported + "" === "undefined") return;
    if (!currentChainIsSupported) return;

    let c = (coin + "").toUpperCase();

    let fnName = "getBNBLatestPrice";

    let nativeCoin = chain?.nativeCurrency.symbol.toUpperCase();

    let NFT_CONTRACT_ADD = BSC_NFT_CONTRACT_ADDRESS_PHASE[currentPhase];

    let tempC = BSC_COINS_SUPPORTED;
    if (chainId !== "0x38") {
      NFT_CONTRACT_ADD = ETH_NFT_CONTRACT_ADDRESS_PHASE[currentPhase];
      tempC = ETH_COINS_SUPPORTED;
    }
    let tempC_decimals = tempC.filter((e) => e?.symbol.toUpperCase() === c)[0]
      .decimal;
    let USDT_decimals = tempC.filter(
      (e) => e?.symbol.toUpperCase() === "USDT"
    )[0].decimal;

    let options = {
      abi: ABI_BIGNFT,
      contractAddress: NFT_CONTRACT_ADD,
      functionName: fnName,
    };

    if (c === "IBAT") {
      fnName = "getIBATLatestPrice";
      // _amountIN - is IBAT without decimals (13 IBAT, we'll pass 13, not 13000000000)
      // return value is in USDT so - 18 decimals
      options = {
        ...options,
        functionName: fnName,
        params: {
          _amountIN: `${Math.round(maxSold)}`,
        },
      };
      if (Number(maxSold) === 0) return;
    }

    // return;
    // for some reason - getting issue in executing getBNBprice on ETH chain
    if (chainId === "0x1" && fnName === "getBNBLatestPrice") {
      console.log(options);
      console.log(`dev-error-${fnName} - ${c} - options`);
      return;
    }
    // bigFetch({
    //   params: options,
    //   onSuccess: (data) => {
    //     if (!data) return;

    //     let decimals = c === nativeCoin ? "18" : tempC_decimals;
    //     let USDEqu = "0";
    //     if (c === nativeCoin) {
    //       let coinPrice = Moralis.Units.FromWei(
    //         `${Number(data._hex)}`,
    //         decimals
    //       );
    //       // console.log(`👻 ${c} price = ${coinPrice} - ${Number(data._hex)}`);
    //       USDEqu = coinPrice * maxSold;
    //     } else {
    //       // IBAT
    //       USDEqu = data._hex ? `${Number(data._hex)}` : "0";
    //       USDEqu = Moralis.Units.FromWei(USDEqu, USDT_decimals); // return value is in USDT so getting USDT decimals on current chain
    //       // console.log(`👻 ${c} cost - ${Math.round(USDEqu)}`);
    //     }
    //     USDEqu = Number(USDEqu).toFixed(2);
    //     USDEqu += "";
    //     setUSDEquivalent(USDEqu);
    //     // if (c === "IBAT") {
    //     //   decimals = "9";
    //     //   USDEqu = coinPrice * Math.round(maxSold);
    //     // }
    //   },
    //   onError: (err) => {
    //     console.error(err);
    //     console.error(`dev-failed getLatestPrice of token - ${fnName}`);
    //   },
    // });
    // found error @todo-error
  }, [
    coin,
    // bigFetch,
    maxSold,
    currentPhase,
    chainId,
    chain?.nativeCurrency.symbol,
    isWeb3Enabled,
    currentChainIsSupported,
  ]);

  //  update price
  useEffect(() => {
    getLatestPrice();
  }, [isWeb3Enabled, getLatestPrice, currentChainIsSupported]);
  /**
   * END
   * get IBAT/BNB price
   */

  return (
    <>
      <Button
        onClick={buyNFTtokens}
        width={"full"}
        maxWidth={"340px"}
        margin={"auto"}
        disabled={
          window.localStorage.getItem(
            `${chainId}_${coin.toUpperCase()}allowance`
          ) === "false" || bigIsFetching
        }
      >
        {bigIsFetching ? (
          "loading..."
        ) : (
          <>
            BUY&nbsp;
            <Text>{NFT_TOKEN_SYMBOL}</Text>
            {coin.toUpperCase() === "IBAT" && (
              <Badge ml={".5rem"} colorScheme={"green"}>
                {BUYING_WITH_IBAT_DISCOUNT}% Discount
              </Badge>
            )}
          </>
        )}
      </Button>

      {window.localStorage.getItem(
        `${chainId}_${coin.toUpperCase()}allowance`
      ) === "false" && (
        <Button disabled={bigIsFetching} onClick={enableAllowance}>
          ENABLE {coin}
        </Button>
      )}
      <Flex justifyContent={"space-between"}>
        <Text fontSize={"x-small"}>Max Sold</Text>
        <Text fontSize={"x-small"} textAlign="right">
          {maxSold} {coin}{" "}
          {(coin + "").toUpperCase() ===
          chain?.nativeCurrency.symbol.toUpperCase()
            ? `(${parseFloat(
                ((SLIPPAGE_FOR_BNB - 1) * 100).toFixed(2)
              )}% SLIPPAGE)`
            : ""}{" "}
          <br />
          {(coin + "").toUpperCase() ===
            chain?.nativeCurrency.symbol.toUpperCase() ||
          (coin + "").toUpperCase() === "IBAT"
            ? `$${Number(USDEquivalent)}`
            : ""}
        </Text>
      </Flex>
    </>
  );
}

export default BuyButton;
