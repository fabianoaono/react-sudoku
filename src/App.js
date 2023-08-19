export default function App() {
  const sudokuArray = 
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ]

  const sudokuNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const sudokuElements = sudokuArray.map(sudokuRow => {
    return sudokuRow.map(sudokuCell => {
      return <div class="sudoku-cell">{sudokuCell}</div>
    })
  })

  const sudokuNumbersElements = sudokuNumbers.map(sudokuNumber => {
    return <button class="number-button">{sudokuNumber}</button>
  })


  return (
    <div className="sudoku-container">
        <h1>Sudoku Game</h1>
        <div class="sudoku-board">
            {sudokuElements}            
        </div>
        <div class="number-buttons">
            {sudokuNumbersElements}
        </div>
        <button class="new-game-btn">New Game</button>
    </div>
  );
}