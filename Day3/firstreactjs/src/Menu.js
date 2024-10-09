import MenuItem from "./MenuItem.js"
import './Menu.css'

export default function Menu({children}) {
//    const items = ["Voce 1", "Voce 2", "Voce 3", "Voce 4"]
    return (
        <ul className="menu">
            {children}
        </ul>
    )
}