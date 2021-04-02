import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseconfig from './firebase.config'
import logo from '../../logo.png'
import './auth.css'
import { useHistory, useLocation } from 'react-router'
import { useContext } from 'react'
import { UserContext } from '../../App'
import { Link } from 'react-router-dom'

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseconfig)
}

const SignIn = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const provider = new firebase.auth.GoogleAuthProvider()
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: '/' } }

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user
                setLoggedInUser({
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                })
                history.replace(from)
            })
            .catch(err => console.log(err.message))
    }
    return (
        <>
            <div className="container">
                <div className="mt-5 mb-5 text-center header">
                    <Link to='/'><img src={logo} width="250px" alt="" /></Link>
                </div>
                <div className="login">
                    <h3 className="p-5">Login</h3>
                    <div className="pe-5 ps-5">
                        <label htmlFor="myInput">Username</label>
                        <input type="text" id="myInput" />
                        <label htmlFor="myInput">Password</label>
                        <input type="password" id="myInput" />
                        <div className="d-flex justify-content-between">
                            <div>
                                <input type="checkbox" id="check" className="me-2" />
                                <label htmlFor="check">Remember me</label>
                            </div>
                            <p className="text-primary">Forgot Password</p>
                        </div>
                        <button className="btn btn-primary w-100">Login</button>
                        <p className="text-center pb-2 pt-4">Dont't have an account? <a href="/sign-up">Create an account</a></p>
                    </div>
                    <div className="text-center pb-5">_______________ Or _______________</div>
                    <div className="text-center d-flex justify-content-between align-items-center signInBtn">
                        <i className="fab fa-google gl"></i>
                        <p><button onClick={handleSignIn} className="btn btn-white text-primary text-decoration-underline" style={{ marginBottom: '-15px' }}>Continue with Google</button></p>
                        <div></div>
                    </div>
                    <div className="text-center d-flex justify-content-between align-items-center signInBtn">
                        <i className="fab fa-facebook fb"></i>
                        <p><button onClick={handleSignIn} className="btn btn-white text-primary text-decoration-underline" style={{ marginBottom: '-15px' }}>Continue with Facebook</button></p>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn
