import Number from "../Number/Number.js"
import './Row.css'
export default function Row({ rowNumber, drawn }) {
    return (
        <tr>
            {Array.from({ length: 10 }, (_, i) => i + (rowNumber * 10) + 1).map(i => {
                return (
                    <td><Number key={i} value={i} drawn={drawn?.indexOf(i) > -1} /></td>
                )
            })}
        </tr >
    )
}