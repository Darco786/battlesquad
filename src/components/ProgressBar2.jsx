import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { ref, getDatabase, update } from "firebase/database";
import { useObject } from "react-firebase-hooks/database";
import { TOTAL_AMOUNT_TO_RAISE } from "../CONTRACT_DETAILS";



function ProgressBar2({ isLargerThan500, firebaseApp }) {
  const database = getDatabase(firebaseApp);
  // const realtimeDBVal = "presaleProgressBarTest";
  const realtimeDBValProgressBar = "presaleProgressBar";
  const realtimeDBValTokensSold = "totalRaised";
  const current = "ongoingPhase";
  const lol = "totalAmountProgressBar";


  const [currentPhase, currentPhaseLoading] = useObject(
    ref(database, current)
  );

  if (!currentPhaseLoading) {
  if (currentPhase.val() === 1) {
  const xxx = TOTAL_AMOUNT_TO_RAISE.phase1; 

  update(ref(database), { "totalAmountProgressBar": xxx })
  } else if (currentPhase.val() === 2) {
  const xxx = TOTAL_AMOUNT_TO_RAISE.phase1 + TOTAL_AMOUNT_TO_RAISE.phase2;

  update(ref(database), { "totalAmountProgressBar": xxx })
  } else if (currentPhase.val() === 3){
  const xxx = TOTAL_AMOUNT_TO_RAISE.total;
  
  update(ref(database), { "totalAmountProgressBar": xxx })
  }
  }

  const [totalAmount, totalAmountLoading] = useObject(
    ref(database, lol)
  );

  const [progressBarVal, progressBarVal_loading] = useObject(
    ref(database, realtimeDBValProgressBar)
  );
  const [tokensSold, tokensSold_loading] = useObject(
    ref(database, realtimeDBValTokensSold)
  );

  return (
    <>
      <Flex
        direction={"column"}
        alignItems="flex-end"
        padding={isLargerThan500 ? "1rem 3rem" : ".5rem"}
        width="full"
      >
        <progress
          className="progress__bar"
          value={!tokensSold_loading &&
            tokensSold &&
            `${Number(tokensSold.val())}`}
          // value={tokensSold ? tokensSold.val() : 0}
          max={!totalAmountLoading &&
            totalAmount &&
            `${Number(totalAmount.val())}`}
          style={{ width: "100%", margin: "1rem auto" }}
        ></progress>
        <Flex gap=".35rem">
          <Text>Progress</Text>
          <Text fontWeight={"black"}>
            {!progressBarVal_loading &&
              progressBarVal &&
              `${
                Number(progressBarVal.val()) < 1 ? "<1" : progressBarVal.val()
              }%`}
          </Text>
          <Text>
            (
            {!tokensSold_loading &&
              tokensSold &&
              `$${Number(tokensSold.val()).toLocaleString()} `}
            / {!totalAmountLoading &&
              totalAmount &&
              `$${Number(totalAmount.val()).toLocaleString()}) `}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default ProgressBar2;
