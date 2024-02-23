import { createSlice } from "@reduxjs/toolkit";

const COMPLETE_LIST = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const initialState = {
  current: true,
  board: Array(9).fill(null),
  olist: [],
  xlist: [],
  winner: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateBoard: (state, action) => {
      if (state.winner) return;

      const currentPlayer = state.current ? "X" : "O";
      state.board[action.payload] = currentPlayer;

      if (state.current) {
        state.xlist.push(action.payload);
        if (checkComplete(state.xlist)) state.winner = currentPlayer;
      } else {
        state.olist.push(action.payload);
        if (checkComplete(state.olist)) state.winner = currentPlayer;
      }

      state.current = !state.current;
    },
    resetBoard: (state) => {
      state.current = true;
      state.board = Array(9).fill(null);
      state.olist = [];
      state.xlist = [];
      state.winner = null;
    },
  },
});

export const { updateBoard, resetBoard } = gameSlice.actions;
export default gameSlice.reducer;

const checkComplete = (list) => {
  for (const line of COMPLETE_LIST) {
    if (line.every((value) => list.includes(value))) {
      return true;
    }
  }
  return false;
};
