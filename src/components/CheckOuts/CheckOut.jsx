import { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { UserContext } from "../../App"
import Navigation from "../Navigation/Navigation"

const CheckOut = () => {

    const [book, setBook] = useState([])
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        fetch('https://i-dev-pubs-backend.herokuapp.com/bookById/' + id)
            .then(res => res.json())
            .then(data => setBook(data[0]))
            .catch(err => console.log(err))
    }, [id])

    const { name, price } = book
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleOrderPlace = () => {
        // const { email, name } = loggedInUser
        const orderData = {
            userName: loggedInUser.name,
            email: loggedInUser.email,
            photo: loggedInUser.photo,
            date: new Date(),
            ...book
        }
        const url = 'https://i-dev-pubs-backend.herokuapp.com/addOrder'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => console.log('Order Placed', res))
            .catch(err => console.log(err))

        alert('Order Placed Successfully')
        history.push('/')

    }

    return (
        <>
            <Navigation />
            <div className="container">
                <div className="pt-5 mt-5 pb-5 mb-5">
                    <h1>CheckOut</h1>
                    <div className="bg-primary text-white p-5 m-3">
                        <p>Name: {name} </p>
                        <p>Price: {price} </p>
                    </div>
                    <button onClick={handleOrderPlace} className="btn btn-primary float-end">CheckOut</button>
                </div>
            </div>
        </>
    )
}

export default CheckOut
