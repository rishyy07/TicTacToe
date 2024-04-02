import { useState } from 'react'
import './App.css'

function App() {
  const [mark, setMark] = useState([null, null, null, null, null, null, null, null, null]);
  const [flag, setFlag] = useState(true);
  const [winner, setWinner] = useState("No winner");

  function checkWinner(mark) {
    // let arr = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
    let winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
    let res = "draw";
    winner.forEach((w) => {
      if (mark[w[0]] && mark[w[0]] == mark[w[1]] && mark[w[0]] == mark[w[2]]) {
        res = mark[w[0]];
      }
    })
    setWinner(res);
  }
  function markChangeHandler(index) {
    // setMark("X");
    let newMark = [...mark];
    if (mark[index] == null) {
      newMark[index] = flag ? 'X' : 'O';
      setFlag(!flag);
      setMark(newMark);
      checkWinner(newMark)

    }


  }
  return (

    <>
      <h1>tic-tac-toe</h1>
      <div classname="board">
        <div>
          <button onClick={() => markChangeHandler(0)} style={{ width: "50px", height: "50px" }}>1{mark[0]}</button>
          <button onClick={() => markChangeHandler(1)} style={{ width: "50px", height: "50px" }}>2{mark[1]}</button>
          <button onClick={() => markChangeHandler(2)} style={{ width: "50px", height: "50px" }}>3{mark[2]}</button>

        </div>
        <div>
          <button onClick={() => markChangeHandler(3)} style={{ width: "50px", height: "50px" }}>4{mark[3]}</button>
          <button onClick={() => markChangeHandler(4)} style={{ width: "50px", height: "50px" }}>5{mark[4]}</button>
          <button onClick={() => markChangeHandler(5)} style={{ width: "50px", height: "50px" }}>6{mark[5]}</button>

        </div>
        <div>
          <button onClick={() => markChangeHandler(6)} style={{ width: "50px", height: "50px" }}>7{mark[6]}</button>
          <button onClick={() => markChangeHandler(7)} style={{ width: "50px", height: "50px" }}>8{mark[7]}</button>
          <button onClick={() => markChangeHandler(8)} style={{ width: "50px", height: "50px" }}>9{mark[8]}</button>

        </div>
        <h1> Winner:{winner}</h1>


      </div>
    </>
  );
}

export default App
