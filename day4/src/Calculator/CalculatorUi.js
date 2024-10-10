import Calculator from "./Calculator.js"
import './CalculatorUi.css'

export default function CalculatorUI() {
    return (
        <div className="container">
            <h1>Calculator</h1>
            <Calculator />
        </div>
    )
}