import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clickVersus, fetchItems } from "./action";
import { IResult, IRso } from "./../types/rso";

const initialState: IRso = {
  data: [],
  isLoading: false,
  versusLoading: false,
  enemyPick: "",
  playerPick: "",
  error: "",
  pick: "",
  result: { winner: "", outcome: "", loser: "" },
  isShowResult: false,
};

export const rsoReducer = createSlice({
  name: "rso",
  initialState,
  reducers: {
    setPlayerPick(state, action: PayloadAction<string>) {
      state.playerPick = action.payload;
    },
    setEnemyPick(state, action: PayloadAction<string>) {
      state.enemyPick = action.payload;
    },
    setIsShowResult(state, action) {
      state.isShowResult = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.error = "";
        state.isLoading = true;
      })
      .addCase(
        fetchItems.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.data = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchItems.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(clickVersus.pending, (state) => {
        state.versusLoading = true;
        state.error = "";
      })
      .addCase(
        clickVersus.fulfilled,
        (state, action: PayloadAction<IResult>) => {
          state.result = action.payload;
          state.versusLoading = false;
          state.isShowResult = true;
        }
      );
  },
});

export default rsoReducer.reducer;
