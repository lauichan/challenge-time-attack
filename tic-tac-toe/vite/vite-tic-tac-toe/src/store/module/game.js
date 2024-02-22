import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: true,
  board: [null, null, null, null, null, null, null, null, null],
  olist: [],
  xlist: [],
  finish: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.current = !state.current;
      state.board[action.payload.idx] = action.payload.value;
      if (!state.current) {
        state.olist.push(action.payload.idx);
      } else {
        state.xlist.push(action.payload.idx);
      }
    },
    gameOver: (state, action) => {
      state.finish = true;
    },
  },
});

export const { setBoard, gameOver } = gameSlice.actions;
export default gameSlice.reducer;
