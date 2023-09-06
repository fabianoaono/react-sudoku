import React from 'react'
import SudokuBoard from './components/SudokuBoard'
import SudokuControl from './components/SudokuControl'
import JSConfetti from 'js-confetti'

export default function App() {

  const [selectedCell, setSelectedCell] = React.useState({ row: undefined, col: undefined })

  const [gameOver, setGameOver] = React.useState(false)

  const [markMode, setMarkMode] = React.useState(false)

  const acceptedKeyInputs = {
    1() {
      changeCellValue(1)
    },
    2() {
      changeCellValue(2)
    },
    3() {
      changeCellValue(3)
    },
    4() {
      changeCellValue(4)
    },
    5() {
      changeCellValue(5)
    },
    6() {
      changeCellValue(6)
    },
    7() {
      changeCellValue(7)
    },
    8() {
      changeCellValue(8)
    },
    9() {
      changeCellValue(9)
    },
    Backspace() {
      changeCellValue("")
    },
    " "() {
      changeCellValue("")
    },
    ArrowUp() {
      changeSelectedCell(selectedCell.row - 1, selectedCell.col)
    },
    ArrowDown() {
      changeSelectedCell(selectedCell.row + 1, selectedCell.col)
    },
    ArrowLeft() {
      changeSelectedCell(selectedCell.row, selectedCell.col - 1)
    },
    ArrowRight() {
      changeSelectedCell(selectedCell.row, selectedCell.col + 1)
    },
    M() {
      invertMark()
    },
    m() {
      invertMark()
    }
  }

  const detectKeyDown = (e) => {
    //console.log(e)
    const command = acceptedKeyInputs[e.key]
    if (command) {
      command()
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', detectKeyDown)
    return () => {
      document.removeEventListener('keydown', detectKeyDown);
    };
  }, [detectKeyDown])

  const sudokuGrid = {
    values:
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
      ],
    solution:
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
  }

  const [sudokuObjectsArray, setSudokuObjectsArray] =
    React.useState(sudokuGrid.values.map((sudokuRow) => (
      sudokuRow.map((sudokuCell) => (
        sudokuCell === 0 ?
          {
            value: "",
            fixed: false,
            marked: false,
            markValues: []
          } :
          {
            value: sudokuCell,
            fixed: true,
            marked: false,
            markValues: []
          }
      ))
    )
    )
    )

  const jsConfetti = new JSConfetti()

  React.useEffect(() => {
    if (checkGameOver()) {
      console.log('You Won')
      jsConfetti.addConfetti()
      setGameOver(true)
    }
  }, [sudokuObjectsArray])

  const handleSelectCell = (x, y) => {
    changeSelectedCell(x, y)
  }

  const handleWrite = (newValue) => {
    changeCellValue(newValue)
  }

  const handleErase = () => {
    changeCellValue("")
  }

  const handleToggleMark = () => {
    invertMark()
  }

  const invertMark = () => {
    setMarkMode(oldMark => !oldMark)
  }

  const changeSelectedCell = (x, y) => {
    if (!gameOver && x >= 0 && x <= 8 && y >= 0 && y <= 8) {
      setSelectedCell({ row: x, col: y })
    }
  }

  const changeCellValue = (newValue) => {
    if (!gameOver && selectedCell.row !== undefined && selectedCell.col !== undefined) {
      setSudokuObjectsArray(oldArray => {
        const newArray = [...oldArray]
        const cell = newArray[selectedCell.row][selectedCell.col]
        if (!cell.fixed) {
          if (newValue === "") {
            cell.value = ""
            cell.markValues = []
          } else {
            cell.marked = markMode
            if (markMode) {
              if (cell.markValues.includes(newValue)) {
                cell.markValues = cell.markValues.filter(value => value !== newValue)
              } else {
                cell.markValues.push(newValue)
              }
            } else {
              cell.markValues = []
              cell.value = newValue
            }
          }
        }
        return newArray
      })
    }
  }

  const checkGameOver = () => {
    return sudokuObjectsArray.every((row, rowIndex) => {
      return row.every((cell, colIndex) => {
        return cell.fixed || cell.value === sudokuGrid.solution[rowIndex][colIndex]
      })
    })
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
        erase={handleErase}
        markMode={markMode}
        toggleMark={handleToggleMark} />
      <button className="new-game-btn">New Game</button>
    </div>
  );
}