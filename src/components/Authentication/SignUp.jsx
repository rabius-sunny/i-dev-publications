import { Link } from 'react-router-dom'
import logo from '../../logo.png'
import './auth.css'
const SignUp = () => {
    return (
        <>
            <div className="container">
                <div className="mt-5 mb-5 text-center header">
                    <Link to='/'><img src={logo} width="250px" alt="" /></Link>
                </div>
                <div className="login">
                    <h3 className="p-5">Create an Account</h3>
                    <div className="pe-5 ps-5">
                        <label htmlFor="myInput">Name</label>
                        <input type="text" id="myInput" />
                        <label htmlFor="myInput">Username</label>
                        <input type="text" id="myInput" />
                        <label htmlFor="myInput">Password</label>
                        <input type="password" id="myInput" />
                        <label htmlFor="myInput">Confirm Password</label>
                        <input type="password" id="myInput" />
                        <button className="btn btn-primary w-100">Create Account</button>
                        <p className="text-center pb-2 pt-4">Already have an Account? <a href="/sign-in">Login Here</a></p>
                    </div>
                    <div className="text-center pb-5">_______________ Or _______________</div>
                    <div className="text-center d-flex justify-content-between align-items-center signInBtn">
                        <i className="fab fa-google gl"></i>
                        <p><button className="btn btn-white text-primary text-decoration-underline" style={{ marginBottom: '-15px' }}>Continue with Google</button></p>
                        <div></div>
                    </div>
                    <div className="text-center d-flex justify-content-between align-items-center signInBtn">
                        <i className="fab fa-facebook fb"></i>
                        <p><button className="btn btn-white text-primary text-decoration-underline" style={{ marginBottom: '-15px' }}>Continue with Facebook</button></p>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
