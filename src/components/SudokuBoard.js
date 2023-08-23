import React from 'react'

export default function SudokuBoard(props) {

    const sudokuObjectsArray = props.sudokuArray.map((sudokuRow) => (
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
          let className = sudokuCell.fixed ? "sudoku-cell" : "sudoku-cell fixed"
          if (rowIndex === props.selectedCell.x && colIndex === props.selectedCell.y) {
            className += " selected-cell"
          }
          return (
            <td className={className} key={colIndex} onClick={() => props.selectCell(rowIndex, colIndex)}>
              {sudokuCell.value}
            </td>
          )
        })}
      </tr>
    ))  

    return (
        <table className="sudoku-board">
          <tbody>
            {sudokuElements}
          </tbody>
        </table>
    )
}