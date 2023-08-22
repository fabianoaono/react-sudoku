export default function App() {
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

  const sudokuNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const sudokuObjectsArray = sudokuArray.map((sudokuRow) => (
      sudokuRow.map((sudokuCell) => (
        sudokuCell === 0 ? 
        {
          value: "",
          fixed: true
        } :
        {
          value: sudokuCell,
          fixed: false
        }
      ))
    )
  )

  const sudokuElements = sudokuObjectsArray.map((sudokuRow, rowIndex) => (
    <tr key={rowIndex}>
      {sudokuRow.map((sudokuCell, colIndex) => {
        const className = sudokuCell.fixed ? "sudoku-cell" : "sudoku-cell fixed"
        return (
          <td className={className} key={colIndex}>
            {sudokuCell.value}
          </td>
        )
      })}
    </tr>
  ))  

  const sudokuNumbersElements = sudokuNumbers.map(sudokuNumber => {
      return <td className="number-button">{sudokuNumber}</td> 
  })


  return (
    <div className="sudoku-container">
        <h1>Sudoku Game</h1>
        <table className="sudoku-board">
          <tbody>
            {sudokuElements}
          </tbody>
        </table>
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