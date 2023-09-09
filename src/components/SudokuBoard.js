import React from 'react'

export default function SudokuBoard(props) {

    const selectedRow = props.selectedCell.row
    const selectedCol = props.selectedCell.col
    const selectedValue = selectedRow !== undefined && 
        selectedCol !== undefined? 
        props.sudokuObjectsArray[selectedRow][selectedCol].value :
        undefined

    const getCellClassName = ((sudokuCell, row, col) => {
        let className = sudokuCell.fixed ? "sudoku-cell fixed" : "sudoku-cell"
        if (isSelectedCell(row, col)) {
            className += " selected-cell"
        } else if (isSameValue(row, col)) {
            className += " same-value-cell"
        } else if (isSameRow(row) || isSameCol(col) || isSameSquare(row, col)) {
            className += " same-group-cell"
        } 
        console.log(sudokuCell)
        if (!isCorrectValue(sudokuCell)) {
            className += " wrong-value"
        }
        return className
    })

    const getMarkClassName = ((containsValue, value) => {
        return selectedValue && containsValue && value === selectedValue ?
            "mark same-value-mark" :
            "mark"
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

    const isSameValue = (row, col) => {
        return selectedValue && props.sudokuObjectsArray[row][col].value === selectedValue
    }

    const isCorrectValue = (sudokuCell) => {
        return sudokuCell.marked || sudokuCell.value === sudokuCell.solution
    }

    const createMarkedElements = (markValues => {
        const marks = []

        for (let i = 1; i <= 9; i++) {
            const containsValue = markValues.includes(i)
            let className = getMarkClassName(containsValue, i)
            marks.push(<div className={className} key={i}>{containsValue ? i : ""}</div>)
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
                let className = getCellClassName(sudokuCell, rowIndex, colIndex)
                
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