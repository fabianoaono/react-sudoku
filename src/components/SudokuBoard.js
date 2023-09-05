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

    const selectedRow = props.selectedCell.row
    const selectedCol = props.selectedCell.col

    const getClassName = ((sudokuCell, row, col) => {
        let className = sudokuCell.fixed ? "sudoku-cell fixed" : "sudoku-cell"
        if (isSelectedCell(row, col)) {
            className += " selected-cell"
        } else if (isSameRow(row) || isSameCol(col) || isSameSquare(row, col)) {
            className += " same-group-cell"
        }
        return className
    })

    const isSameRow = (row => {
        return row === selectedRow
    })

    const isSameCol = (col => {
        return col === selectedCol
    })

    const isSelectedCell = (row, col) => {
        return isSameRow(row) && isSameCol(col)
    }

    const isSameSquare = (row, col) => {
        const selectedRowSquare = Math.floor(selectedRow / 3)
        const selectedColSquare = Math.floor(selectedCol / 3)
        const rowSquare = Math.floor(row / 3)
        const colSquare = Math.floor(col / 3)
        return (rowSquare === selectedRowSquare && colSquare === selectedColSquare)
    }

    const sudokuElements = props.sudokuObjectsArray.map((sudokuRow, rowIndex) => (
        <tr key={rowIndex}>
            {sudokuRow.map((sudokuCell, colIndex) => {
                let className = getClassName(sudokuCell, rowIndex, colIndex)
                
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