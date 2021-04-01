import { useEffect, useState } from 'react'
import './admin.css'
import Sidebar from './Sidebar'
const DashboardManagement = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://i-dev-pubs-backend.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    const handleDelete = id => {
        fetch(`https://i-dev-pubs-backend.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => console.log('Book Deleted Succesfully'))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Sidebar />
            <div className="panel bg-light">
                <h2 className="bg-info p-3">Dashboard</h2>
                <div className="list m-4 p-3 bg-white">
                    <table>
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Author Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map(book => {
                                    let data =
                                        <tr>
                                            <td>{book.name}</td>
                                            <td>{book.author}</td>
                                            <td>${book.price}</td>
                                            <td><button className="btn btn-outline-success me-1">edit</button><button onClick={() => handleDelete(book._id)} className="btn btn-outline-danger">delete</button></td>
                                        </tr>;
                                    return data
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DashboardManagement
