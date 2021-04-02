import { Link } from "react-router-dom"

const Notfound404 = () => {
    return (
        <div className="container">
            <div className="text center p-5 m-5 bg-light">
                <h1 className="text-danger">404, Sorry, the page you're searching for not found</h1>
                <p className="text-primary text-decoration-underline"><Link to='/'>Go to Home</Link></p>
            </div>
        </div>
    )
}

export default Notfound404
