import './MenuItem.css'
export default function MenuItem({ text }) {
    return (
        <li className="menu-item"><a href='#'>{text}</a></li>
    )
}