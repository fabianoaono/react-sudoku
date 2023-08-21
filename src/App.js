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

  const sudokuElements = sudokuArray.map((sudokuRow, rowIndex) => (
    <tr key={rowIndex}>
      {sudokuRow.map((sudokuCell, colIndex) => (
        <td className="sudoku-cell" key={colIndex}>
          {sudokuCell}
        </td>
      ))}
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