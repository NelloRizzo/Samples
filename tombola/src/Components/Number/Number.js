import './Number.css'
export default function Number({ value, drawn }) {
    return (
        <span className={`number ${drawn ? 'drawn' : ''}`}>
            {value}
        </span>
    )
}