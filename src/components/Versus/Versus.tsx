import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { clickVersus } from "../../store/action";

import styles from "./styles.module.scss";

export const Versus = () => {
  const dispatch = useAppDispatch();
  const { playerPick } = useAppSelector((state) => state.rso);
  const handleClickVersus = () => {
    if (playerPick) {
      dispatch(clickVersus());
    }
  };
  return (
    <button onClick={handleClickVersus} className={styles.button}>
      Click for RPS
    </button>
  );
};
