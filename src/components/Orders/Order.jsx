import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../App"
import Navigation from "../Navigation/Navigation"
import Spinner from "../Spinner"
import './order.css'
import SingleOrder from "./SingleOrder"

const Order = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://i-dev-pubs-backend.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])

    return (
        <>
            <Navigation />
            <div className="container">
                <div className="bg-light text-primary text-uppercase mt-4 p-3">
                    <h1>Welcome back {loggedInUser.name}</h1>
                </div>
                {
                    orders.length === 0 && <Spinner />
                }
                {orders.length !== 0 && <div className="order bg-light p-3 mt-5">
                    <div className="orderList bg-primary p-3">
                        <div className="text-center text-light"><h2>Your Orders</h2></div> <hr/>
                        {
                            orders.map(order => <SingleOrder order={order} key={order._id} />)
                        }
                    </div>
                </div>}
            </div >
        </>
    )
}

export default Order
