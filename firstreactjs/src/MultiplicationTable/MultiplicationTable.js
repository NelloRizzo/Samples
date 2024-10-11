import Row from "./Row.js"
export default function MultiplicationTable({ number }) {
    number = number ?? 1
    return (
        <div>
            <h1>Tabellina del {number}</h1>
            <table>
                <tbody>
                    {Array.from({ length: 10 }, (_, p) => p + 1).map(v =>
                        <Row key={v} target={v} number={number} />
                    )}
                </tbody>
            </table>
        </div>
    )
}