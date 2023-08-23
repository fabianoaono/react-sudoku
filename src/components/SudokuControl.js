import React from 'react'

export default function SudokuControl(props) {

    const sudokuNumbersElements = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((sudokuNumber, index) => {
        return <td className="number-button" key={index}>{sudokuNumber}</td> 
    })

    return (
        <table className="number-buttons">
            <tbody>
                <tr>
                    {sudokuNumbersElements}
                </tr>
            </tbody>
        </table>
    )
}