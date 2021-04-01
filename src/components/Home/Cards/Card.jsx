import { Link } from 'react-router-dom'
import '../home.css'

const Card = props => {

    const { _id, name, author, price, image } = props.data

    return (
        <>
            <div className="col-md-4">
                <div className="book">
                    <img className="mb-3" src={image} width="100%" alt="" />
                    <div className="text-start">
                        <h3>{name}</h3>
                        <p>{author}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="price m-0 text-primary">${price}</p>
                            <Link to={"/checkout/" + _id} ><button className="btn btn-primary">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
