import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { rsoReducer } from "./../../store/rsoReducer";
import styles from "./styles.module.scss";

export const Result = () => {
  const dispatch = useAppDispatch();
  const { setIsShowResult } = rsoReducer.actions;
  const { playerPick, enemyPick, result } = useAppSelector(
    (state) => state.rso
  );

  const closeBtn = () => {
    dispatch(setIsShowResult(false));
  };
  return (
    <>
      <div className={styles.container}></div>
      <div className={styles.resultBlock}>
        <h2>{playerPick === result.winner ? "You win" : "You lose"}</h2>
        <div className={styles.pickBlock}>
          <p>
            Your pick: <span>{playerPick}</span>
          </p>
          <p>
            Enemy pick: <span>{enemyPick}</span>
          </p>
        </div>
        <div className={styles.infoResult}>
          <b>
            Winner: <span>{result.winner}</span>
          </b>
          <b>
            Outcome: <span>{result.outcome}</span>
          </b>
          <b>
            Loser: <span>{result.loser}</span>
          </b>
        </div>
        <button onClick={closeBtn}>X</button>
      </div>
    </>
  );
};
