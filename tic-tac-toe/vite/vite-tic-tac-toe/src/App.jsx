import { useDispatch, useSelector } from "react-redux";
import { resetBoard, updateBoard } from "./store/module/game";

function App() {
  const dispatch = useDispatch();
  const { board, winner } = useSelector((state) => state.game);

  const handleClickBoard = (e) => {
    dispatch(updateBoard(+e.target.name));
  };

  const handleResetBtn = () => {
    dispatch(resetBoard());
  };

  return (
    <>
      {winner && <p>{winner}가 승리했습니다.</p>}
      <section className="board">
        {board.map((button, i) => {
          return (
            <button key={i} onClick={handleClickBoard} name={i} disabled={button !== null}>
              {button}
            </button>
          );
        })}
      </section>
      <button className="resetBtn" onClick={handleResetBtn}>
        reset
      </button>
    </>
  );
}

export default App;
