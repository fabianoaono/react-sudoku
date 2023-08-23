import React from 'react'

export default function SudokuBoard(props) {

    const sudokuElements = props.sudokuObjectsArray.map((sudokuRow, rowIndex) => (
        <tr key={rowIndex}>
            {sudokuRow.map((sudokuCell, colIndex) => {
                let className = sudokuCell.fixed ? "sudoku-cell fixed" : "sudoku-cell"
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