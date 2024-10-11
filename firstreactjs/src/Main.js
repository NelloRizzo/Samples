export default function Main({ name, children }) {
    return (
        <div>
            <div className='main'>
                <p>Ciao, {name}, e benvenuto nella mia prima app React!</p>
                {Array.from({ length: 5 }, (_, p) => p).map(v =>
                    <p>Questo è il {v + 1}^ paragrafo generato dinamicamente</p>
                )}
            </div>
            {children}
        </div>
    )
}
