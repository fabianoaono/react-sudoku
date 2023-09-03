import React from 'react'

export default function SudokuBoard(props) {

    const createMarkedElements = (markValues => {
        const marks = []
        for (let i = 1; i <= 9; i++) {
            marks.push(<div className="mark" key={i}>{markValues.includes(i) ? i : ""}</div>)
        }

        return (
            <div className="marked-cell">
                {marks}
            </div>
        )
    })

    const sudokuElements = props.sudokuObjectsArray.map((sudokuRow, rowIndex) => (
        <tr key={rowIndex}>
            {sudokuRow.map((sudokuCell, colIndex) => {
                let className = sudokuCell.fixed ? "sudoku-cell fixed" : "sudoku-cell"
                if (rowIndex === props.selectedCell.row && colIndex === props.selectedCell.col) {
                    className += " selected-cell"
                }

                let markedElements = []
                if (sudokuCell.marked) {
                    markedElements = createMarkedElements(sudokuCell.markValues)
                }
                return (
                    <td className={className} key={colIndex} onClick={() => props.selectCell(rowIndex, colIndex)}>
                        {sudokuCell.marked ? markedElements : sudokuCell.value}
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