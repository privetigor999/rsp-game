import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IResult, IRso } from "../types/rso";
import { AppDispatch } from "./store";
import { rsoReducer } from "./rsoReducer";

export const fetchItems = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>("rso/fetchItems", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      "https://rps101.pythonanywhere.com/api/v1/objects/all"
    );
    return response.data;
  } catch (e) {
    return rejectWithValue((e as AxiosError).message);
  }
});

export const clickVersus = createAsyncThunk<
  IResult,
  void,
  { state: { rso: IRso }; rejectWithValue: string; dispatch: AppDispatch }
>("rso/clickVersus", async (_, { getState, rejectWithValue, dispatch }) => {
  const { playerPick, data } = getState().rso;

  try {
    const { setEnemyPick } = rsoReducer.actions;
    const randomIndex = Math.floor(Math.random() * data.length + 1) - 1;
    const enemyRandom = data[randomIndex];
    dispatch(setEnemyPick(enemyRandom));
    const response = await axios.get(
      `https://rps101.pythonanywhere.com/api/v1/match?object_one=${playerPick}&object_two=${enemyRandom}`
    );
    return response.data;
  } catch (e) {
    return rejectWithValue((e as AxiosError).message);
  }
});
