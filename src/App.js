import React from 'react'
import SudokuBoard from './components/SudokuBoard';

export default function App() {

  const [selectedCell, setSelectedCell] = React.useState({x: undefined, y: undefined})

  const sudokuArray = 
    [
      [0, 8, 9, 0, 0, 5, 1, 4, 0],
      [3, 0, 0, 8, 1, 7, 0, 0, 6],
      [7, 1, 0, 6, 0, 4, 3, 8, 0],
      [0, 4, 3, 9, 0, 0, 0, 0, 0],
      [9, 7, 0, 0, 0, 0, 0, 1, 4],
      [0, 0, 0, 0, 0, 8, 7, 3, 0],
      [0, 9, 6, 4, 0, 2, 0, 7, 1],
      [4, 0, 0, 1, 5, 9, 0, 0, 2],
      [0, 2, 1, 7, 0, 0, 4, 9, 0]
    ]
    /*
  const sudokuSolution = 
    [
      [6, 8, 9, 3, 2, 5, 1, 4, 7],
      [3, 5, 4, 8, 1, 7, 9, 2, 6],
      [7, 1, 2, 6, 9, 4, 3, 8, 5],
      [2, 4, 3, 9, 7, 1, 6, 5, 8],
      [9, 7, 8, 5, 6, 3, 2, 1, 4],
      [1, 6, 5, 2, 4, 8, 7, 3, 9],
      [8, 9, 6, 4, 3, 2, 5, 7, 1],
      [4, 3, 7, 1, 5, 9, 8, 6, 2],
      [5, 2, 1, 7, 8, 6, 4, 9, 3]
    ]
*/
  const sudokuNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const sudokuNumbersElements = sudokuNumbers.map((sudokuNumber, index) => {
      return <td className="number-button" key={index}>{sudokuNumber}</td> 
  })

  const handleSelectCell = (x, y) => {
      setSelectedCell({x: x, y: y})
  }

  return (
    <div className="sudoku-container">
        <h1>Sudoku Game</h1>
        <SudokuBoard sudokuArray={sudokuArray} selectedCell={selectedCell} selectCell={handleSelectCell}/>
        <table className="number-buttons">
          <tbody>
            <tr>
              {sudokuNumbersElements}
            </tr>
          </tbody>
        </table>
        <button className="new-game-btn">New Game</button>
    </div>
  );
}