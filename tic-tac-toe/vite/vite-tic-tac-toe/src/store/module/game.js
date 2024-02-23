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
      if (state.finish) return;

      state.board[action.payload.idx] = state.current ? "X" : "O";

      if (state.current) {
        state.olist.push(action.payload);
      } else {
        state.xlist.push(action.payload);
      }

      state.current = !state.current;
    },
    gameOver: (state, action) => {
      state.finish = true;
    },
  },
});

export const { setBoard, gameOver } = gameSlice.actions;
export default gameSlice.reducer;
