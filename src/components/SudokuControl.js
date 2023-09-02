import React from 'react'

export default function SudokuControl(props) {

    const sudokuNumbersElements = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((sudokuNumber, index) => {
        return <td className="control-button" key={index}
            onClick={() => props.write(sudokuNumber)}>{sudokuNumber}</td>
    })

    let classNameMarkMode = props.markMode ? "control-button active" : "control-button"

    return (
        <table className="control-buttons">
            <tbody>
                <tr>
                    {sudokuNumbersElements}
                </tr>
                <tr>
                    <td colSpan="3"></td>
                    <td className="control-button" colSpan="3" onClick={() => props.erase()}>Erase</td>
                    <td className={classNameMarkMode} colSpan="3" onClick={() => props.toggleMark()}>Mark</td>
                </tr>
            </tbody>
        </table>
    )
}