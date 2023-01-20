import { isTestnet } from "./CONTRACT_DETAILS";
export const ONRAMP_KYB_IS_DONE = isTestnet ? true : false;
const ONRAMP_API_KEY = isTestnet
  ? "pk_test_x5M_5fdXzn1fxK04seu0JgFjGsu7CH8lOvS9xZWzuSM0"
  : "pk_prod_1n0DhGdQfjur2_XhwL_lnXScLdQIH2mhlnxQPQo7V6E0";

export const ONRAMP_SRC_URL = isTestnet
  ? `https://widget.onramper.com?color=266677&apiKey=${ONRAMP_API_KEY}`
  : `https://widget.onramper.com?color=266677&apiKey=${ONRAMP_API_KEY}`;

/**
 * START
 * TEST CREDENTIALS FOR ONRAMPER
 * CardNo.            Expiry    CVV   USD,IDR
 * 4111111111111111	  10/23	    123
 *
 * CardNo.          Expiry  CVV   GBP,EUR,AUD,CAD,CHF,NOK,JPY,KRW,ZAR,NZD,SGD,HKD
 * 4485141520544212	10/23	  100
 */
