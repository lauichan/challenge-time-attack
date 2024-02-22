import { useDispatch, useSelector } from "react-redux";
import { gameOver, setBoard } from "./store/module/game";
import React from "react";

const COMPLETE = [
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

  const player = current ? "O" : "X";

  function checkComplete(list) {
    for (const success of COMPLETE) {
      const filterdlist = list.filter((item) => success.includes(item));
      if (success.every((value) => filterdlist.includes(value))) {
        dispatch(gameOver());
        return <>{current ? "X가 승리했습니다." : "O가 승리했습니다."}</>;
      }
    }
  }

  const handleClick = (e) => {
    if (finish) return;
    dispatch(setBoard({ idx: +e.target.name, value: player }));
    e.target.disabled = true;
  };

  return (
    <>
      <p>{checkComplete(xlist)}</p>
      <p>{checkComplete(olist)}</p>
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

//3x3 그리드의 Tic Tac Toe 게임판을 구현합니다.

//플레이어는 번갈아가며 게임판의 셀을 클릭하여 자신의 기호(X 또는 O)를 표시할 수 있습니다.

//수평, 수직, 대각선을 이어 자신의 기호가 3개 연결되면, 그 플레이어가 승자
//승자가 결정되면, 게임을 더 이상 진행할 수 없으며, 승자를 알리는 메시지가 표시
