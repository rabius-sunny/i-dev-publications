import logo from '../../logo.png'
import { Link } from 'react-router-dom'
import './admin.css'
const Sidebar = () => {
    return (
        <div className="sideBar ps-4 pt-3">
            <Link to="/"><img src={logo} alt="logo" width="150px" /></Link>
            <Link to="/admin">Manage Books</Link>
            <Link to="/create"> + Add Book</Link>
            <Link to="/">Edit Book</Link>
        </div>
    )
}

export default Sidebar
