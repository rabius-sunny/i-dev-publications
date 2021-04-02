import logo from '../../logo.png'
import { Link } from 'react-router-dom'
import './admin.css'

const Sidebar = props => {
    const sideBar = document.getElementById('sideBar');
    const hideBtn = document.getElementById('closeBtn2')
    if (props.isEnable) {
        sideBar.style.width = '250px';
        hideBtn.style.display = 'block'
    }
    const disable = () => {
        sideBar.style.width = '0'
        hideBtn.style.display = 'none'
        props.setIsEnable(!props.isEnable)
    }

    return (
        <div className="sideBar ps-4 pt-3" id="sideBar">
            <button id="closeBtn2" onClick={disable}>&times;</button>
            <Link to="/"><img src={logo} alt="logo" width="150px" /></Link>
            <Link to="/admin">Manage Books</Link>
            <Link to="/create"> + Add Book</Link>
            <Link to="/">Edit Book</Link>
        </div>
    )
}

export default Sidebar
