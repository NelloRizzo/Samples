import './Calculator.css'
import { useState } from 'react'

function Display({ value }) {
    return (
        <div className='display'>{value}</div>
    )
}
function Keyboard({ digitClick, zeroClicked, operatorClick }) {
    return (
        <div className='keyboard'>
            <div className='row'>
            </div>
            <div className='row'>
                <div className='button specials'>C</div>
                <div className='button specials'>CE</div>
                <div className='empty-space'></div>
                <div className='button op' onClick={() => operatorClick('/')}>&divide;</div>
            </div>
            <div className='row'>
                <div className='button' onClick={() => digitClick(7)}>7</div>
                <div className='button' onClick={() => digitClick(8)}>8</div>
                <div className='button' onClick={() => digitClick(9)}>9</div>
                <div className='button op' onClick={() => operatorClick('*')}>&times;</div>
            </div>
            <div className='row'>
                <div className='button' onClick={() => digitClick(4)}>4</div>
                <div className='button' onClick={() => digitClick(5)}>5</div>
                <div className='button' onClick={() => digitClick(6)}>6</div>
                <div className='button op' onClick={() => operatorClick('+')}>+</div>
            </div>
            <div className='row'>
                <div className='button' onClick={() => digitClick(1)}>1</div>
                <div className='button' onClick={() => digitClick(2)}>2</div>
                <div className='button' onClick={() => digitClick(3)}>3</div>
                <div className='button op' onClick={() => operatorClick('-')}>-</div>
            </div>
            <div className='row'>
                <div className='button'></div>
                <div className='button' onClick={zeroClicked}>0</div>
                <div className='button'>,</div>
                <div className='button op' onClick={() => operatorClick('=')}>=</div>
            </div>
        </div>
    )
}
export default function Calculator() {
    const [display, setDisplay] = useState('0.0')
    const [mustClear, setMustClear] = useState(true)
    const [operator, setOperator] = useState('=')
    const [value, setValue] = useState(0)
    function digitClicked(d) {
        let actual = mustClear ? '' : display
        actual += d
        setMustClear(false)
        setDisplay(actual)
    }
    function clickOnZero() {
        let actual = mustClear ? '' : display
        if (actual.length > 0) actual += '0'
        if (actual.length == 0) {
            actual = '0.0'
            setMustClear(true)
        }
        else {
            setDisplay(actual)
            setMustClear(false)
        }
    }
    function executeOperation(op) {
        let actual = 1 * display
        switch (operator) {
            case '+': actual = value + actual; break;
            case '-': actual = value - actual; break;
            case '*': actual = value * actual; break;
            case '/': actual = value / actual; break;
        }
        setDisplay(actual)
        setValue(actual)
        setOperator(op)
        setMustClear(true)
    }
    return (
        <div className='calc'>
            <Display value={display} />
            <Keyboard
                digitClick={digitClicked}
                operatorClick={executeOperation}
                zeroClicked={clickOnZero} />
        </div>
    )
}