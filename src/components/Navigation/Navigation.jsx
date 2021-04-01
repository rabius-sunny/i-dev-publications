import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import logo from '../../logo.png'
import './Navigation.css'

const Navigation = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/"><img src={logo} width="150px" alt="logo" /></Link>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item ps-4"><Link to="/home" className="nav-link">Home</Link></li>
                        <li className="nav-item ps-4"><Link to="/orders" className="nav-link">Orders</Link></li>
                        <li className="nav-item ps-4"><Link to="/admin" className="nav-link">Admin</Link></li>
                        <li className="nav-item ps-4"><Link to="/Deals" className="nav-link">Deals</Link></li>
                        <li className="nav-item ps-4">{
                            loggedInUser.email ? <img src={loggedInUser.photo} alt="profile" /> :
                                <Link to="/sign-in"><button className="btn btn-info">Login</button></Link>
                        }</li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navigation
