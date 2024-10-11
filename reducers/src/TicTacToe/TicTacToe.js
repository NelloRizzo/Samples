import { useReducer } from 'react'
import './TicTacToe.css'
function ShowPlayer({ player }) {
    if (player === -1) return null
    return (
        <div className={`ball ${player === 0 ? 'red' : 'green'}`}></div>
    )
}
function Column({ disabled, player, onClick }) {
    if (disabled)
        return (
            <div className="col" ><ShowPlayer player={player} /></div>
        )
    return (
        <div className="col" onClick={onClick}><ShowPlayer player={player} /></div>
    )
}
function Row({ row, children }) {
    return (
        <div className="row">
            {children}
        </div>
    )
}

/*
    move -> indica che il giocatore corrente ha effettuato una mossa
    reset -> riavvia la partita
*/
function reducer(state, action) {
    const grid = [...state.grid]
    if (action.type === 'move') {
        grid[action.position.row][action.position.col] = state.player
        let win = grid[0][0] === grid[0][1] && grid[0][0] === grid[0][2]
        return { ...state, grid: grid, player: (state.player + 1) % 2, win: win }
    }
}
function initState() {
    return { grid: [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]], player: 0, win: false }
}
export function TicTacToe() {
    const [state, dispatch] = useReducer(reducer, { grid: null, player: 0, win: false }, initState)
    return (
        <div className="container">
            <div>Player Corrente: Giocatore {state.player + 1} Vittoria: {state.win ? 'SI' : 'NO'}</div>
            {[0, 1, 2].map(r =>
                <Row row={r}>
                    {[0, 1, 2].map(c =>
                        <Column disabled={state.win || state.grid[r][c] > -1} onClick={() => dispatch({ type: 'move', position: { col: c, row: r } })} player={state.grid && state.grid[r][c]} />
                    )}
                </Row>
            )}
        </div>
    )
}