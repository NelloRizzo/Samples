import { useState, useEffect } from 'react'
import './Effect.css'

function ShowSelected({ selected }) {
    const [person, setPerson] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://swapi.dev/api/people/${selected}`)
            const data = await response.json()
            setPerson(data)
        }
        fetchData()
    }, [selected])
    if (selected)
        return (
            <div>
                <h1>Selezionato</h1>
                <div>Name: {person.name}</div>
                <div>Gender: {person.gender}</div>
                <div>Hair color: {person.hair_color}</div>
                <div>Homeworld: {person.homeworld}</div>
            </div>
        )

}
export default function Effect() {
    /*    const people = [
            { name: 'Paperino', gender: 'male', hair_color: 'blond' },
            { name: 'Paperone', gender: 'male', hair_color: 'white' },
            { name: 'Paperina', gender: 'female', hair_color: 'black' },
        ]*/
    const [people, setPeople] = useState(null)
    const [selected, setSelected] = useState(null)
    const [link, setLink] = useState('')
    const [url, setUrl] = useState('https://swapi.dev/api/people/?page=1')
    useEffect(() => {
        const fetchData = () => {
            fetch(url)
                .then(r => r.json())
                .then(r => {
                    setLink(r.next)
                    setPeople(r.results)
                })
        }
        fetchData()
    }, [url])
    if (!people)
        return <div>Caricamento in corso...</div>

    return (
        <div className="container">
            <h1 className="text-center">People List</h1>
            <button type='button' onClick={() => setUrl(link)}>Prossima pagina</button>
            {people.map((person, index) => (
                <div className="row" onClick={() => setSelected(index + 1)}>
                    <div>{person.name}</div>
                    <div>{person.gender}</div>
                    <div>{person.hair_color}</div>
                </div>
            ))}
            <ShowSelected selected={selected} />
        </div>
    )
}
