import React from 'react'
import SudokuBoard from './components/SudokuBoard'
import SudokuControl from './components/SudokuControl'

export default function App() {

  const [selectedCell, setSelectedCell] = React.useState({ row: undefined, col: undefined })

  const detectKeyDown = (e) => {
    if (e.keyCode >= 49 && e.keyCode <= 57) { 
      handleWrite(String.fromCharCode(e.keyCode))
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', detectKeyDown)
    return () => {
      document.removeEventListener('keydown', detectKeyDown);
    };
  }, [detectKeyDown])

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

  const [sudokuObjectsArray, setSudokuObjectsArray] =
    React.useState(sudokuArray.map((sudokuRow) => (
      sudokuRow.map((sudokuCell) => (
        sudokuCell === 0 ?
          {
            value: "",
            fixed: false
          } :
          {
            value: sudokuCell,
            fixed: true
          }
      ))
    )
    )
    )

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

  const handleSelectCell = (x, y) => {
    setSelectedCell({ row: x, col: y })
  }

  const handleWrite = (newValue) => {
    console.log(selectedCell)
    changeCellValue(newValue)
  }

  const handleErase = () => {
    changeCellValue("")
  }

  const changeCellValue = (newValue) => {
    if (selectedCell.row !== undefined && selectedCell.col !== undefined) {
      setSudokuObjectsArray(oldArray => {
        const newArray = [...oldArray]
        const cell = newArray[selectedCell.row][selectedCell.col]
        if (!cell.fixed) {
          cell.value = newValue
        }
        return newArray
      })
    }
  }

  return (
    <div className="sudoku-container">
      <h1>Sudoku Game</h1>
      <SudokuBoard
        sudokuObjectsArray={sudokuObjectsArray}
        selectedCell={selectedCell}
        selectCell={handleSelectCell} />
      <SudokuControl
        write={handleWrite}
        erase={handleErase} />
      <button className="new-game-btn">New Game</button>
    </div>
  );
}