import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseconfig from './firebase.config'
import logo from '../../logo.png'
import './auth.css'
import { useHistory, useLocation } from 'react-router'
import { useContext } from 'react'
import { UserContext } from '../../App'

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
                    <img src={logo} width="250px" alt="" />
                </div>
                <div className="text-center p-5 m-5 login">
                    <h3 className="pt-5 mt-5 pb-5">Login With</h3>
                    <div className="d-flex justify-content-around">
                        <i>logo</i>
                        <p><button onClick={handleSignIn} className="btn btn-light">Continue with Google</button></p>
                        <div></div>
                    </div>
                    <p className="pb-5">Dont't have an account? <a href="/signup">Create an account</a></p>
                </div>
            </div>
        </>
    )
}

export default SignIn
