import { useReducer, useState } from "react"
/*
azioni:
    cambiamento del primo operando
    { type: 'first-changed', value: valore_primo_operando }
    cambiamento del secondo operando
    { type: 'second-changed', value: valore_secondo_operando }
    cambiamento dell'operazione
    { type: 'operation-changed', value: operazione }
    esecuzione del calcolo
    { type: 'calculate' }
*/
function reducer(state, action) {
    console.log(state)
    if (action.type === 'first-changed')
        return { ...state, first: action.value }
    if (action.type === 'second-changed')
        return { ...state, second: action.value }
    if (action.type === 'operation-changed')
        return { ...state, op: action.value }
    if (action.type === 'calculate') {
        let result = 1 * state.first
        switch (state.op) {
            case '+': result += 1 * state.second; break;
            case '-': result -= state.second; break;
            case '*': result *= state.second; break;
            case '/': result /= state.second; break;
            case '%': result %= state.second; break;
            default: throw new Error("Invalid operation: " + state.op)
        }
        return { ...state, result: result }
    }
}
export default function Calculator() {
    const [state, dispatch] = useReducer(reducer, { first: 0, second: 0, op: '', result: 0 })
    return (
        <div>
            <div>Primo operando
                <input type="number" value={state.first}
                    onChange={(e) => dispatch({ type: 'first-changed', value: e.target.value })} /></div>
            <div>Operazione <select onChange={(e) => dispatch({ type: 'operation-changed', value: e.target.value })}>
                <option value='+'>addizione</option>
                <option value='-'>sottrazione</option>
                <option value='*'>moltiplicazione</option>
                <option value='/'>divisione</option>
                <option value='%'>modulo</option>
                <option value='?'>non contemplato</option>
            </select></div>
            <div>Secondo operando <input value={state.second}
                onChange={(e) => dispatch({ type: 'second-changed', value: e.target.value })} />
            </div>
            <div><button type="button" onClick={() => dispatch({ type: 'calculate' })}>Esegui</button></div>
            <div>Risultato: {state.result}</div>
        </div >
    )
}