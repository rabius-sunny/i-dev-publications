import { useEffect, useState } from "react"
import Navigation from "../Navigation/Navigation"
import Spinner from "../Spinner"
import Card from "./Cards/Card"
import './home.css'

const Home = () => {
    const [book, setBook] = useState([])
    useEffect(() => {
        fetch('https://i-dev-pubs-backend.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBook(data))
    }, [])

    return (
        <>
            <Navigation />
            <div className="container">
                <div className="intro text-center">
                    <h1 className="pt-5 pb-3">WELCOME TO IDEV PUBLICATIONS</h1>
                    <input type="text" id="homeInput" />
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>

            <div className="homeBg">
                <div className="container">
                    <div className="row mt-5 mb-5 books text-center">
                        {
                            book.length === 0 && <Spinner />
                        }
                        {
                            book.map(data => <Card data={data} key={data._id} />)
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
