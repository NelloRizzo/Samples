import Menu from "./Menu.js"
import MenuItem from "./MenuItem.js"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <Menu>
                <MenuItem text={'Voce 1'}/>
                <MenuItem text={'Link 2'}/>
            </Menu>
        </div>
    )
}
