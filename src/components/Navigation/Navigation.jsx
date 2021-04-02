import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import logo from '../../logo.png'
import './Navigation.css'

const Navigation = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const openNav = () => {
        const nav = document.getElementById('sideNav')
        nav.style.width = '40%'
    }
    const closeNav = () => {
        const nav = document.getElementById('sideNav')
        nav.style.width = '0'
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="myNav d-flex justify-content-between">
                    <div className="navbar-brand">
                        <Link to="/"><img src={logo} width="150px" alt="logo" /></Link>
                    </div>
                    <div><span className="openBtn" onClick={openNav}>&#9776;</span></div>
                    <ul className="navbar-nav mobileNav" id="sideNav">
                        <a href="javascript:void(0)" class="closeBtn" onClick={closeNav}>&times;</a>
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
