import { useDispatch, useSelector } from "react-redux";
import { gameOver, setBoard } from "./store/module/game";
import React from "react";

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

function App() {
  const dispatch = useDispatch();
  const { current, board, xlist, olist, finish } = useSelector((state) => state.game);

  const checkComplete = (list) => {
    for (const line of COMPLETE_LIST) {
      if (line.every((value) => list.includes(value))) {
        dispatch(gameOver());
        return true;
      }
    }
    return false;
  };

  const handleClick = (e) => {
    if (finish) return;
    dispatch(setBoard({ idx: +e.target.name, value: current ? "O" : "X" }));
    e.target.disabled = true;
  };

  return (
    <>
      {checkComplete(xlist) ? <p>X가 승리했습니다.</p> : null}
      {checkComplete(olist) ? <p>O가 승리했습니다.</p> : null}
      <section className="board">
        {board.map((button, i) => {
          return (
            <button onClick={handleClick} name={i}>
              {button}
            </button>
          );
        })}
      </section>
    </>
  );
}

export default App;
