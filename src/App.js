import React from 'react';
import './style.css';
import Square from './Square/Sqaure.js';

export default function App() {
  const [state, setState] = React.useState(Array(9).fill(null));
  const [isXTurn, setisXTurn] = React.useState(true);
  console.log(state);
  function handleClick(index) {
    const copyState = [...state];
    copyState[index] = isXTurn ? 'X' : '0';
    setState(copyState);
    setisXTurn(!isXTurn);
  }

  function checkWinner() {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  }
  const isWinner = checkWinner();
  // [X,null,null,null]
  // let array=[x,null,null]
  return (
    <div className="board-container">
      { isWinner ? (
        < div className="Title">  {isWinner} won the Game
        <button className="Reset" onClick={()=>setState(Array(9).fill(null))}> Play Again</button>
        </div>
      ) : (
        <>
       
          <h4 className="Title"> Player {isXTurn ? "X" : "0"}  Please move</h4>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
          <button className="Reset" onClick={()=>setState(Array(9).fill(null))}> Play Again</button>
        </>
      )}
    </div>
  );
}
