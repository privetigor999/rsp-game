import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchItems } from "../../store/action";
import { rsoReducer } from "./../../store/rsoReducer";
import styles from "./styles.module.scss";
export const Player: React.FC = () => {
  const dispatch = useAppDispatch();
  const { setPlayerPick } = rsoReducer.actions;
  const { data, playerPick } = useAppSelector((state) => state.rso);

  const handleClickItem = (item: string) => {
    dispatch(setPlayerPick(item));
  };
  React.useEffect(() => {
    dispatch(fetchItems());
  }, []);
  return (
    <div className={styles.playerContainer}>
      {data?.map((item) => (
        <div
          key={item}
          className={item === playerPick ? styles.activeItem : styles.item}
          onClick={() => handleClickItem(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
