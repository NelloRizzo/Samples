import Row from '../Row/Row.js'
import './Table.css'
export default function Table({ drawn }) {
    return (
        <table>
            <tbody>
                {Array.from({ length: 9 }, (_, i) => i).map(v =>
                    <Row key={v} rowNumber={v} drawn={drawn} />
                )}
            </tbody>
        </table>
    )
}