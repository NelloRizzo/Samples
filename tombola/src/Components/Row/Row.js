import './Row.css'
export default function Row({ rowNumber, children }) {
    return (
        <tr key={`Row${rowNumber}`}>
            {children}
        </tr >
    )
}