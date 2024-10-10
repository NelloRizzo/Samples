import './Calculator.css'
import { useState } from 'react'

function Display({ value }) {
    return (
        <div className='display'>{value}</div>
    )
}
function Digit({ n, digitClick }) {
    return (
        <div className='button' onClick={() => digitClick(n)}>{n}</div>
    )
}
function Keyboard(props) {
    return (
        <div className='keyboard'>
            <div className='row'>
            </div>
            <div className='row'>
                <div className='button specials' onClick={props.clickOnC}>C</div>
                <div className='button specials' onClick={props.clickOnCE}>CE</div>
                <div className='empty-space'></div>
                <div className='button op' onClick={() => props.operatorClick('/')}>&divide;</div>
            </div>
            <div className='row'>
                {[7, 8, 9].map(v => <Digit n={v} digitClick={props.digitClick} />)}
                <div className='button op' onClick={() => props.operatorClick('*')}>&times;</div>
            </div>
            <div className='row'>
                {[4, 5, 6].map(v => <Digit n={v} digitClick={props.digitClick} />)}
                <div className='button op' onClick={() => props.operatorClick('+')}>+</div>
            </div>
            <div className='row'>
                {[1, 2, 3].map(v => <Digit n={v} digitClick={props.digitClick} />)}
                <div className='button op' onClick={() => props.operatorClick('-')}>-</div>
            </div>
            <div className='row'>
                <div className='button' onClick={props.changeSignum}>&plusmn;</div>
                <div className='button' onClick={props.zeroClicked}>0</div>
                <div className='button' onClick={props.commaClicked}>,</div>
                <div className='button op' onClick={() => props.operatorClick('=')}>=</div>
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
    function handleC() {
        setDisplay('0.0')
        setValue(0)
        setOperator('=')
        setMustClear(true)
    }
    function handleCE() {
        setDisplay('0.0')
        setMustClear(true)
    }
    function clickOnComma() {
        let actual = mustClear ? '' : display
        if (actual.indexOf('.') < 0) {
            setDisplay(actual + '.')
        }
    }
    function changeSignum() {
        let actual = mustClear ? '' : display
        if (actual.length > 0) {
            setDisplay(-1 * actual)
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
                clickOnC={handleC}
                clickOnCE={handleCE}
                digitClick={digitClicked}
                operatorClick={executeOperation}
                commaClicked={clickOnComma}
                zeroClicked={clickOnZero}
                changeSignum={changeSignum} />
        </div>
    )
}