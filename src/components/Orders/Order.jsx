import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../App"
import logo from "../../logo.png"
import Spinner from "../Spinner"
import './order.css'

const Order = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://i-dev-pubs-backend.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])

    const Data = props => {
        const { image, name, author, price } = props.order
        return (
            <>
                <div className="d-flex align-items-center mb-3">
                    <div><img src={image} width="150px" alt="order" /></div>
                    <div className="text-light ps-4">
                        <p>Book Name: {name}</p>
                        <p>Author: {author}</p>
                        <p>Price: ${price}</p>
                        <p><button className="btn btn-danger">Remove</button></p>
                    </div>
                </div> <hr/>
            </>
        )
    }

    return (
        <div className="container">
            <div className="text-center"><Link to="/"><img src={logo} className="m-3" width="150px" alt="logo"/></Link></div>
            <div className="bg-light text-primary text-uppercase mt-4 p-3">
                <h1>Welcome back {loggedInUser.name}</h1>
            </div>
            {
                orders.length === 0 && <Spinner />
            }
            { orders.length !== 0 && <div className="order bg-light p-3 mt-5">
                <div className="orderList bg-primary p-3">
                    {
                        orders.map(order => <Data order={order} key={order._id} />)
                    }
                </div>
            </div>}
        </div >
    )
}

export default Order
