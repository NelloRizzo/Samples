import './GameControls.css'

function GameReady({ start }) {
    return (
        <button type="button" onClick={start}>Inizia Partita</button>
    )
}
function GameRunning({ extract, end }) {
    return (
        <>
            <button type='button' onClick={() => extract()}>Estrai</button>
            <button type='button' onClick={() => end()}>Termina Partita</button>
        </>
    )
}
export default function GameControls({ status, onStart, onExtract, onEnd }) {
    if (status === 0)
        return <GameReady start={onStart}/>
    return <GameRunning extract={onExtract} end={onEnd}/>
}