import Row from '../Row/Row.js'
import Number from '../Number/Number.js'
import GameControls from '../GameControls/GameControls.js'
import { useState } from 'react'
import './Table.css'
import NumbersBag from '../NumbersBag/NumbersBag.js'
export default function Table({ drawn }) {
    const bag = new NumbersBag()
    bag.shuffle()
    const [state, setState] = useState({ status: 0, drawn: [], bag: bag })
    return (
        <table>
            <thead>
                <tr>
                    <td colspan="10" className='text-center'>
                        <GameControls status={state.status}
                            onEnd={() => setState(s => ({ ...s, status: 0 }))}
                            onExtract={() => {
                                state.bag.draw();
                                setState(s => ({ ...s, bag: state.bag, drawn: state.bag.drawn() }))
                            }}
                            onStart={() => {
                                console.log(state)
                                setState(s => ({ ...s, status: 1 }))
                            }}
                        />
                    </td>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: 9 }, (_, i) => i).map(v =>
                    <Row key={v} rowNumber={v} >
                        {Array.from({ length: 10 }, (_, i) => i + (v * 10) + 1).map(i => {
                            return (
                                <td key={i}><Number key={i} value={i} drawn={state.drawn?.indexOf(i) > -1} /></td>
                            )
                        })}
                    </Row>
                )}
            </tbody>
        </table>
    )
}