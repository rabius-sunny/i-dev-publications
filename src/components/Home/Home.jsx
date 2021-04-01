import { useEffect, useState } from "react"
import Navigation from "../Navigation/Navigation"
import Spinner from "../Spinner"
import Card from "./Cards/Card"


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
                    <h1 className="pt-5 pb-3">I GROW BY HELPING PEOPLE IN NEED.</h1>
                    <input type="text" />
                    <button className="btn btn-primary">Search</button>
                </div>

                <div className="row mt-5 mb-5 books text-center">
                    {
                        book.length === 0 && <Spinner />
                    }
                    {
                        book.map(data => <Card data={data} key={data._id} />)
                    }
                </div>
            </div>

        </>
    )
}

export default Home

/*
home - done
login
checkout/ single product cart
dashboard/manage books - book list
add book

*/