export default function Row({ target, number }) {
    return (
        <tr>
            <td>{number}</td>
            <td>&times;</td>
            <td>{target}</td>
            <td>=</td>
            <td>{number * target}</td>
        </tr>
    )
}